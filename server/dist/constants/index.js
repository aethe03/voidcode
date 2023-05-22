"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__port__ = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV === "production";
exports.__port__ = exports.__prod__ ? process.env.PORT : 4000;
//# sourceMappingURL=index.js.map