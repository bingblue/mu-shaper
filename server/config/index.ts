import fs from 'fs'
import path from 'path'
import { Config } from '../common/@types'
import development from './development'
import production from './production'
import test from './test'
let config: Config = development
config.isDev = false
if (process.env.NODE_ENV !== 'production') config.isDev = true
if (process.env.NODE_ENV === 'test') config = test
if (process.env.NODE_ENV === 'production') config = production

config.website.cert = fs.readFileSync(path.join(__dirname, config.website.cert))
config.website.key = fs.readFileSync(path.join(__dirname, config.website.key))

export default config
