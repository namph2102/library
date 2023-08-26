"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerEnum;
(function (LoggerEnum) {
    LoggerEnum[LoggerEnum["log"] = 0] = "log";
    LoggerEnum[LoggerEnum["warn"] = 1] = "warn";
    LoggerEnum[LoggerEnum["info"] = 2] = "info";
    LoggerEnum[LoggerEnum["error"] = 3] = "error";
})(LoggerEnum || (LoggerEnum = {}));
/**
 * Make logger with debugging javascript
 * @param type   kind of logging ( "log" | "warn" | "info" | "error")
 * @returns methods you cant use.
 */
function createLogger(type) {
    const store = [];
    return {
        showAll() {
            console.group(`Show All Type Log ${type}`);
            store.forEach((log) => console.log(log));
            console.groupEnd();
            return this;
        },
        clear() {
            console.clear();
            return this;
        },
        add(message) {
            store.push(message);
            console.group(`Type Log ${type}`);
            console[type](message);
            console.groupEnd();
            return this;
        },
    };
}
exports.default = createLogger;
