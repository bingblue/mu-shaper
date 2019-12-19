import { date, url } from '../server/common/util'
test('请求/', async () => {
  let result = date.isNumber('11')
  expect(result).toBe(false)
})
test('请求post/signup', async () => {
  let result = url.isNumber('11')
  expect(result).toBe(false)
})
