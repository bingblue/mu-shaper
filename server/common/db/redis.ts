import Redis from 'ioredis'
import config from '../../config'
import { logger } from '../util'

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
