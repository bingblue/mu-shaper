import { logger } from '../util'
function log (type: string) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('target', target)
    console.log('target=>', JSON.stringify(target))
    const method = descriptor.value
    descriptor.value = (...args: any[]) => {
      const meta = {
        method: name,
        args: args,
        class: target.name ? target.name : target.constructor.name
      }
      logger.debug(`[${type}] 正在执行...`)
      let result: any
      try {
        result = method.apply(target, args)
        logger.info(`[${type}] 成功 : ${result}`, meta)
      } catch (error) {
        logger.error(`[${type}] 失败:  => ${error}`, meta)
      }
      return result
    }
  }
}
export { log }
