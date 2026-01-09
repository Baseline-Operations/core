export interface PluginRegistryEntry {
    id: string;
    name: string;
    version: string;
    description?: string;
    author?: string;
    source: "npm" | "git" | "remote";
    location: string;
    keywords?: string[];
    baselineVersion?: string;
    requires?: string[];
    requiresLanguages?: string[];
}
export interface PluginRegistry {
    plugins: PluginRegistryEntry[];
    version: string;
    updatedAt: string;
}
/**
 * Plugin registry client for discovering and installing plugins from remote registry.
 */
export declare class PluginRegistryClient {
    private static readonly DEFAULT_REGISTRY_URL;
    private static readonly REGISTRY_CACHE_FILE;
    private static readonly CACHE_TTL;
    /**
     * Get registry URL from config or environment variable.
     */
    static getRegistryUrl(_workspaceRoot: string): string;
    /**
     * Load cached registry data.
     */
    static loadCache(workspaceRoot: string): Promise<PluginRegistry | null>;
    /**
     * Save registry data to cache.
     */
    static saveCache(workspaceRoot: string, registry: PluginRegistry): Promise<void>;
    /**
     * Fetch plugin registry from remote URL.
     */
    static fetchRegistry(workspaceRoot: string, registryUrl?: string): Promise<PluginRegistry>;
    /**
     * Get plugin registry (cached or fresh).
     */
    static getRegistry(workspaceRoot: string, forceRefresh?: boolean): Promise<PluginRegistry>;
    /**
     * Search plugins in registry.
     */
    static search(workspaceRoot: string, query: string): Promise<PluginRegistryEntry[]>;
    /**
     * Get plugin by ID.
     */
    static getPlugin(workspaceRoot: string, pluginId: string): Promise<PluginRegistryEntry | null>;
}
//# sourceMappingURL=plugin-registry.d.ts.map