/**
 *  HandleSort is sort A - Z (ASC) array or array object
 * @param key  key is typeof value in array if List is Array object you need provide key
 * @returns list to sort A - Z
 */
export default function handleSort<T>(list: T[], key?: keyof T): T[];
