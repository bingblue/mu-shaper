import { Util1, Util2 } from '../server/common/util'
test('Util1是否数字方法', async () => {
  let result = Util1.isNumber('11')
  expect(result).toBe(false)
})
test('Util2是否数字方法', async () => {
  let result = Util2.isNumber('11')
  expect(result).toBe(false)
})
