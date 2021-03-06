import Axios from 'axios'
test('请求/', async () => {
  const res = await Axios.get('http://localhost:3000/')
  console.log('[get/] res.data = ', res.data)
  expect(res.status).toBe(200)
})
test('请求post/signup', async () => {
  const res = await Axios.post('http://localhost:3000/signup', {
    name: 'xiaomu',
    email: '123@qq.com',
    password: 'safsd'
  })
  console.log('[post/ signup]res. = ', res.data)
  expect(res.status).toBe(200)
})
test('请求get/signup', async () => {
  const res = await Axios.get('http://localhost:3000/signup', {
    params: {
      name: 'xiaomu',
      email: '123@qq.com',
      password: 'safsd'
    }
  })
  console.log('[get/signup] res.data = ', res.data)
  expect(res.status).toBe(200)
})
