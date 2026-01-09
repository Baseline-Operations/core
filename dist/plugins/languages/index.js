import nodePlugin from "./node.js";
import pythonPlugin from "./python.js";
import goPlugin from "./go.js";
import rustPlugin from "./rust.js";
import javaPlugin from "./java.js";
/**
 * All built-in language plugins.
 */
export const builtInLanguagePlugins = [
    nodePlugin,
    pythonPlugin,
    goPlugin,
    rustPlugin,
    javaPlugin,
];
/**
 * Register all built-in language plugins with the plugin manager.
 */
export function registerBuiltInLanguagePlugins(pluginManager) {
    for (const plugin of builtInLanguagePlugins) {
        pluginManager.registerPlugin(plugin);
    }
}
//# sourceMappingURL=index.js.map