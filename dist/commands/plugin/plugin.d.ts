export interface PluginInstallOptions {
    version?: string;
    source?: "npm" | "git" | "local" | "remote";
    url?: string;
    path?: string;
    save?: boolean;
    workspaceRoot?: string;
}
export interface PluginInstallResult {
    success: boolean;
    pluginId: string;
    pluginVersion?: string;
    addedToConfig: boolean;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
}
export interface PluginListResult {
    success: boolean;
    plugins: Array<{
        id: string;
        version: string;
        source: string;
        location: string;
        installedAt: string;
    }>;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
}
export interface PluginRemoveResult {
    success: boolean;
    pluginId: string;
    removedFromConfig: boolean;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
}
export interface PluginInstallAllResult {
    success: boolean;
    installed: number;
    failed: number;
    plugins: Array<{
        id: string;
        version: string;
        success: boolean;
        error?: string;
    }>;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
}
export interface PluginSearchResult {
    success: boolean;
    plugins: Array<{
        id: string;
        name: string;
        version: string;
        description?: string;
        source: string;
        requiresLanguages?: string[];
    }>;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
}
/**
 * Install a plugin.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function installPlugin(pluginId: string, options?: PluginInstallOptions): Promise<PluginInstallResult>;
/**
 * List installed plugins.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function listPlugins(options?: {
    workspaceRoot?: string;
}): Promise<PluginListResult>;
/**
 * Remove a plugin.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function removePlugin(pluginId: string, options?: {
    removeFromConfig?: boolean;
    workspaceRoot?: string;
}): Promise<PluginRemoveResult>;
/**
 * Install all plugins from baseline.json dependencies.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function installAllPlugins(options?: {
    workspaceRoot?: string;
}): Promise<PluginInstallAllResult>;
/**
 * Search for plugins in npm registry.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function searchPlugins(query: string, options?: {
    registry?: boolean;
    workspaceRoot?: string;
}): Promise<PluginSearchResult>;
//# sourceMappingURL=plugin.d.ts.map