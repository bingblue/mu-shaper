import { logger } from '../util'
function log (type: string) {
  return (target: any, name: string, descriptor: PropertyDescriptor): any => {
    const method = descriptor.value
    descriptor.value = async (...args: any[]): Promise<any> => {
      const meta = {
        method: name,
        args: args,
        class: target.name ? target.name : target.constructor.name
      }
      logger.debug(`[${type}] 正在执行...`)
      let result: any
      try {
        result = await method.apply(target, args)
        logger.info(`[${type}] 成功 : ${result}`, {
          module: 'decorator',
          ...meta
        })
      } catch (err) {
        logger.error(`[${type}] 失败:  => ${err.message}`, {
          module: 'decorator',
          name: err.name,
          status: err.status,
          stack: err.stack,
          ...meta
        })
      }
      return result
    }
  }
}
export { log }
