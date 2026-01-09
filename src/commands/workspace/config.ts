import { join, dirname } from "path";
import { mkdir, writeFile } from "fs/promises";
import { ConfigManager } from "../../config/manager";
import { PluginManager } from "../../plugins/manager";
import { EditorPlugin } from "../../plugins/types";

export interface ConfigOptions {
	repo?: string;
	force?: boolean;
	workspaceRoot?: string;
}

export interface ConfigResult {
	success: boolean;
	generated: number;
	updated: number;
	skipped: number;
	totalRepos: number;
	configFiles: Array<{ repo: string; path: string; commands: string[] }>;
	messages: Array<{
		type: "info" | "success" | "error" | "warn" | "dim";
		message: string;
	}>;
	errorRepos: Array<{ name: string; error: string }>;
	skippedRepos: Array<{ name: string; reason: string }>;
}

/**
 * Generate or update project configuration files for repositories.
 * Creates baseline.project.json files in each repo with test/lint/start commands.
 * This is a pure function that returns results - no logging or process.exit.
 */
export async function configRepositories(
	options: ConfigOptions = {}
): Promise<ConfigResult> {
	const messages: Array<{
		type: "info" | "success" | "error" | "warn" | "dim";
		message: string;
	}> = [];
	const errorRepos: Array<{ name: string; error: string }> = [];
	const skippedRepos: Array<{ name: string; reason: string }> = [];
	const configFiles: Array<{
		repo: string;
		path: string;
		commands: string[];
	}> = [];

	let workspaceRoot = options.workspaceRoot;
	const configManager =
		workspaceRoot ?
			new ConfigManager(workspaceRoot)
		:	new ConfigManager();

	if (!workspaceRoot) {
		workspaceRoot = configManager.getWorkspaceRoot();
	}

	const config = await configManager.load();

	if (!config) {
		return {
			success: false,
			generated: 0,
			updated: 0,
			skipped: 0,
			totalRepos: 0,
			configFiles: [],
			messages: [
				{
					type: "error",
					message:
						"No baseline workspace found. Run `baseline init` first.",
				},
			],
			errorRepos: [],
			skippedRepos: [],
		};
	}

	// Normalize repos (convert strings to objects)
	const { normalizeAllRepos } = await import(
		"../../utils/config-helpers"
	);
	const allReposNormalized = normalizeAllRepos(
		config.packages || config.repos,
		workspaceRoot
	);

	const reposToProcess =
		options.repo ?
			allReposNormalized.filter((r) => r.name === options.repo)
		:	allReposNormalized;

	if (reposToProcess.length === 0) {
		return {
			success: false,
			generated: 0,
			updated: 0,
			skipped: 0,
			totalRepos: 0,
			configFiles: [],
			messages: [
				{
					type: "error",
					message:
						options.repo ?
							`Repository "${options.repo}" not found.`
						:	"No repositories configured.",
				},
			],
			errorRepos: [],
			skippedRepos: [],
		};
	}

	// Note: config command only generates editor workspace files, not baseline.project.json
	// Use 'baseline project-init' to generate baseline.project.json files

	let generated = 0;
	let updated = 0;
	let skipped = 0;

	// Generate editor workspace files if editor is configured
	if (config.editor) {
		messages.push({
			type: "info",
			message: "Generating Editor Workspace Files",
		});
		const pluginManager = PluginManager.getInstance();
		await pluginManager.initialize();
		const editorPlugins = pluginManager.getPluginsByType("editor");
		const editorIds =
			typeof config.editor === "string" ?
				[config.editor]
			:	config.editor;

		for (const editorPlugin of editorPlugins) {
			const ep = editorPlugin as EditorPlugin;
			const shouldGenerate = editorIds.includes(ep.metadata.id);

			if (shouldGenerate && ep.generateWorkspaceFile) {
				try {
					const workspaceFile = await ep.generateWorkspaceFile(
						config,
						workspaceRoot
					);
					if (workspaceFile) {
						// Create directory if needed (e.g., .idea for IntelliJ)
						const targetPath = join(
							workspaceRoot,
							workspaceFile.file
						);
						await mkdir(dirname(targetPath), {
							recursive: true,
						});

						await writeFile(targetPath, workspaceFile.content);
						messages.push({
							type: "success",
							message: `Generated ${workspaceFile.file}`,
						});
					}
				} catch (error) {
					const errorMsg =
						error instanceof Error ?
							error.message
						:	String(error);
					messages.push({
						type: "error",
						message: `Failed to generate ${ep.metadata.name} workspace: ${errorMsg}`,
					});
				}
			}
		}
	}

	messages.push({ type: "info", message: "Configuration Summary" });
	messages.push({ type: "info", message: `Generated: ${generated}` });
	messages.push({ type: "info", message: `Updated: ${updated}` });
	if (skipped > 0) {
		messages.push({ type: "info", message: `Skipped: ${skipped}` });
	}

	return {
		success: errorRepos.length === 0,
		generated,
		updated,
		skipped,
		totalRepos: reposToProcess.length,
		configFiles,
		messages,
		errorRepos,
		skippedRepos,
	};
}
