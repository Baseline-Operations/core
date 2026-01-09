export interface SyncOptions {
    workspaceRoot?: string;
}
export interface SyncResult {
    success: boolean;
    synced: number;
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
    skippedRepos: Array<{
        name: string;
        reason: string;
    }>;
}
/**
 * Sync all repositories (fetch and pull).
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function syncRepositories(options?: SyncOptions): Promise<SyncResult>;
//# sourceMappingURL=sync.d.ts.map