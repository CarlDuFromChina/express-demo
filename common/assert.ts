const isNumber = (val: unknown): val is number => typeof val === 'number'
const isString = (val: unknown): val is string => typeof val === 'string'
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
const isFunction = (val: unknown): val is Function => typeof val === 'function'
const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'
const isArray = (val: unknown): val is Array<any> => val != null && toString.call(val) === '[object Array]'

function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}


export default {
  isNumber,
  isString,
  isSymbol,
  isFunction,
  isObject,
  isArray,
  isPromise
}