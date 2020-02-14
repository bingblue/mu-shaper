import { Context } from '../common/@types'

class Transaction {
  /** 获取交易列表 */
  static async getList (ctx: Context): Promise<void> {
    let list = []
    for(let i = 0; i <= 10; i++) {
      let item = {
        order_no: '10000' + i,
        timestamp: new Date().getTime(),
        username: 'xiaomu' + i,
        price: '1000',
        status: 'success'
      }
      let item2 = {
        order_no: '20000' + i,
        timestamp: new Date().getTime(),
        username: 'xiaomu2' + i,
        price: '15000',
        status: 'pending'
      }
      list.push(item)
      list.push(item2)
    }
    ctx.body = {
      code: 200,
      message: 'success',
      body: {
        total: 20,
        items: list
      }
    }
  }
}

export default Transaction
