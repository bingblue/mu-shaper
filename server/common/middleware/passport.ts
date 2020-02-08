import JWT from 'jsonwebtoken'
import passport from 'koa-passport'
import { getCustomRepository } from 'typeorm'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import config from '../../config'
import { logger } from '../util'
import UserService from '../../services/SysUser'

/**
 * 创建JWT
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
function createJWT (id: string): string {
  const { secretOrKey, ...opts } = config.auth.jwt
  return JWT.sign({ id }, secretOrKey, opts)
}
// 序列化ctx.login()触发
// passport.serializeUser((user: any, done: Function): void => {
//   done(null, user.id)
// })

// // 反序列化
// passport.deserializeUser(async (id, done) => {
//   const userRepository = getCustomRepository(UserService)
//   const user = await userRepository.findByName('xiaomu')
//   done(null, user)
// })

/**
 * 普通登录
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const userRepository = getCustomRepository(UserService)
    const user = await userRepository.findByAuthentication(username, password)
    if (!user) return done(null, false)
    user.token = createJWT(user.id)
    return done(null, user)
  } catch (err) {
    logger.onerror(err, 'middleware')
    return done(err.message)
  }
}))

/**
 * JWT验证
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
const jwtOpt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  ...config.auth.jwt
}
passport.use(new JwtStrategy(jwtOpt, async (payload, done) => {
  const userRepository = getCustomRepository(UserService)
  const user = await userRepository.findOne(payload.id)
  return done(null, user || false)
}))

/**
 * Github 登录
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-01-12
 **/
// const GitHubStrategy = require('passport-github2').Strategy
// passport.use(new GitHubStrategy({
//   clientID: Config.github.clientID,
//   clientSecret: Config.github.clientSecret,
//   callbackURL: Config.github.callbackURL
// }, async function (accessToken, refreshToken, profile, done) {
//   let user = {
//     userName: profile.username,
//     userPwd: 'default',
//     nickName: profile.displayName,
//     userSex: '男',
//     userEmail: profile._json.email,
//     userBio: profile._json.bio,
//     userAvatar: profile._json.avatar_url,
//     githubId: profile.id
//   }
//   const result = await User.findOrCreate(user, 'github')
//   return done(null, result)
// }
// ))
export { passport }
