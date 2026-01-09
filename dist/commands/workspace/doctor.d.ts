export interface DoctorOptions {
    workspaceRoot?: string;
}
export interface DoctorResult {
    success: boolean;
    errors: number;
    warnings: number;
    issues: Array<{
        severity: "error" | "warning" | "info";
        message: string;
        category?: string;
    }>;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
        category?: string;
    }>;
}
/**
 * Run health checks on the workspace.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function doctorCheck(options?: DoctorOptions): Promise<DoctorResult>;
//# sourceMappingURL=doctor.d.ts.map