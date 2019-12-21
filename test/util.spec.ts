import { Util1, Util2, logger } from '../server/common/util'
test('Util1是否数字方法', async () => {
  const result = Util1.isNumber('11')
  expect(result).toBe(false)
})
test('Util2是否数字方法', async () => {
  const result = Util2.isNumber('11')
  expect(result).toBe(false)
})
test('测试日志', async () => {
  logger.info('第一次')
})
