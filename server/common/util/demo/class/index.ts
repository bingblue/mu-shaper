import { is } from './base'
export class ClassUtil {
  static isNumber (variable: any): boolean {
    return is(variable, 'number')
  }

  static isString (variable: any): boolean {
    return is(variable, 'string')
  }

  static isBoolean (variable: any): boolean {
    return is(variable, 'boolean')
  }

  static isObject (variable: any): boolean {
    return is(variable, 'object')
  }

  static isArray (variable: any): boolean {
    if (Array.isArray) return Array.isArray(variable)
    return is(variable, 'array')
  }

  static isFunction (variable: any): boolean {
    return is(variable, 'function')
  }

  static isSymbol (variable: any): boolean {
    return is(variable, 'symbol')
  }

  static isRegExp (variable: any): boolean {
    return is(variable, 'regexp')
  }

  static isDate (variable: any): boolean {
    return is(variable, 'date')
  }

  static isError (variable: any): boolean {
    return is(variable, 'error')
  }

  static isUndefined (variable: any): boolean {
    return is(variable, 'undefined')
  }

  static isNull (variable: any): boolean {
    return is(variable, 'null')
  }
}
