export namespace Util2 {
  function is (variable: any, type: string): boolean {
    return typeOf(variable) === type
  }
  function typeOf (variable: any): string {
    const tag: string = Object.prototype.toString.call(variable)
    const match: string = tag.match(/(?<=\s)[\W\w]*(?=])/)[0]
    return match.toLowerCase()
  }
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
