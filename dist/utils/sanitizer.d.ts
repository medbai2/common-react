/**
 * Input sanitization utilities for XSS prevention
 */
/**
 * Sanitizes a string by removing potentially dangerous characters
 */
export declare function sanitizeString(input: string): string;
/**
 * Sanitizes a name input (more restrictive)
 */
export declare function sanitizeName(input: string): string;
/**
 * Sanitizes a title input
 */
export declare function sanitizeTitle(input: string): string;
/**
 * Sanitizes HTML content by escaping HTML entities
 */
export declare function sanitizeHTML(input: string): string;
//# sourceMappingURL=sanitizer.d.ts.map