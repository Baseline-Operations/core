/**
 * Gets the configured command name for the CLI.
 * Checks in order:
 * 1. BASELINE_COMMAND environment variable
 * 2. .baseline/command file (git-ignored)
 * 3. Default: "bl"
 *
 * @param workspaceRoot The workspace root directory. Defaults to current working directory.
 * @returns The command name to use.
 */
export declare function getCommandName(workspaceRoot?: string): string;
/**
 * Creates the .baseline/command.example file with instructions.
 * @param workspaceRoot The workspace root directory.
 */
export declare function createCommandExample(workspaceRoot?: string): Promise<void>;
//# sourceMappingURL=command-name.d.ts.map