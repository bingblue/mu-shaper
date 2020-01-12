import Redis from 'ioredis'
import config from '../../config'
import { logger } from '../util'

/**
 * 创建Redis连接
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
const redis = new Redis({
  family: 4,            // 4 (IPv4) or 6 (IPv6)
  db: 0,                // 要使用的数据库索引
  ...config.db.redis
})

redis.on('connect', () => {
  logger.info(`连接Redis数据库成功！`, {
    module: 'db'
  })
})

redis.on('error', (err) => {
  logger.onerror(err, 'db', `Redis发生错误：${err.message}`)
})
export { redis }
