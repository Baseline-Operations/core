export interface PrCreateOptions {
    title?: string;
    body?: string;
    base?: string;
    draft?: boolean;
    repo?: string;
    workspaceRoot?: string;
}
export interface PrResult {
    success: boolean;
    created: number;
    skipped: number;
    errors: number;
    prUrls: Array<{
        repo: string;
        url: string;
    }>;
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
 * Create pull requests for repositories.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function createPullRequests(options?: PrCreateOptions): Promise<PrResult>;
//# sourceMappingURL=pr.d.ts.map