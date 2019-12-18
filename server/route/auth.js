'use strict'
import * as router from 'koa-joi-router'
const route = router()
const passport = require('koa-passport')

route.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

route.get('/logout', function (ctx) {
  ctx.logout()
  ctx.redirect('/')
})

route.get('/github', passport.authenticate('github'))
route.get('/github/callback', passport.authenticate('github', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

export default route
