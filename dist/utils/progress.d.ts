export interface ProgressOptions {
    total: number;
    label?: string;
    showPercentage?: boolean;
}
/**
 * Utility class for displaying progress information for long operations.
 */
export declare class ProgressUtil {
    /**
     * Logs progress for an operation.
     * @param current Current progress (0-based)
     * @param total Total items
     * @param label Optional label for the operation
     * @param showPercentage Whether to show percentage
     */
    static log(current: number, total: number, label?: string, showPercentage?: boolean): void;
    /**
     * Creates a progress callback for use in loops.
     * @param total Total items
     * @param label Optional label
     * @returns A function that logs progress when called with current index
     */
    static createCallback(total: number, label?: string): (current: number) => void;
    /**
     * Logs a simple spinner-style progress indicator.
     * @param current Current progress (0-based)
     * @param total Total items
     * @param label Optional label
     */
    static spinner(current: number, total: number, label?: string): void;
    /**
     * Creates a simple progress bar visualization.
     * @param current Current progress (0-based)
     * @param total Total items
     * @param width Bar width in characters (default: 20)
     * @returns Progress bar string
     */
    static bar(current: number, total: number, width?: number): string;
    /**
     * Logs a progress bar with label.
     * @param current Current progress (0-based)
     * @param total Total items
     * @param label Optional label
     * @param width Bar width (default: 20)
     */
    static logBar(current: number, total: number, label?: string, width?: number): void;
}
//# sourceMappingURL=progress.d.ts.map