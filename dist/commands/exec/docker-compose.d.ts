export interface DockerComposeOptions {
    file?: string;
    services?: string[];
    detach?: boolean;
    build?: boolean;
    workspaceRoot?: string;
}
export interface DockerComposeResult {
    success: boolean;
    subcommand: string;
    processed: number;
    failed: number;
    totalFiles: number;
    messages: Array<{
        type: "info" | "success" | "error" | "warn";
        message: string;
    }>;
    failedRepos: Array<{
        name: string;
        error: string;
    }>;
}
/**
 * Manage docker-compose services across repositories.
 * This is a pure function that returns results - no logging or process.exit.
 */
export declare function dockerCompose(subcommand: "up" | "down" | "start" | "stop" | "ps" | "logs", options?: DockerComposeOptions): Promise<DockerComposeResult>;
//# sourceMappingURL=docker-compose.d.ts.map