import npmPlugin from "./npm";
import pnpmPlugin from "./pnpm";
import yarnPlugin from "./yarn";
import pipPlugin from "./pip";
import cargoPlugin from "./cargo";
import mavenPlugin from "./maven";
import gradlePlugin from "./gradle";
import { PackageManagerPlugin } from "../types";

/**
 * All built-in package manager plugins.
 */
export const builtInPackageManagerPlugins: PackageManagerPlugin[] = [
	npmPlugin,
	pnpmPlugin,
	yarnPlugin,
	pipPlugin,
	cargoPlugin,
	mavenPlugin,
	gradlePlugin,
];

/**
 * Register all built-in package manager plugins with the plugin manager.
 */
export function registerBuiltInPackageManagerPlugins(
	pluginManager: import("../manager.js").PluginManager
): void {
	for (const plugin of builtInPackageManagerPlugins) {
		pluginManager.registerPlugin(plugin);
	}
}

