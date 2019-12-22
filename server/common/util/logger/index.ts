import { createLogger, transports, format } from 'winston'
import * as DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, label, printf, json, errors, colorize } = format

const defaultFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}-${label} [${level}]: ${message}`
})
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
const logger = createLogger({
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
      // 文件数/天数(d)：保留时长，默认不删除
      maxFiles: '14d'
    }),
    new DailyRotateFile({
      // error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
      level: 'error',
      filename: 'error-%DATE%.log',
      dirname: process.cwd() + '/logs/',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
})
export { logger }
