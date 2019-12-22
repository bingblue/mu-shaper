import * as fs from 'fs'
import * as path from 'path'
import development from './config.development'
import production from './config.production'
import test from './config.test'
let Config: any = development
if (process.env.NODE_ENV === 'production') Config = production
if (process.env.NODE_ENV === 'test') Config = test

Config.website.cert = fs.readFileSync(path.join(__dirname, Config.website.cert))
Config.website.key = fs.readFileSync(path.join(__dirname, Config.website.key))

export default Config
