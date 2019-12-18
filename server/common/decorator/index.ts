import * as glob from 'glob'
let decorators
/**
 * 加载所有装饰器，只读取第一层[文件夹名/index.ts]
 * @author 小牧COOL <xiaomucool@bingblue.com>
 * @updateAt 2019-12-18
 **/
glob.sync("**/index.ts", { cwd: __dirname }).forEach(file => {
  const folder = file.replace(/\.[^.]*$/, "").replace("/index", "")
  if (folder === "index") return
  const decorator = require("./" + folder).default
  decorators.folder = decorator
})
export default Decorators
