"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineSkinError = void 0;
class MineSkinError extends Error {
    constructor(code, msg, meta) {
        super(msg ? `[${code}] ${msg}` : code);
        this.code = code;
        this.msg = msg;
        this.meta = meta;
        Object.setPrototypeOf(this, MineSkinError.prototype);
    }
    get name() {
        return 'MineSkinError';
    }
}
exports.MineSkinError = MineSkinError;
//# sourceMappingURL=MineSkinError.js.map