import * as fs from 'fs'
import * as path from 'path'
const Config = {
  website: {
    port: 3000,
    cert: fs.readFileSync(path.join(__dirname, './secret/mu-shaper.pem')),
    key: fs.readFileSync(path.join(__dirname, './secret/mu-shaper.key'))
  }
}
export default Config
