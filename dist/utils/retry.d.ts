export interface RetryOptions {
    maxAttempts?: number;
    delayMs?: number;
    backoff?: boolean;
    onRetry?: (attempt: number, error: Error) => void;
}
/**
 * Utility class for retrying operations with exponential backoff.
 * Useful for network operations that may fail due to temporary issues.
 */
export declare class RetryUtil {
    /**
     * Executes an async operation with retry logic.
     * @param fn The async function to execute
     * @param options Retry configuration options
     * @returns The result of the operation
     * @throws The last error if all retries fail
     */
    static retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>;
    /**
     * Checks if an error is retryable (network-related errors).
     * @param error The error to check
     * @returns True if the error is retryable
     */
    static isRetryableError(error: unknown): boolean;
    /**
     * Executes an async operation with retry logic, but only retries on retryable errors.
     * @param fn The async function to execute
     * @param options Retry configuration options
     * @returns The result of the operation
     * @throws The last error if all retries fail or error is not retryable
     */
    static retryOnRetryable<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>;
}
//# sourceMappingURL=retry.d.ts.map