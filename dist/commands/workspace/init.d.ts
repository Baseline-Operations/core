export interface InitOptions {
    force?: boolean;
    workspaceRoot?: string;
}
export interface InitResult {
    success: boolean;
    workspaceRoot: string;
    configPath: string;
    generatedFiles: string[];
    errors?: string[];
}
/**
 * Initialize a new baseline workspace.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function initWorkspace(options?: InitOptions): Promise<InitResult>;
//# sourceMappingURL=init.d.ts.map