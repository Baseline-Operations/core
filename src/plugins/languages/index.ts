import nodePlugin from "./node";
import pythonPlugin from "./python";
import goPlugin from "./go";
import rustPlugin from "./rust";
import javaPlugin from "./java";
import { LanguagePlugin } from "../types";

/**
 * All built-in language plugins.
 */
export const builtInLanguagePlugins: LanguagePlugin[] = [
	nodePlugin,
	pythonPlugin,
	goPlugin,
	rustPlugin,
	javaPlugin,
];

/**
 * Register all built-in language plugins with the plugin manager.
 */
export function registerBuiltInLanguagePlugins(
	pluginManager: import("../manager.js").PluginManager
): void {
	for (const plugin of builtInLanguagePlugins) {
		pluginManager.registerPlugin(plugin);
	}
}

