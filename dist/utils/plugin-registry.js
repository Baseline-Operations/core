import { execa } from "execa";
import { Logger } from "./logger.js";
import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
/**
 * Plugin registry client for discovering and installing plugins from remote registry.
 */
export class PluginRegistryClient {
    static DEFAULT_REGISTRY_URL = "https://registry.baseline.dev/plugins";
    static REGISTRY_CACHE_FILE = ".baseline/.registry-cache.json";
    static CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
    /**
     * Get registry URL from config or environment variable.
     */
    static getRegistryUrl(_workspaceRoot) {
        // TODO: Check baseline.json for custom registry URL
        // For now, check environment variable
        return process.env.BASELINE_PLUGIN_REGISTRY || this.DEFAULT_REGISTRY_URL;
    }
    /**
     * Load cached registry data.
     */
    static async loadCache(workspaceRoot) {
        const cachePath = join(workspaceRoot, this.REGISTRY_CACHE_FILE);
        if (!existsSync(cachePath)) {
            return null;
        }
        try {
            const content = await readFile(cachePath, "utf-8");
            const cache = JSON.parse(content);
            const age = Date.now() - new Date(cache.updatedAt).getTime();
            if (age > this.CACHE_TTL) {
                return null; // Cache expired
            }
            return cache;
        }
        catch {
            return null;
        }
    }
    /**
     * Save registry data to cache.
     */
    static async saveCache(workspaceRoot, registry) {
        const cachePath = join(workspaceRoot, this.REGISTRY_CACHE_FILE);
        await mkdir(join(workspaceRoot, ".baseline"), { recursive: true });
        await writeFile(cachePath, JSON.stringify(registry, null, 2) + "\n");
    }
    /**
     * Fetch plugin registry from remote URL.
     */
    static async fetchRegistry(workspaceRoot, registryUrl) {
        const url = registryUrl || this.getRegistryUrl(workspaceRoot);
        Logger.debug(`Fetching plugin registry from ${url}...`);
        try {
            // Try fetch first (Node.js 18+)
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Registry request failed: ${response.statusText}`);
                }
                const data = (await response.json());
                const registry = {
                    plugins: data.plugins || [],
                    version: data.version || "1.0.0",
                    updatedAt: new Date().toISOString(),
                };
                await this.saveCache(workspaceRoot, registry);
                return registry;
            }
            catch {
                // Fallback to curl
                const { stdout } = await execa("curl", ["-L", "-s", url], {
                    timeout: 10000,
                });
                const data = JSON.parse(stdout);
                const registry = {
                    plugins: data.plugins || [],
                    version: data.version || "1.0.0",
                    updatedAt: new Date().toISOString(),
                };
                await this.saveCache(workspaceRoot, registry);
                return registry;
            }
        }
        catch (error) {
            Logger.warn(`Failed to fetch plugin registry: ${error instanceof Error ? error.message : String(error)}`);
            // Try to return cached data
            const cache = await this.loadCache(workspaceRoot);
            if (cache) {
                Logger.info("Using cached registry data");
                return cache;
            }
            throw error;
        }
    }
    /**
     * Get plugin registry (cached or fresh).
     */
    static async getRegistry(workspaceRoot, forceRefresh = false) {
        if (!forceRefresh) {
            const cache = await this.loadCache(workspaceRoot);
            if (cache) {
                return cache;
            }
        }
        return this.fetchRegistry(workspaceRoot);
    }
    /**
     * Search plugins in registry.
     */
    static async search(workspaceRoot, query) {
        const registry = await this.getRegistry(workspaceRoot);
        const lowerQuery = query.toLowerCase();
        return registry.plugins.filter((plugin) => plugin.id.toLowerCase().includes(lowerQuery) ||
            plugin.name.toLowerCase().includes(lowerQuery) ||
            plugin.description?.toLowerCase().includes(lowerQuery) ||
            plugin.keywords?.some((k) => k.toLowerCase().includes(lowerQuery)));
    }
    /**
     * Get plugin by ID.
     */
    static async getPlugin(workspaceRoot, pluginId) {
        const registry = await this.getRegistry(workspaceRoot);
        return registry.plugins.find((p) => p.id === pluginId) || null;
    }
}
//# sourceMappingURL=plugin-registry.js.map