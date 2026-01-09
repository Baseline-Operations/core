export interface ReleaseOptions {
    workspaceRoot?: string;
}
export interface PackageInfo {
    name: string;
    path: string;
    currentVersion: string;
    hasChanges: boolean;
}
export interface ReleasePlanResult {
    success: boolean;
    packages: PackageInfo[];
    hasChangesets: boolean;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
    table?: Array<[string, string, string, string]>;
}
export interface ReleaseVersionResult {
    success: boolean;
    usedChangesets: boolean;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
    packages?: Array<{
        name: string;
        version: string;
        path: string;
    }>;
}
export interface ReleasePublishResult {
    success: boolean;
    usedChangesets: boolean;
    messages: Array<{
        type: "info" | "success" | "error" | "warn" | "dim";
        message: string;
    }>;
    packages?: Array<{
        name: string;
        version: string;
        publishable: boolean;
    }>;
}
/**
 * Release management command - routes to appropriate subcommand.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function releaseCommand(subcommand: "plan" | "version" | "publish", options?: ReleaseOptions): Promise<ReleasePlanResult | ReleaseVersionResult | ReleasePublishResult>;
//# sourceMappingURL=release.d.ts.map