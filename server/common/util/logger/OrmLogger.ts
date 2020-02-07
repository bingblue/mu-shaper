import { Logger, QueryRunner } from 'typeorm'
import { logger } from '..'

/**
 * 重写Typeorm日志
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
export class OrmLogger implements Logger {
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    const requestUrl = queryRunner?.data?.request ? `(${queryRunner.data.request.url}) ` : ''
    logger.info(`${requestUrl} 查询语句: ${query}`, {
      module: 'db'
    })
  }
  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    logger.error(`数据库错误: ${error}`, {
      module: 'db'
    })
  }
  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    logger.error(`数据库日志查询时间: ${time},查询语句: ${query}`, {
      module: 'db'
    })
  }
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    logger.warn(`数据库信息: ${message}`, {
      module: 'db'
    })
  }
  logMigration(message: string, queryRunner?: QueryRunner) {
    logger.warn(`数据库信息: ${message}`, {
      module: 'db'
    })
  }
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    logger.log(level, `数据库信息: ${message}`, {
      module: 'db'
    })
  }
}