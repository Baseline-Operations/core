import { existsSync } from "fs";
import { join } from "path";
/**
 * Built-in Go language plugin.
 */
const goPlugin = {
    metadata: {
        id: "go",
        name: "Go",
        version: "1.0.0",
        description: "Go language support with version policies",
        type: "language",
    },
    getLanguageProfile(options = {}) {
        return {
            displayName: "Go",
            toolchain: [
                {
                    name: "go",
                    versionPolicy: options.versionPolicies?.go,
                },
            ],
            projectMarkers: ["go.mod", "go.sum"],
        };
    },
    getDetectionCommand(toolName) {
        if (toolName === "go") {
            return { command: "go", args: ["version"] };
        }
        return null;
    },
    async detectLanguage(repoPath) {
        // Check for Go project markers
        return (existsSync(join(repoPath, "go.mod")) ||
            existsSync(join(repoPath, "go.sum")));
    },
};
export default goPlugin;
//# sourceMappingURL=go.js.map