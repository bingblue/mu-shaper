'use strict'
import * as fs from 'fs'
import * as path from 'path'
const Config = {
  website: {
    port: 3000,
    cert: fs.readFileSync(path.join(__dirname, './https/1.pem')),
    key: fs.readFileSync(path.join(__dirname, './https/1.key'))
  }
}
export default Config
