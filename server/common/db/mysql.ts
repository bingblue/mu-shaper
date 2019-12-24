import { createConnection } from 'typeorm'
import config from '../../config'
import { logger } from '../util'
const { database } = config.db.mysql
const mysql = async () => {
  logger.debug(`正在尝试连接[${ database }]数据库...`)
  try {
    await createConnection({
      type: 'mysql',
      logging: true,
      synchronize: true,
      entities: ['server/models/*.ts'], // __dirname + '/server/models/*.{ts,js}'
      ...config.db.mysql
    })
    logger.info(`连接[${ database }]数据库成功！`)
  } catch (error) {
    logger.error(`连接[${ database }]数据库失败:${ error }`)
  }
}
export { mysql }
