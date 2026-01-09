import { VersionPolicy } from "../types/config.js";
/**
 * Utility class for validating version strings against version policies.
 * Supports both semantic versioning (semver) and string-based comparison.
 */
export declare class VersionCheck {
    /**
     * Check if a version satisfies the given version policy.
     *
     * @param version - Version string to check (e.g., "1.2.3" or "1.0")
     * @param policy - Version policy with min/max/exact constraints
     * @returns Object with `valid` boolean and optional `reason` string
     *
     * @example
     * ```ts
     * // Check exact version
     * VersionCheck.satisfies("1.2.3", { exact: "1.2.3" });
     *
     * // Check minimum version
     * VersionCheck.satisfies("2.0.0", { min: "1.0.0" });
     *
     * // Check version range
     * VersionCheck.satisfies("1.5.0", { min: "1.0.0", max: "2.0.0" });
     * ```
     */
    static satisfies(version: string, policy?: VersionPolicy): {
        valid: boolean;
        reason?: string;
    };
}
//# sourceMappingURL=version-check.d.ts.map