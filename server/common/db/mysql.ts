import { createConnection } from 'typeorm'
import config from '../../config'
import SqlLogger from './SqlLogger'
import { logger } from '../util'
const { database } = config.db.mysql
const mysql = async (): Promise<void> => {
  logger.debug(`正在尝试连接[${database}]数据库...`)
  try {
    await createConnection({
      type: 'mysql',
      logging: true,
      synchronize: true,
      entities: ['server/models/*.ts'], // __dirname + '/server/models/*.{ts,js}'
      logger: process.env.NODE_ENV === 'development'? 'advanced-console' : new SqlLogger(),
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
