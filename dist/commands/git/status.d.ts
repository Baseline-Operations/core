export interface StatusOptions {
    workspaceRoot?: string;
}
export interface RepoStatus {
    name: string;
    branch: string;
    isDirty: boolean;
    ahead: number;
    behind: number;
    notCloned?: boolean;
    error?: string;
}
export interface StatusResult {
    success: boolean;
    repos: RepoStatus[];
    messages: Array<{
        type: "info" | "error" | "warn";
        message: string;
    }>;
}
/**
 * Get status of all repositories.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function getRepositoryStatus(options?: StatusOptions): Promise<StatusResult>;
//# sourceMappingURL=status.d.ts.map