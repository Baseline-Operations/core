import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { ProjectConfigSchema } from "../types/config.js";
/**
 * Utility for loading and validating baseline.project.json files.
 */
export class ProjectConfigLoader {
    static PROJECT_CONFIG_FILE = "baseline.project.json";
    /**
     * Load project config from a repository directory.
     */
    static load(repoPath) {
        const configPath = join(repoPath, this.PROJECT_CONFIG_FILE);
        if (!existsSync(configPath)) {
            return null;
        }
        try {
            const content = readFileSync(configPath, "utf-8");
            const parsed = JSON.parse(content);
            const result = ProjectConfigSchema.safeParse(parsed);
            if (!result.success) {
                return null;
            }
            return result.data;
        }
        catch {
            return null;
        }
    }
    /**
     * Check if a project config file exists.
     */
    static exists(repoPath) {
        const configPath = join(repoPath, this.PROJECT_CONFIG_FILE);
        return existsSync(configPath);
    }
}
//# sourceMappingURL=project-config.js.map