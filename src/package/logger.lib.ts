enum LoggerEnum {
  log,
  warn,
  info,
  error,
}
type typeLogger = "log" | "warn" | "info" | "error";
/**
 * Make logger with debugging javascript
 * @param type   kind of logging ( "log" | "warn" | "info" | "error")
 * @returns methods you cant use.
 */
export default function createLogger(type: typeLogger) {
  const store: string[] = [];
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
    add(message: string) {
      store.push(message);
      console.group(`Type Log ${type}`);
      console[type](message);
      console.groupEnd();
      return this;
    },
  };
}
