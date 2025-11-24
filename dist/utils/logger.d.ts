/**
 * Frontend logging utility
 * Provides structured logging with different levels
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface LogEntry {
    level: LogLevel;
    message: string;
    timestamp: string;
    context?: Record<string, unknown>;
}
declare class Logger {
    private level;
    private isDevelopment;
    constructor(level?: LogLevel, isDevelopment?: boolean);
    private shouldLog;
    private formatMessage;
    debug(message: string, context?: Record<string, unknown>): void;
    info(message: string, context?: Record<string, unknown>): void;
    warn(message: string, context?: Record<string, unknown>): void;
    error(message: string, context?: Record<string, unknown>): void;
    setLevel(level: LogLevel): void;
}
declare const logger: Logger;
export default logger;
//# sourceMappingURL=logger.d.ts.map