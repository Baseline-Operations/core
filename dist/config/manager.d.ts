import { BaselineConfig, Package } from "../types/config.js";
/** Name of the baseline configuration file */
export declare const BASELINE_CONFIG_FILE = "baseline.json";
/** Name of the baseline directory (currently unused, reserved for future use) */
export declare const BASELINE_DIR = ".baseline";
/**
 * Manages loading, saving, and validating baseline workspace configuration.
 * Configuration is stored in a `baseline.json` file at the workspace root.
 */
export declare class ConfigManager {
    private workspaceRoot;
    private configPath;
    /**
     * Create a new ConfigManager instance.
     *
     * @param workspaceRoot - Path to the workspace root directory (defaults to current working directory)
     */
    constructor(workspaceRoot?: string);
    /**
     * Load and validate the baseline configuration file.
     *
     * @returns Parsed and validated configuration, or null if file doesn't exist
     * @throws Error if file exists but cannot be parsed or validated
     *
     * @example
     * ```ts
     * const manager = new ConfigManager();
     * const config = await manager.load();
     * if (config) {
     *   console.log(`Workspace: ${config.name}`);
     * }
     * ```
     */
    load(): Promise<BaselineConfig | null>;
    /**
     * Get packages from config with backward compatibility for repos.
     */
    getPackages(config: BaselineConfig): Package[];
    /**
     * Save the baseline configuration to disk.
     *
     * @param config - Configuration object to save
     * @throws Error if file cannot be written
     *
     * @example
     * ```ts
     * const config: BaselineConfig = { ... };
     * await manager.save(config);
     * ```
     */
    save(config: BaselineConfig): Promise<void>;
    /**
     * Check if the baseline configuration file exists.
     *
     * @returns True if config file exists, false otherwise
     */
    exists(): boolean;
    /**
     * Get the workspace root directory path.
     *
     * @returns Absolute path to the workspace root
     */
    getWorkspaceRoot(): string;
    /**
     * Get the absolute path to the configuration file.
     *
     * @returns Absolute path to baseline.json
     */
    getConfigPath(): string;
    /**
     * Find the workspace root directory by traversing up from the given path.
     * Looks for a `baseline.json` file in the current directory and parent directories.
     *
     * @param startPath - Path to start searching from (defaults to current working directory)
     * @returns Absolute path to workspace root, or null if not found
     *
     * @example
     * ```ts
     * const root = ConfigManager.findWorkspaceRoot("/some/deep/path");
     * if (root) {
     *   console.log(`Found workspace at: ${root}`);
     * }
     * ```
     */
    static findWorkspaceRoot(startPath?: string): string | null;
}
//# sourceMappingURL=manager.d.ts.map