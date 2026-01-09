import { Package, NormalizedPackage, LanguagesConfig, VersionPolicy, BaselineConfig } from "../types/config.js";
/**
 * Normalize a package (string or object) to always be an object.
 * Supports both new structure (id, location, version) and legacy structure.
 */
export declare function normalizePackage(pkg: Package, _workspaceRoot?: string): NormalizedPackage;
/**
 * Legacy alias for backward compatibility.
 * @deprecated Use normalizePackage instead
 */
export declare function normalizeRepo(repo: Package, workspaceRoot?: string): NormalizedPackage;
/**
 * Parse version string to VersionPolicy object.
 * Supports: ">=20.0.0", "<=5.0.0", "^1.0.0", "~2.0.0", "5.0.0" (exact)
 */
export declare function parseVersionPolicy(version: string): VersionPolicy;
/**
 * Convert simplified languages config to version policies map.
 */
export declare function languagesConfigToVersionPolicies(languages: LanguagesConfig): Record<string, VersionPolicy>;
/**
 * Normalize all packages in a config (convert strings to objects).
 */
export declare function normalizeAllPackages(packages: Package[], workspaceRoot?: string): NormalizedPackage[];
/**
 * Get packages from config with backward compatibility for repos.
 */
export declare function getPackagesFromConfig(config: BaselineConfig): Package[];
/**
 * Normalize all packages from a config.
 */
export declare function normalizeAllPackagesFromConfig(config: BaselineConfig, workspaceRoot?: string): NormalizedPackage[];
/**
 * Legacy alias for backward compatibility.
 * @deprecated Use normalizeAllPackages instead
 */
export declare function normalizeAllRepos(repos: Package[], workspaceRoot?: string): NormalizedPackage[];
//# sourceMappingURL=config-helpers.d.ts.map