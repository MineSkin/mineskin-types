import { ErrorSource } from "./ErrorSource";
export declare class MineSkinError extends Error {
    code: string;
    msg?: string;
    meta?: {
        httpCode?: number;
        source?: ErrorSource;
        error?: Error;
    };
    constructor(code: string, msg?: string, meta?: {
        httpCode?: number;
        source?: ErrorSource;
        error?: Error;
    });
    get name(): string;
}
