import { NormalizedRepo } from "../types/config.js";
/**
 * Get the git URL for a repository.
 * Handles gitUrl (direct), repository (provider-based), or local (returns null).
 */
export declare function getRepoGitUrl(repo: NormalizedRepo): Promise<string | null>;
//# sourceMappingURL=repo-url.d.ts.map