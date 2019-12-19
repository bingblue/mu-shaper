export function is (variable: any, type: string): boolean {
  return typeOf(variable) === type
}
export function typeOf (variable: any): string {
  const tag: string = Object.prototype.toString.call(variable)
  const match: string = tag.match(/(?<=\s)[\W\w]*(?=])/)[0]
  return match.toLowerCase()
}
