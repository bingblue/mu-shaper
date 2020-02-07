import { createLogger, transports, format } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, label, printf, json, errors, colorize } = format

/** 控制台输出格式 */
const defaultFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${label} [${level}]: ${message}`
})

/** JSON保存格式 */
const jsonFormat = printf(info => {
  const log = {
    timestamp: info.timestamp,
    label: info.label,
    pid: process.pid,
    level: info.level,
    message: info.message,
    ...info
  }
  return JSON.stringify(log)
})

/**
 * winston初始化
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
let logger: any = createLogger({
  format: combine(
    label({
      label: 'mu-shaper'
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    errors({ stack: true }),
    json(),
    jsonFormat
  ),
  transports: [
    new transports.Console({
      level: 'silly',
      format: combine(
        colorize({
          all: true
        }),
        timestamp({
          format: 'HH:mm:ss'
        }),
        defaultFormat
      )
    }),
    new DailyRotateFile({
      level: 'http',
      filename: 'access-%DATE%.log',
      dirname: process.cwd() + '/logs/',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      /** 文件数/天数(d)：保留时长，默认不删除 */
      maxFiles: '14d'
    }),
    new DailyRotateFile({
      /** error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6 */
      level: 'error',
      filename: 'error-%DATE%.log',
      dirname: process.cwd() + '/logs/',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
})

/**
 * 自定义onerror方法
 * @param err 错误对象
 * @param module 日志模块
 * @param message 日志信息
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
logger.onerror = (err, module: string = 'global', message: string = err.message) : void => {
  logger.error(message, {
    module: module,
    name: err.name,
    status: err.status,
    stack: err.stack
  })
}

/**
 * 捕获启动错误
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
process.on('uncaughtException', (err: Error) : void => {
  logger.error(`系统错误：${err.message}`, {
    module: 'system',
    name: err.name,
    status: 599,
    stack: err.stack
  })
})
export { logger }
