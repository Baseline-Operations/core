import { execa } from "execa";
import { existsSync } from "fs";
import { join } from "path";
export class PackageManagerUtil {
    static async detect(repoPath) {
        // Check for lock files in priority order
        if (existsSync(join(repoPath, "pnpm-lock.yaml"))) {
            return "pnpm";
        }
        if (existsSync(join(repoPath, "yarn.lock"))) {
            return "yarn";
        }
        if (existsSync(join(repoPath, "package-lock.json"))) {
            return "npm";
        }
        // Check if package.json exists (could use any manager)
        if (existsSync(join(repoPath, "package.json"))) {
            // Try to detect which one is installed globally or preferred
            try {
                const { stdout } = await execa("which", ["pnpm"]);
                if (stdout.trim())
                    return "pnpm";
            }
            catch {
                // pnpm not found
            }
            try {
                const { stdout } = await execa("which", ["yarn"]);
                if (stdout.trim())
                    return "yarn";
            }
            catch {
                // yarn not found
            }
            return "npm"; // Default fallback
        }
        return null;
    }
    static async isInstalled(pm) {
        try {
            await execa(pm, ["--version"]);
            return true;
        }
        catch {
            return false;
        }
    }
    static async getVersion(pm) {
        try {
            const { stdout } = await execa(pm, ["--version"]);
            return stdout.trim();
        }
        catch {
            return null;
        }
    }
}
//# sourceMappingURL=package-manager.js.map