interface ctx {
  method: string,
  url: string
}
const logger = async (ctx: ctx, next: Function) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
}
export { logger }
