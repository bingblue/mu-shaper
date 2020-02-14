const articles = []
let article = {}
const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'
for(let i = 0; i <= 20; i++) {
  article = {
    id: '1000' + i,
    timestamp: new Date().getTime(),
    author: 'xiaomu' + i,
    reviewer: 'petter',
    title: '我是标题！',
    content_short: 'mock data',
    content: baseContent,
    forecast: 2 * i,
    importance: '1',
    type: 'CN',
    status: 'published',
    display_time: new Date().toLocaleDateString(),
    comment_disabled: true,
    pageviews: '43523',
    image_uri,
    platforms: ['a-platform']
  }
  articles.push(article)
}
export { articles, article }
