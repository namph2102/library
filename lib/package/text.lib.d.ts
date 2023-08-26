import * as clsx from "clsx";
export declare function removeVietnameseTones(str: string): string;
export declare function capitalizeText(str: string): string;
export declare function coverSlug(str: string): string;
export declare function timeFormatComment(timeStart?: string, timeEnd?: string): any;
export declare const CheckTypeImage: (filePath: string) => boolean;
export declare class TextHandler {
    static copyText(textToCopy: string): Promise<unknown>;
}
/**
 * Validator provide a most of validation about form and regex basic

 * @returns Class
 */
export declare class Validator {
    static emailRegex: RegExp;
    static phoneRegex: RegExp;
    static imageRegex: RegExp;
    static filePath: Record<string, string>;
    /**
     * Takes text and check text is  email
     * @param text  text is string
     * @returns boolean
     */
    static isEmail(email: string): boolean;
    /**
     * Takes text and check phone is VietNamese' Phone Number
     * @param text  text is string
     * @returns boolean
     */
    static isPhone(text: string): boolean;
    /**
     * Takes text and minLength
     * @param text  text is string will checked follow min length
     * @param minlength maxlength is number
     * @returns boolean
     */
    static isMinlength(text: string, minlength: number): boolean;
    /**
     * Takes text and max length
     * @param text  text is string will checked follow max length
     * @param maxlength maxlength is number
     * @returns boolean
     */
    static isMaxLength(text: string, maxlength: number): boolean;
    /**
     * Takes url and checks image is exist
     * @param url  Url is Attribute's img src
     * @returns promise boolean
     */
    static isImageExtend(url: string): Promise<unknown>;
}
/**
 * cn helps to shorthand the class of taliwincss
 * @param classnames classnames is string or array string
 * @returns cn will cover class tailwincss EX: (px-2 px-2) => p-2
 */
export declare function cn(...classnames: clsx.ClassValue[]): string;
/**
 * Debounced is prevent callback execution when delay milliseconds
 * @param callback callback is function called
 * @param delay  delay is milliseconds
 * @returns Debounced will execute when delay time end
 */
export declare function Debounced(callback: any, delay?: number): (...args: any) => void;
