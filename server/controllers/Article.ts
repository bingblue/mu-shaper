import { Context } from '../common/@types'
import { articles, article } from '../config/mock'

class Article {
  /** 获取文章列表 */
  static async getList (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      message: 'success',
      body: {
        total: 20,
        items: articles
      }
    }
  }

  /** 获取文章详情 */
  static async getDetail (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      message: 'success',
      body: article
    }
  }

  /** 获取文章PV */
  static async getPv (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      message: 'success',
      body: {
        pvData: [
          { key: 'PC', pv: 1024 },
          { key: 'mobile', pv: 1024 },
          { key: 'ios', pv: 1024 },
          { key: 'android', pv: 1024 }
        ]
      }
    }
  }

  /** 创建文章 */
  static async postCreate (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      message: 'success',
      body: '添加成功'
    }
  }

  /** 更新文章 */
  static async postUpdate (ctx: Context): Promise<void> {
    ctx.body = {
      code: 200,
      message: 'success',
      body: '更新成功'
    }
  }

  
}
export default Article
