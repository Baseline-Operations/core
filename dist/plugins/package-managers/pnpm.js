import { execa } from "execa";
import { existsSync } from "fs";
import { join } from "path";
/**
 * Built-in pnpm package manager plugin.
 * Provides pnpm workspace support.
 */
const pnpmPlugin = {
    metadata: {
        id: "pnpm",
        name: "pnpm",
        version: "1.0.0",
        description: "pnpm package manager support",
        type: "package-manager",
        baselineVersion: "0.1.0",
        requiresLanguages: ["node"],
    },
    async isInstalled() {
        try {
            await execa("pnpm", ["--version"], { timeout: 5000 });
            return true;
        }
        catch {
            return false;
        }
    },
    async getVersion() {
        try {
            const { stdout } = await execa("pnpm", ["--version"], {
                timeout: 5000,
            });
            return stdout.trim();
        }
        catch {
            return null;
        }
    },
    getInstallCommand() {
        return "pnpm install";
    },
    getRunCommand() {
        return ["pnpm", "run"];
    },
    async createWorkspaceConfig(repos, workspaceRoot) {
        const packagePaths = repos
            .filter((r) => existsSync(join(workspaceRoot, r.path, "package.json")))
            .map((r) => `"${r.path}"`);
        if (packagePaths.length === 0) {
            return null;
        }
        const workspaceContent = `packages:
${packagePaths.map((p) => `  - ${p}`).join("\n")}
`;
        return {
            file: "pnpm-workspace.yaml",
            content: workspaceContent,
        };
    },
};
export default pnpmPlugin;
//# sourceMappingURL=pnpm.js.map