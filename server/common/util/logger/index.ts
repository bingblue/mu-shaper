import { createLogger, transports, format } from 'winston'
import * as DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, label, printf } = format
const defaultFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] [${label}] ${level}: ${message}`
})
const logger = createLogger({
  format: combine(
    label({
      label: 'mu-shaper'
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    // format.splat(),
    format.json(),
    // defaultFormat
  ),
  transports: [
    new transports.Console({
      format: combine(
        format.colorize(),
        defaultFormat
      )
    }),
    new transports.Http({
      level: 'warn',
      format: format.json()
    }),
    new DailyRotateFile({
      filename: 'log-%DATE%.log',
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
      dirname: process.cwd() + '/logs/error/',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
})
export { logger }
