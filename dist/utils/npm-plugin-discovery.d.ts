export interface NpmPluginInfo {
    name: string;
    version: string;
    description?: string;
    baselinePluginId?: string;
    baselinePlugin?: string;
    keywords?: string[];
}
/**
 * Discover baseline plugins from npm packages.
 * Searches for packages with "baseline-plugin" keyword.
 */
export declare class NpmPluginDiscovery {
    /**
     * Search npm for baseline plugins.
     */
    static search(query?: string): Promise<NpmPluginInfo[]>;
    /**
     * Get plugin information from installed npm package.
     */
    static getPluginInfo(packageName: string, workspaceRoot: string): Promise<NpmPluginInfo | null>;
    /**
     * Discover baseline plugins from package.json dependencies.
     */
    static discoverFromDependencies(workspaceRoot: string): Promise<NpmPluginInfo[]>;
}
//# sourceMappingURL=npm-plugin-discovery.d.ts.map