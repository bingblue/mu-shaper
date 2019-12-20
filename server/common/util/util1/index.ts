import { is } from './base'
export namespace Util1 {
  export function isNumber (variable: any): boolean {
    return is(variable, 'number')
  }
  export function isString (variable: any): boolean {
    return is(variable, 'string')
  }
  export function isBoolean (variable: any): boolean {
    return is(variable, 'boolean')
  }
  export function isObject (variable: any): boolean {
    return is(variable, 'object')
  }
  export function isArray (variable: any): boolean {
    if (Array.isArray) return Array.isArray(variable)
    return is(variable, 'array')
  }
  export function isFunction (variable: any): boolean {
    return is(variable, 'function')
  }
  export function isSymbol (variable: any): boolean {
    return is(variable, 'symbol')
  }
  export function isRegExp (variable: any): boolean {
    return is(variable, 'regexp')
  }
  export function isDate (variable: any): boolean {
    return is(variable, 'date')
  }
  export function isError (variable: any): boolean {
    return is(variable, 'error')
  }
  export function isUndefined (variable: any): boolean {
    return is(variable, 'undefined')
  }
  export function isNull (variable: any): boolean {
    return is(variable, 'null')
  }
}
