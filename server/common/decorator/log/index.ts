function log (type: string) {
  return (target: any, name: string, descriptor: any) => {
    console.log(target)
    console.log(name)
    console.log(JSON.stringify(descriptor))
    // configurable: true/false, 可配置与否
    // enumerable: true/false, 可枚举与否
    // writable: true/false, 可写与否
    // initializer: 静态属性的value值
    // value: 非静态属性的value值
    const method = descriptor.value
    descriptor.value = (...args) => {
      console.info(`(${type}) 正在执行: ${name}(${args}) = ?`)
      let ret
      try {
        ret = method.apply(target, args)
        console.info(`(${type}) 成功 : ${name}(${args}) => ${ret}`)
      } catch (error) {
        console.error(`(${type}) 失败: ${name}(${args}) => ${error}`)
      }
      return ret
    }
  }
}
export { log }
