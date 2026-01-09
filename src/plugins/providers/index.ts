import githubPlugin from "./github";
import gitlabPlugin from "./gitlab";
import bitbucketPlugin from "./bitbucket";
import { ProviderPlugin } from "../types";

/**
 * All built-in provider plugins.
 */
export const builtInProviderPlugins: ProviderPlugin[] = [
	githubPlugin,
	gitlabPlugin,
	bitbucketPlugin,
];

/**
 * Register all built-in provider plugins with the plugin manager.
 */
export function registerBuiltInProviderPlugins(
	pluginManager: import("../manager.js").PluginManager
): void {
	for (const plugin of builtInProviderPlugins) {
		pluginManager.registerPlugin(plugin);
	}
}

