import { log } from '../server/common/decorator'

class User {
  @log('获取用户')
  // static getUser(a: any) {
  getUser (a: any): any {
    console.log(new ErrorEvent('ahahha'), a)
  }
}
const user = new User()
user.getUser('a')
// User.getUser('100001')
