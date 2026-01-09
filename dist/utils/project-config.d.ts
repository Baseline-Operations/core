import { ProjectConfig } from "../types/config.js";
/**
 * Utility for loading and validating baseline.project.json files.
 */
export declare class ProjectConfigLoader {
    private static readonly PROJECT_CONFIG_FILE;
    /**
     * Load project config from a repository directory.
     */
    static load(repoPath: string): ProjectConfig | null;
    /**
     * Check if a project config file exists.
     */
    static exists(repoPath: string): boolean;
}
//# sourceMappingURL=project-config.d.ts.map