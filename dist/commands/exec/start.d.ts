export interface StartOptions {
    filter?: string;
    workspaceRoot?: string;
}
export interface StartResult {
    success: boolean;
    started: number;
    skipped: number;
    totalRepos: number;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
    skippedRepos: Array<{
        name: string;
        reason: string;
    }>;
    errorRepos: Array<{
        name: string;
        error: string;
    }>;
}
/**
 * Start applications across repositories.
 * Only runs start commands explicitly configured in baseline.json or baseline.project.json.
 * Does not auto-detect from package.json (for safety).
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function startApplications(options?: StartOptions): Promise<StartResult>;
//# sourceMappingURL=start.d.ts.map