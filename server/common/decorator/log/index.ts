function log (type: string) {
  return (target: any, name: string, descriptor: any) => {
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
