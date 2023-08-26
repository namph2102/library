"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quickSortArray(list = [], left, right) {
    if (list.length <= 1)
        return list;
    let pilot = list[Math.floor((right + left) / 2)];
    let l = left, r = right;
    do {
        while (list[l] < pilot)
            l++;
        while (list[r] > pilot)
            r--;
        if (l <= r) {
            const tam = list[l];
            list[l] = list[r];
            list[r] = tam;
            l++;
            r--;
        }
    } while (l <= r);
    if (left < r) {
        quickSortArray(list, left, r);
    }
    if (l < right) {
        quickSortArray(list, l, right);
    }
}
function quickSortObject(list = [], key, left, right) {
    if (list.length <= 1)
        return list;
    let pilot = list[Math.floor((right + left) / 2)][key];
    let l = left, r = right;
    do {
        while (list[l][key] < pilot)
            l++;
        while (list[r][key] > pilot)
            r--;
        if (l <= r) {
            const tam = list[l];
            list[l] = list[r];
            list[r] = tam;
            l++;
            r--;
        }
    } while (l <= r);
    if (left < r) {
        quickSortObject(list, key, left, r);
    }
    if (l < right) {
        quickSortObject(list, key, l, right);
    }
}
/**
 *  HandleSort is sort A - Z (ASC) array or array object
 * @param key  key is typeof value in array if List is Array object you need provide key
 * @returns list to sort A - Z
 */
function handleSort(list, key) {
    if (list?.length <= 1)
        return [];
    if (typeof list[0] == "object") {
        if (key) {
            quickSortObject(list, key, 0, list.length - 1);
        }
        else {
            if (list[0]) {
                const findKey = Object.keys(list[0])[0];
                quickSortObject(list, findKey, 0, list.length - 1);
            }
        }
    }
    else {
        quickSortArray(list, 0, list.length - 1);
    }
    // quickSort(list, 0, list.length - 1);
    return list;
}
exports.default = handleSort;
