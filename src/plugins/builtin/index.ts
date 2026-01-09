/**
 * Built-in plugins organized by type.
 * This file registers all built-in plugins from their respective directories.
 */
import { registerBuiltInLanguagePlugins } from "../languages/index";
import { registerBuiltInProviderPlugins } from "../providers/index";
import { registerBuiltInPackageManagerPlugins } from "../package-managers/index";
import { registerBuiltInEditorPlugins } from "../editors/index";

/**
 * Register all built-in plugins with the plugin manager.
 * Loads plugins from organized directories by type.
 */
export function registerBuiltInPlugins(
	pluginManager: import("../manager.js").PluginManager
): void {
	// Register plugins in order: languages, providers, package managers, editors
	registerBuiltInLanguagePlugins(pluginManager);
	registerBuiltInProviderPlugins(pluginManager);
	registerBuiltInPackageManagerPlugins(pluginManager);
	registerBuiltInEditorPlugins(pluginManager);
}
