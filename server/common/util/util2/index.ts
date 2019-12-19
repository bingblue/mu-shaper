import { is } from './base'
export const Util1 = {
  isNumber (variable: any): boolean {
    return is(variable, 'number')
  },
  isString (variable: any): boolean {
    return is(variable, 'string')
  },
  isBoolean (variable: any): boolean {
    return is(variable, 'boolean')
  },
  isObject (variable: any): boolean {
    return is(variable, 'object')
  },
  isArray (variable: any): boolean {
    if (Array.isArray) return Array.isArray(variable)
    return is(variable, 'array')
  },
  isFunction (variable: any): boolean {
    return is(variable, 'function')
  },
  isSymbol (variable: any): boolean {
    return is(variable, 'symbol')
  },
  isRegExp (variable: any): boolean {
    return is(variable, 'regexp')
  },
  isDate (variable: any): boolean {
    return is(variable, 'date')
  },
  isError (variable: any): boolean {
    return is(variable, 'error')
  },
  isUndefined (variable: any): boolean {
    return is(variable, 'undefined')
  },
  isNull (variable: any): boolean {
    return is(variable, 'null')
  }
}
