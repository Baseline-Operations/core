import vscodePlugin from "./vscode.js";
import cursorPlugin from "./cursor.js";
import intellijPlugin from "./intellij.js";
import sublimePlugin from "./sublime.js";
/**
 * All built-in editor plugins.
 */
export const builtInEditorPlugins = [
    vscodePlugin,
    cursorPlugin,
    intellijPlugin,
    sublimePlugin,
];
/**
 * Register all built-in editor plugins with the plugin manager.
 */
export function registerBuiltInEditorPlugins(pluginManager) {
    for (const plugin of builtInEditorPlugins) {
        pluginManager.registerPlugin(plugin);
    }
}
//# sourceMappingURL=index.js.map