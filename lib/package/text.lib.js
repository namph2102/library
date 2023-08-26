"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debounced = exports.cn = exports.Validator = exports.TextHandler = exports.CheckTypeImage = exports.timeFormatComment = exports.coverSlug = exports.capitalizeText = exports.removeVietnameseTones = void 0;
const moment = require("moment");
const tailwind_merge_1 = require("tailwind-merge");
const clsx = require("clsx");
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
}
exports.removeVietnameseTones = removeVietnameseTones;
function capitalizeText(str) {
    if (!str)
        return str;
    return (str.charAt(0).toUpperCase() + str.slice(1)).replace(/(^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
exports.capitalizeText = capitalizeText;
function coverSlug(str) {
    return removeVietnameseTones(str)
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()
        .trim();
}
exports.coverSlug = coverSlug;
const timeSetTing = {
    months: "tháng",
    month: "tháng",
    years: "năm",
    year: "năm",
    minute: "phút",
    minutes: "phút",
    day: "ngày",
    days: "ngày",
    hours: "giờ",
    hour: "giờ",
    second: "giây",
    seconds: "giây",
};
function timeFormatComment(timeStart = "2023-08-15T03:28:02.734+00:00", timeEnd) {
    // trả về thời gian
    let result = !timeEnd
        ? moment(timeStart).fromNow()
        : moment(timeStart).from(timeEnd);
    if (result.includes("a few seconds ago"))
        return "vài giây trước";
    if (result.includes("in a few seconds"))
        return "vài giây trước";
    if (result[1] === "n") {
        result = result.replace("an", "1");
    }
    else if (result[0] === "a") {
        result = result.replace("a", "1");
    }
    result = result.replace("ago", "trước");
    result = result.split(" ");
    if (timeSetTing[result[1]]) {
        result[1] = timeSetTing[result[1]];
    }
    return result.join(" ");
}
exports.timeFormatComment = timeFormatComment;
const CheckTypeImage = (filePath) => {
    if (!filePath)
        return false;
    // Regular expression to match image file extensions (png and svg)
    const imageRegex = /\.(png|svg|jpeg|gif|jpg)$/i;
    // Test if the file path matches the regex
    return imageRegex.test(filePath);
};
exports.CheckTypeImage = CheckTypeImage;
class TextHandler {
    static copyText(textToCopy) {
        return new Promise((resolve, reject) => {
            return navigator?.clipboard
                .writeText(textToCopy)
                .then(resolve)
                .catch(reject);
        });
    }
}
exports.TextHandler = TextHandler;
/**
 * Validator provide a most of validation about form and regex basic

 * @returns Class
 */
class Validator {
    static emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    static phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    static imageRegex = /\.(png|svg|jpeg|gif|jpg)$/i;
    static filePath = {
        pdf: "pdf",
        mp3: "media",
        xls: "xls",
        png: "png",
        jpg: "png",
        jpeg: "gif",
        svg: "png",
        webp: "png",
        txt: "txt",
        zip: "zip",
        "7z": "zip",
        rest: "document",
    };
    /**
     * Takes text and check text is  email
     * @param text  text is string
     * @returns boolean
     */
    static isEmail(email) {
        if (!email)
            return false;
        return this.emailRegex.test(email);
    }
    /**
     * Takes text and check phone is VietNamese' Phone Number
     * @param text  text is string
     * @returns boolean
     */
    static isPhone(text) {
        return text.match(this.phoneRegex) ? true : false;
    }
    /**
     * Takes text and minLength
     * @param text  text is string will checked follow min length
     * @param minlength maxlength is number
     * @returns boolean
     */
    static isMinlength(text, minlength) {
        return text.length >= minlength;
    }
    /**
     * Takes text and max length
     * @param text  text is string will checked follow max length
     * @param maxlength maxlength is number
     * @returns boolean
     */
    static isMaxLength(text, maxlength) {
        return text.length <= maxlength;
    }
    /**
     * Takes url and checks image is exist
     * @param url  Url is Attribute's img src
     * @returns promise boolean
     */
    static isImageExtend(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(true);
            img.onerror = () => reject(false);
        });
    }
}
exports.Validator = Validator;
/**
 * cn helps to shorthand the class of taliwincss
 * @param classnames classnames is string or array string
 * @returns cn will cover class tailwincss EX: (px-2 px-2) => p-2
 */
function cn(...classnames) {
    return (0, tailwind_merge_1.twMerge)(clsx.clsx(classnames));
}
exports.cn = cn;
/**
 * Debounced is prevent callback execution when delay milliseconds
 * @param callback callback is function called
 * @param delay  delay is milliseconds
 * @returns Debounced will execute when delay time end
 */
function Debounced(callback, delay = 200) {
    delay = delay || 0;
    let timeId = undefined;
    return (...args) => {
        if (timeId) {
            clearTimeout(timeId);
            timeId = undefined;
        }
        timeId = setTimeout(() => {
            callback(args);
            clearTimeout(timeId);
        }, delay);
    };
}
exports.Debounced = Debounced;
