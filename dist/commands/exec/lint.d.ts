export interface LintOptions {
    filter?: string;
    parallel?: boolean;
    failFast?: boolean;
    workspaceRoot?: string;
}
export interface LintResult {
    success: boolean;
    completed: number;
    failed: number;
    skipped: number;
    totalRepos: number;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
    failedRepos: Array<{
        name: string;
        error: string;
    }>;
    skippedRepos: Array<{
        name: string;
        reason: string;
    }>;
}
/**
 * Run lint commands for all repositories.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function runLint(options?: LintOptions): Promise<LintResult>;
//# sourceMappingURL=lint.d.ts.map