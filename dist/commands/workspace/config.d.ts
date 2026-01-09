export interface ConfigOptions {
    repo?: string;
    force?: boolean;
    workspaceRoot?: string;
}
export interface ConfigResult {
    success: boolean;
    generated: number;
    updated: number;
    skipped: number;
    totalRepos: number;
    configFiles: Array<{
        repo: string;
        path: string;
        commands: string[];
    }>;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
    errorRepos: Array<{
        name: string;
        error: string;
    }>;
    skippedRepos: Array<{
        name: string;
        reason: string;
    }>;
}
/**
 * Generate or update project configuration files for repositories.
 * Creates baseline.project.json files in each repo with test/lint/start commands.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function configRepositories(options?: ConfigOptions): Promise<ConfigResult>;
//# sourceMappingURL=config.d.ts.map