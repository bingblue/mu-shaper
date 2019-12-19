import * as base from './base'
export const url = {
  isNumber (variable: any): boolean {
    return base.is(variable, 'number')
  },
  isString (variable: any): boolean {
    return base.is(variable, 'string')
  },
  isBoolean (variable: any): boolean {
    return base.is(variable, 'boolean')
  },
  isObject (variable: any): boolean {
    return base.is(variable, 'object')
  },
  isArray (variable: any): boolean {
    if (Array.isArray) return Array.isArray(variable)
    return base.is(variable, 'array')
  },
  isFunction (variable: any): boolean {
    return base.is(variable, 'function')
  },
  isSymbol (variable: any): boolean {
    return base.is(variable, 'symbol')
  },
  isRegExp (variable: any): boolean {
    return base.is(variable, 'regexp')
  },
  isDate (variable: any): boolean {
    return base.is(variable, 'date')
  },
  isError (variable: any): boolean {
    return base.is(variable, 'error')
  },
  isUndefined (variable: any): boolean {
    return base.is(variable, 'undefined')
  },
  isNull (variable: any): boolean {
    return base.is(variable, 'null')
  }
}
