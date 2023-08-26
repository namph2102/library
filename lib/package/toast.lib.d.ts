/**
 * Show message following obtions
 * @param message message is content show notify
 * @returns promise boolean
 */
export default function ToastMessage(message: string): {
    normal(suboptions?: object): import("react-toastify").Id;
    success(suboptions?: object): import("react-toastify").Id;
    error(suboptions?: object): import("react-toastify").Id;
};
