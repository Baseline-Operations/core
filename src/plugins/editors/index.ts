import vscodePlugin from "./vscode";
import cursorPlugin from "./cursor";
import intellijPlugin from "./intellij";
import sublimePlugin from "./sublime";
import { EditorPlugin } from "../types";

/**
 * All built-in editor plugins.
 */
export const builtInEditorPlugins: EditorPlugin[] = [
	vscodePlugin,
	cursorPlugin,
	intellijPlugin,
	sublimePlugin,
];

/**
 * Register all built-in editor plugins with the plugin manager.
 */
export function registerBuiltInEditorPlugins(
	pluginManager: import("../manager.js").PluginManager
): void {
	for (const plugin of builtInEditorPlugins) {
		pluginManager.registerPlugin(plugin);
	}
}

