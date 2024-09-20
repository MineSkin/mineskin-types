export interface RateLimitInfo {
    next: {
        absolute: number;
        relative: number;
    };
    delay: {
        millis: number;
    };
}
