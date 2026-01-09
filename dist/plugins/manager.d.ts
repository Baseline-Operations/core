import { BaselinePlugin, LanguagePlugin, LanguagePluginOptions, LanguageProfile } from "./types.js";
/**
 * Plugin manager for loading and managing baseline plugins.
 * Supports built-in plugins and external plugin discovery.
 */
export declare class PluginManager {
    private static instance;
    private plugins;
    private constructor();
    /**
     * Get singleton instance of PluginManager.
     */
    static getInstance(): PluginManager;
    /**
     * Initialize the plugin manager and load built-in plugins.
     * Automatically discovers external plugins if workspace root is available.
     * Also installs plugins from baseline.json dependencies if needed.
     */
    initialize(): Promise<void>;
    /**
     * Register a plugin with the manager.
     */
    registerPlugin(plugin: BaselinePlugin): void;
    /**
     * Get a plugin by ID.
     */
    getPlugin(id: string): BaselinePlugin | undefined;
    /**
     * Get all plugins of a specific type.
     */
    getPluginsByType(type: BaselinePlugin["metadata"]["type"]): BaselinePlugin[];
    /**
     * Get all language plugins.
     */
    getLanguagePlugins(): LanguagePlugin[];
    /**
     * Get language profile from a plugin.
     */
    getLanguageProfile(pluginId: string, options?: LanguagePluginOptions): LanguageProfile | null;
    /**
     * Load all built-in plugins.
     * Imports from the builtin index file.
     */
    private loadBuiltInPlugins;
    /**
     * Validate that an object is a valid plugin.
     */
    private isValidPlugin;
    /**
     * Check if baseline version requirement is satisfied.
     */
    private checkBaselineVersion;
    /**
     * Check if plugin dependencies are satisfied.
     */
    private checkDependencies;
    /**
     * Check if required languages are available.
     */
    private checkRequiredLanguages;
    /**
     * Discover external plugins from workspace or global locations.
     * Loads plugins from:
     * - Installed plugins (.baseline/.plugins/)
     * - User-managed plugins (.baseline/plugins/)
     * - npm packages with "baseline-plugin" keyword (from package.json dependencies)
     * - Remote plugin registry (TODO: full implementation)
     */
    discoverExternalPlugins(workspaceRoot?: string): Promise<void>;
    /**
     * Load a single plugin from a file.
     */
    private loadPluginFromFile;
    /**
     * Load a plugin package from a directory.
     */
    private loadPluginFromDirectory;
    /**
     * Register a plugin with dependency and version checks.
     */
    private registerPluginWithChecks;
    /**
     * Register a plugin package (multiple plugins).
     */
    private registerPluginPackage;
    /**
     * Validate that an object is a valid plugin package.
     */
    private isValidPluginPackage;
}
//# sourceMappingURL=manager.d.ts.map