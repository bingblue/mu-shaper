import JWT from 'jsonwebtoken'
import passport from 'koa-passport'
import { getCustomRepository } from 'typeorm'
import { Strategy as LocalStrategy } from 'passport-local'
import config from '../../../config'
import UserService from '../../../services/User'

function createJWT(id: string): string {
  const { secret, ...opts } = config.auth.jwt
  return JWT.sign({ id }, secret, opts)
}
passport.use(new LocalStrategy(async (username, password, done) => {
  const userRepository = getCustomRepository(UserService)
  const user = await userRepository.findByAuthentication(username, password)
  if(!user) return done(null, false)
  user.token = createJWT(user.id)
  return done(null, user)
}))

// 普通登录
// passport.use(new LocalStrategy(function (userName, userPwd, done) {
//   User.getByUserName(userName)
//   .then(user => {
//     if (user.body && Util.MD5(userPwd) === user.body.userPwd) {
//       done(null, user.body)
//     } else {
//       done(null, false)
//     }
//   })
//   .catch(err => done(err))
// }))

// github登录
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
