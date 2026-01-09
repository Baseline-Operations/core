export interface GraphOptions {
    format?: "text" | "dot" | "json";
    output?: string;
    workspaceRoot?: string;
}
export interface GraphResult {
    success: boolean;
    graph: Record<string, {
        name: string;
        dependencies: string[];
        dependents: string[];
    }>;
    output: string;
    outputFile?: string;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
}
/**
 * Generate a dependency graph visualization for repositories.
 * Detects dependencies from package.json (Node.js), Cargo.toml (Rust), etc.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function generateGraph(options?: GraphOptions): Promise<GraphResult>;
//# sourceMappingURL=graph.d.ts.map