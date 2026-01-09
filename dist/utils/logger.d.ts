/**
 * Logger utility for consistent, colorized output throughout the application.
 * Provides methods for different log levels with appropriate color coding.
 */
export declare class Logger {
    private static readonly PREFIXES;
    /**
     * Log an informational message (blue)
     * @param message - Message to log
     */
    static info(message: string): void;
    /**
     * Log a success message (green)
     * @param message - Message to log
     */
    static success(message: string): void;
    /**
     * Log a warning message (yellow)
     * @param message - Message to log
     */
    static warn(message: string): void;
    /**
     * Log an error message (red)
     * @param message - Message to log
     */
    static error(message: string): void;
    /**
     * Log a debug message (gray)
     * @param message - Message to log
     */
    static debug(message: string): void;
    /**
     * Log a plain message without formatting
     * @param message - Message to log
     */
    static log(message: string): void;
    /**
     * Log a title (bold cyan, with newlines)
     * @param message - Title message
     */
    static title(message: string): void;
    /**
     * Log a section header (bold underline)
     * @param message - Section message
     */
    static section(message: string): void;
    /**
     * Log a dimmed message
     * @param message - Message to log
     */
    static dim(message: string): void;
    /**
     * Log a highlighted message (bold yellow)
     * @param message - Message to log
     */
    static highlight(message: string): void;
    /**
     * Render a table with headers and rows
     * @param headers - Array of header strings
     * @param rows - Array of row arrays (string or number)
     */
    static table(headers: string[], rows: (string | number)[][]): void;
}
//# sourceMappingURL=logger.d.ts.map