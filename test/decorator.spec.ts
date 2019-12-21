import { log } from '../server/common/decorator'

class User {
  @log('getUser')
  getUser(a: any) {
    new Error('ahahha')
  }
}