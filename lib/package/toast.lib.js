"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_toastify_1 = require("react-toastify");
/**
 * Show message following obtions
 * @param message message is content show notify
 * @returns promise boolean
 */
function ToastMessage(message) {
    return {
        normal(suboptions) {
            return (0, react_toastify_1.toast)(message, { ...suboptions });
        },
        success(suboptions) {
            return react_toastify_1.toast.success(message, { ...suboptions });
        },
        error(suboptions) {
            return react_toastify_1.toast.error(message, { ...suboptions });
        },
    };
}
exports.default = ToastMessage;
