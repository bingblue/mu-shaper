'use strict'
// import * as Axios from 'axios'
const Axios  = require('axios')
test('2+2=4?', () => {
  expect(2 + 2).toBe(4)
})
test('请求/', async () => {
  let res = await Axios.get('http://localhost:3000/')
  console.log('res.data===>', res.data)
  expect(res.status).toBe(200)
})
test('请求/signup', async () => {
  let res = await Axios.get('http://localhost:3000/signup',{
    name: 'xiaomu',
    email: '123@qq.com',
    password: 'safsd'
  })
  console.log('res.data222===>', res)
  expect(res.status).toBe(200)
})
test('2+3=5?', () => {
  expect(2 + 3).toBe(5)
})
