export interface RateLimitInfo {
    next: {
        absolute: number;
        relative: number;
    },
    delay: {
        millis: number;
        seconds: number;
    },
    limit: {
        limit: number;
        remaining: number;
    }
}