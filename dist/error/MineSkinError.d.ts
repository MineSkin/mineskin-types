import { ErrorSource } from "./ErrorSource";
export declare class MineSkinError extends Error {
    code: string;
    msg?: string;
    meta?: {
        httpCode?: number;
        source?: ErrorSource;
    };
    constructor(code: string, msg?: string, meta?: {
        httpCode?: number;
        source?: ErrorSource;
    });
    get name(): string;
}
