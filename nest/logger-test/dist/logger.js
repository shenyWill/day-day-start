"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
class MyLogger {
    log(message, context) {
        console.log(`---log---[${context}]---`, message);
    }
    error(message, context) {
        console.log(`---error---[${context}]---`, message);
    }
    warn(message, context) {
        console.log(`---warn---[${context}]---`, message);
    }
}
exports.MyLogger = MyLogger;
//# sourceMappingURL=logger.js.map