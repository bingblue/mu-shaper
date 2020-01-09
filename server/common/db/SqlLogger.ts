import { Logger, QueryRunner } from 'typeorm'
import { logger } from '../util'

export default class SqlLogger implements Logger {
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const requestUrl = queryRunner?.data?.request ? `(${queryRunner.data.request.url}) ` : ''
    logger.info(`${requestUrl} 查询语句: ${query}`, {
      // parameters: parameters,
      // queryRunner: queryRunner
    })
  }
  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    throw new Error('Method not implemented.')
  }
  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    logger.error(`数据库日志查询时间: ${time},查询语句: ${query}`, {
      // parameters: parameters,
      // queryRunner: queryRunner
    })
  }
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    logger.warn(`数据库信息: ${message}`, {
      // queryRunner: queryRunner
    })
  }
  logMigration(message: string, queryRunner?: QueryRunner) {
    logger.warn(`数据库信息: ${message}`, {
      // queryRunner: queryRunner
    })
  }
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    logger.log(level, `数据库信息: ${message}`, {
      // queryRunner: queryRunner
    })
  }
}