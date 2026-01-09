import githubPlugin from "./github.js";
import gitlabPlugin from "./gitlab.js";
import bitbucketPlugin from "./bitbucket.js";
/**
 * All built-in provider plugins.
 */
export const builtInProviderPlugins = [
    githubPlugin,
    gitlabPlugin,
    bitbucketPlugin,
];
/**
 * Register all built-in provider plugins with the plugin manager.
 */
export function registerBuiltInProviderPlugins(pluginManager) {
    for (const plugin of builtInProviderPlugins) {
        pluginManager.registerPlugin(plugin);
    }
}
//# sourceMappingURL=index.js.map