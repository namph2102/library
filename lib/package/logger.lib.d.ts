type typeLogger = "log" | "warn" | "info" | "error";
/**
 * Make logger with debugging javascript
 * @param type   kind of logging ( "log" | "warn" | "info" | "error")
 * @returns methods you cant use.
 */
export default function createLogger(type: typeLogger): {
    showAll(): any;
    clear(): any;
    add(message: string): any;
};
export {};
