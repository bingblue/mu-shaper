import { createHash } from 'crypto'
const encryption = {
  md5 (password: string): string {
    return createHash('md5').update(password + '').digest('hex')
  }
}
export { encryption }
