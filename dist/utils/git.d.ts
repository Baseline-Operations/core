export interface GitStatus {
    branch: string;
    isDirty: boolean;
    ahead: number;
    behind: number;
    hasUncommittedChanges: boolean;
}
export declare class GitUtil {
    static isRepo(path: string): Promise<boolean>;
    static getStatus(repoPath: string): Promise<GitStatus>;
    static getRemoteName(repoPath: string): Promise<string>;
    static clone(gitUrl: string, targetPath: string, retry?: boolean): Promise<void>;
    static fetch(repoPath: string, retry?: boolean): Promise<void>;
    static pull(repoPath: string, branch?: string, retry?: boolean): Promise<void>;
    static checkoutBranch(repoPath: string, branch: string, create?: boolean): Promise<void>;
}
//# sourceMappingURL=git.d.ts.map