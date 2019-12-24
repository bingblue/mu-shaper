import { ClassUtil, NamespaceUtil, objectUtil, logger } from '../server/common/util'
test('ClassUtil是否数字方法', async () => {
  const result = ClassUtil.isNumber('11')
  expect(result).toBe(false)
})
test('NamespaceUtil是否数字方法', async () => {
  const result = NamespaceUtil.isNumber('11')
  expect(result).toBe(false)
})
test('objectUtil是否数字方法', async () => {
  const result = objectUtil.isNumber('11')
  expect(result).toBe(false)
})
test('测试日志', async () => {
  logger.info('第一次')
  logger.error('我是error', {
    module: 'aaa',
    ccc: 'aaa'
  })
  expect(1).toBe(1)
})
