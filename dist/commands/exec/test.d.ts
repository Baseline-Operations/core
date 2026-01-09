export interface TestOptions {
    filter?: string;
    parallel?: boolean;
    failFast?: boolean;
    workspaceRoot?: string;
}
export interface TestResult {
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
 * Run test and lint commands for all repositories.
 * Tests run both lint and test commands (lint first, then test).
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function runTests(options?: TestOptions): Promise<TestResult>;
//# sourceMappingURL=test.d.ts.map