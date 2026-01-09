import { PluginDependency } from "../types/config.js";
/**
 * Plugin installation directory (git-ignored)
 */
export declare const PLUGIN_INSTALL_DIR = ".baseline/.plugins";
/**
 * Plugin lock file to track installed versions
 */
export declare const PLUGIN_LOCK_FILE = ".baseline/.plugins.lock.json";
export interface InstalledPlugin {
    id: string;
    version: string;
    source: "npm" | "git" | "local" | "remote";
    location: string;
    installedAt: string;
}
export interface PluginLock {
    plugins: Record<string, InstalledPlugin>;
    version: string;
}
/**
 * Install a plugin from various sources.
 */
export declare class PluginInstaller {
    /**
     * Get the plugin installation directory path.
     */
    static getPluginDir(workspaceRoot: string): string;
    /**
     * Get the plugin lock file path.
     */
    static getLockFile(workspaceRoot: string): string;
    /**
     * Load the plugin lock file.
     */
    static loadLock(workspaceRoot: string): Promise<PluginLock>;
    /**
     * Save the plugin lock file.
     */
    static saveLock(workspaceRoot: string, lock: PluginLock): Promise<void>;
    /**
     * Install a plugin from npm.
     */
    static installFromNpm(workspaceRoot: string, packageName: string, version?: string): Promise<InstalledPlugin>;
    /**
     * Install a plugin from a Git URL.
     */
    static installFromGit(workspaceRoot: string, gitUrl: string, version?: string): Promise<InstalledPlugin>;
    /**
     * Install a plugin from a local path.
     */
    static installFromLocal(workspaceRoot: string, localPath: string): Promise<InstalledPlugin>;
    /**
     * Install a plugin from a remote URL (direct download).
     */
    static installFromRemote(workspaceRoot: string, url: string): Promise<InstalledPlugin>;
    /**
     * Install a plugin based on dependency specification.
     */
    static install(workspaceRoot: string, pluginId: string, dependency: PluginDependency): Promise<InstalledPlugin>;
    /**
     * Infer source type from dependency specification.
     */
    static inferSource(dependency: PluginDependency): "npm" | "git" | "local" | "remote";
    /**
     * List all installed plugins.
     */
    static listInstalled(workspaceRoot: string): Promise<InstalledPlugin[]>;
    /**
     * Remove a plugin.
     */
    static remove(workspaceRoot: string, pluginId: string): Promise<void>;
    /**
     * Get installed plugin path.
     */
    static getPluginPath(workspaceRoot: string, pluginId: string): Promise<string | null>;
}
//# sourceMappingURL=plugin-installer.d.ts.map