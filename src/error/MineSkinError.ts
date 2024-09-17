// https://stackoverflow.com/a/60323233/6257838
import { ErrorSource } from "./ErrorSource";

export class MineSkinError extends Error {
    constructor(public code: string, public msg?: string, public meta?: {
        httpCode?: number;
        source?: ErrorSource;
    }) {
        super(msg ? `[${ code }] ${ msg }` : code);
        Object.setPrototypeOf(this, MineSkinError.prototype);
    }

    get name(): string {
        return 'MineSkinError';
    }
}
