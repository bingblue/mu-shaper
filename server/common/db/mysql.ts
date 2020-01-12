import { createConnection } from 'typeorm'
import config from '../../config'
import { logger, MysqlLogger } from '../util'
const { database } = config.db.mysql
/**
 * 创建Mysql连接
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
const mysql = async (): Promise<void> => {
  logger.debug(`正在尝试连接[${database}]数据库...`)
  try {
    await createConnection({
      type: 'mysql',
      logging: true,
      synchronize: config.isDev,
      entities: ['server/models/*.ts'], // __dirname + '/server/models/*.{ts,js}'
      logger: config.isDev ? 'advanced-console' : new MysqlLogger(),
      ...config.db.mysql
    })
    logger.info(`连接[${database}]数据库成功！`, {
      module: 'db'
    })
  } catch (err) {
    logger.onerror(err, 'db', `连接[${database}]数据库失败:${err.message}`)
  }
}
export { mysql }
