export interface BranchOptions {
    create?: boolean;
    force?: boolean;
    workspaceRoot?: string;
}
export interface BranchResult {
    success: boolean;
    created: number;
    checkedOut: number;
    skipped: number;
    errors: number;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
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
 * Create or checkout branches across repositories.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function branchRepositories(branchName: string, options?: BranchOptions): Promise<BranchResult>;
//# sourceMappingURL=branch.d.ts.map