import { NormalizedPackage } from "../../types/config.js";
export interface AddOptions {
    name?: string;
    path?: string;
    tags?: string[];
    languages?: string[];
    packageManager?: "npm" | "pnpm" | "yarn";
    library?: boolean;
    commands?: {
        test?: string;
        lint?: string;
        start?: string;
    };
    startInDocker?: boolean;
    dockerImage?: string;
    requiredPlugins?: string[];
}
export interface AddRepositoryOptions extends AddOptions {
    workspaceRoot?: string;
}
export interface AddRepositoryResult {
    success: boolean;
    repo: NormalizedPackage;
    errors?: string[];
}
/**
 * Add a repository to the workspace configuration.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function addRepository(gitUrl: string, options?: AddRepositoryOptions): Promise<AddRepositoryResult>;
//# sourceMappingURL=add.d.ts.map