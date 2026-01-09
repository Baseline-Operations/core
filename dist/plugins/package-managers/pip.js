import { execa } from "execa";
/**
 * Built-in pip package manager plugin for Python.
 */
const pipPlugin = {
    metadata: {
        id: "pip",
        name: "pip",
        version: "1.0.0",
        description: "pip package manager support for Python",
        type: "package-manager",
        baselineVersion: "0.1.0",
        requiresLanguages: ["python"],
    },
    async isInstalled() {
        try {
            await execa("pip", ["--version"], { timeout: 5000 });
            return true;
        }
        catch {
            return false;
        }
    },
    async getVersion() {
        try {
            const { stdout } = await execa("pip", ["--version"], {
                timeout: 5000,
            });
            return stdout.trim().split(" ")[1] || null;
        }
        catch {
            return null;
        }
    },
    getInstallCommand() {
        return "pip install -r requirements.txt";
    },
    getRunCommand() {
        return ["python", "-m"]; // Python modules
    },
    async createWorkspaceConfig(_repos, _workspaceRoot) {
        // Python doesn't have a standard workspace file like npm/yarn
        // Could create a requirements.txt that includes all repos, but that's uncommon
        // For now, return null as Python repos are typically independent
        return null;
    },
};
export default pipPlugin;
//# sourceMappingURL=pip.js.map