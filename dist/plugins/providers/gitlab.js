import { execa } from "execa";
/**
 * Built-in GitLab provider plugin.
 * Provides GitLab integration for PR/MR creation and repository management.
 */
const gitlabPlugin = {
    metadata: {
        id: "gitlab",
        name: "GitLab",
        version: "1.0.0",
        description: "GitLab provider for MR creation and repository management",
        type: "provider",
        baselineVersion: "0.1.0",
    },
    matchesUrl(url) {
        return /^(https?:\/\/)?(www\.)?gitlab\.com\/[\w.-]+\/[\w.-]+(\.git)?$/.test(url) || /^(https?:\/\/)?[\w.-]+\.gitlab\.(com|io)\/[\w.-]+\/[\w.-]+(\.git)?$/.test(url);
    },
    getRepoUrlPattern() {
        return "gitlab.com/**";
    },
    getGitUrl(repo) {
        return `https://gitlab.com/${repo.owner}/${repo.name}.git`;
    },
    async createPullRequest(options) {
        // Check if glab CLI is available
        try {
            await execa("glab", ["--version"], { timeout: 5000 });
        }
        catch {
            throw new Error("GitLab CLI (glab) is not installed. Install it from https://gitlab.com/gitlab-org/cli");
        }
        const args = [
            "mr",
            "create",
            "--title",
            options.title,
            "--target-branch",
            options.base,
            "--source-branch",
            options.head,
        ];
        if (options.body) {
            args.push("--description", options.body);
        }
        if (options.draft) {
            args.push("--draft");
        }
        try {
            const { stdout } = await execa("glab", args, {
                cwd: options.repoPath,
            });
            return stdout.trim();
        }
        catch (error) {
            throw new Error(`Failed to create MR: ${error instanceof Error ? error.message : String(error)}`);
        }
    },
};
export default gitlabPlugin;
//# sourceMappingURL=gitlab.js.map