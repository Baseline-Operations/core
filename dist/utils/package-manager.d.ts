export type PackageManager = "npm" | "pnpm" | "yarn";
export declare class PackageManagerUtil {
    static detect(repoPath: string): Promise<PackageManager | null>;
    static isInstalled(pm: PackageManager): Promise<boolean>;
    static getVersion(pm: PackageManager): Promise<string | null>;
}
//# sourceMappingURL=package-manager.d.ts.map