import passport from 'koa-passport'
import { Context } from '../@types'
import { logger } from '../util'
import { JwtStrategy, ExtractJwt } from 'passport-jwt'
// isAuthenticated
let jwtOpt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: 'mockserver',
  issuer: 'www.xx.com',
  audience: 'www.xx.com'
}
passport.use(new JwtStrategy(jwtOpt, function (jwt_payload, done) {
  User.getById(jwt_payload.id)
  .then(user => {
    if(user) return done(null, user)
  })
  .catch(err => done(err))
const permission = async (ctx: Context, next: Function): Promise<void> => {
  passport.authenticate('jwt', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
  await next()
}
export { permission }
