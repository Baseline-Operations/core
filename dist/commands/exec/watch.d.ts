export interface WatchOptions {
    filter?: string;
    workspaceRoot?: string;
    onFileChange?: (repo: string, filePath: string) => void;
    onWatchStart?: (repo: string) => void;
    onWatchStop?: (repo: string) => void;
    onError?: (repo: string, error: string) => void;
}
export interface WatchResult {
    success: boolean;
    watchingCount: number;
    totalRepos: number;
    watchers: Array<{
        repo: string;
        watcher: ReturnType<typeof import("fs").watch> | {
            close: () => void;
        } | null;
        cleanup: () => void;
    }>;
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
    cleanup: () => Promise<void>;
}
/**
 * Watch library repositories for file changes and automatically run tests.
 * Only watches repositories marked as `library: true`.
 * Uses chokidar if available for better performance on large repositories.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function watchRepositories(options?: WatchOptions): Promise<WatchResult>;
//# sourceMappingURL=watch.d.ts.map