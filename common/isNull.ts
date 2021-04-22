import { error } from 'node:console';
import assert from './assert';

/**
 * 是否为null或undefined
 * @param val 
 * @returns boolean
 */
export function isNil(val: any): boolean {
  return val === undefined || val === null;
}

/**
 * 是否为空
 * @param val 
 * @returns 
 */
export function isEmpty(val: unknown): boolean {
  if (assert.isArray(val)) {
    return val.length === 0;
  } else if (assert.isString(val)) {
    return val.trim().length === 0;
  } else if (assert.isObject(val)) {
    return Object.keys(val).length === 0;
  }
  throw new TypeError();
}