export interface LinkOptions {
    workspaceRoot?: string;
}
export interface LinkResult {
    success: boolean;
    linkedConfigs: Array<{
        file: string;
        pm: string;
        packages: number;
    }>;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
}
/**
 * Link workspace repositories using package manager plugins.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function linkRepositories(options?: LinkOptions): Promise<LinkResult>;
//# sourceMappingURL=link.d.ts.map