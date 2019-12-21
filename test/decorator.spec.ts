import { log } from '../server/common/decorator'

class User {
  @log('getUser')
  getUser(a: any) {
    new ErrorEvent('ahahha')
  }
}
const user = new User()
user.getUser('a')