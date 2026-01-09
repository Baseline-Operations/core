import { PluginManager } from "../plugins/manager.js";
import { ProjectFile } from "../plugins/types.js";
/**
 * Utility class for discovering language-specific information from repositories.
 * Uses language plugins to detect commands, project files, and language types.
 */
export declare class LanguageDiscovery {
    /**
     * Discover commands for a repository using language plugins.
     * @param repo Repository to discover commands for
     * @param workspaceRoot Workspace root path
     * @param commandType Type of command to discover (test, lint, or start)
     * @param pluginManager Optional plugin manager (uses singleton if not provided)
     * @returns Discovered command string or null
     */
    static discoverCommand(repo: import("../types/config.js").NormalizedRepo, workspaceRoot: string, commandType: "test" | "lint" | "start", pluginManager?: PluginManager): Promise<string | null>;
    /**
     * Get project files to check for a repository based on language plugins.
     * @param repo Repository to get project files for
     * @param workspaceRoot Workspace root path
     * @param pluginManager Optional plugin manager
     * @returns Array of project files to check
     */
    static getProjectFiles(repo: import("../types/config.js").NormalizedRepo, workspaceRoot: string, pluginManager?: PluginManager): Promise<ProjectFile[]>;
    /**
     * Detect the language(s) of a repository using language plugins.
     * @param repoPath Path to the repository
     * @param pluginManager Optional plugin manager
     * @returns Array of detected language IDs
     */
    static detectLanguages(repoPath: string, pluginManager?: PluginManager): Promise<string[]>;
    /**
     * Get the command runner for a repository based on its languages.
     * Uses language plugins to determine the appropriate command runner.
     * @param repo Repository to get command runner for
     * @param workspaceRoot Workspace root path
     * @param configManager Config manager to get package manager from
     * @param pluginManager Optional plugin manager
     * @returns Command runner configuration or null if commands should run directly
     */
    static getCommandRunner(repo: import("../types/config.js").NormalizedRepo, workspaceRoot: string, configManager: import("../config/manager.js").ConfigManager, pluginManager?: PluginManager): Promise<{
        runner: string | null;
        args: string[];
    }>;
}
//# sourceMappingURL=language-discovery.d.ts.map