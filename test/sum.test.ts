'use strict'
// import * as Axios from 'axios'
const Axios  = require('axios')
test('2+2=4?', () => {
  expect(2 + 2).toBe(4)
})
test('请求/', async () => {
  let res = await Axios.get('http://localhost:3000/')
  console.log('[get/] res.data = ', res.data)
  expect(res.status).toBe(200)
})
test('请求post/signup', async () => {
  let res = await Axios.post('http://localhost:3000/signup',{
    name: 'xiaomu',
    email: '123@qq.com',
    password: 'safsd'
  })
  console.log('[post/ signup]res. = ', res.data)
  expect(res.status).toBe(200)
})
test('请求get/signup', async () => {
  let res = await Axios.get('http://localhost:3000/signup',{
    params: {
      name: 'xiaomu',
      email: '123@qq.com',
      password: 'safsd'
    }
  })
  console.log('[get/signup] res.data = ', res.data)
  expect(res.status).toBe(200)
})
