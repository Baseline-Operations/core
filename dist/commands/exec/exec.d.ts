export interface ExecOptions {
    filter?: string;
    parallel?: boolean;
    failFast?: boolean;
    workspaceRoot?: string;
}
export interface ExecResult {
    success: boolean;
    command: string;
    completed: number;
    failed: number;
    totalRepos: number;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
    failedRepos: Array<{
        name: string;
        error: string;
    }>;
}
/**
 * Execute a command in repositories.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function executeCommand(command: string, options?: ExecOptions): Promise<ExecResult>;
//# sourceMappingURL=exec.d.ts.map