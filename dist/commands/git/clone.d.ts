export interface CloneOptions {
    workspaceRoot?: string;
}
export interface CloneResult {
    success: boolean;
    cloned: number;
    skipped: number;
    errors: number;
    totalRepos: number;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
    errorRepos: Array<{
        name: string;
        error: string;
    }>;
}
/**
 * Clone all repositories that haven't been cloned yet.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function cloneRepositories(options?: CloneOptions): Promise<CloneResult>;
//# sourceMappingURL=clone.d.ts.map