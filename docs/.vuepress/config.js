module.exports = {
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Mu-Shaper',
      description: 'Mu-Shaper，快速开发脚手架。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Mu-Shaper',
      description: 'Mu-Shaper,Fast Develop Scaffolding.'
    }
  },
  // serviceWorker: true,
  themeConfig: {
    // algolia: {
    //   apiKey: 'f854bb46d3de7eeb921a3b9173bd0d4c',
    //   indexName: 'mu-shaper',
    // },
    repo: 'bingblue/mu-shaper',
    smoothScroll: true,
    displayAllHeaders: true,
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '最后更新',
        editLinkText: '期待你的加入！',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: 'API 参考',
            link: '/api/'
          },
          {
            text: '更新记录',
            link: 'https://github.com/bingblue/mu-shaper/releases'
          }
        ],
        sidebar: [
          '/',
          {
            title: '基础',
            collapsable: false,
            sidebarDepth: 0,    // 默认值 1
            children: [
              '/guide/',
              '/guide/getting-started'
            ]
          },
          {
            title: '进阶',
            collapsable: true,
            sidebarDepth: 2,
            children: [
              '/guide/B',
              '/guide/C'
            ]
          }
        ]
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Hope You Can Join',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'API Reference',
            link: '/api/'
          },
          {
            text: 'Release Notes',
            link: 'https://github.com/bingblue/mu-shaper/releases'
          }
        ],
        sidebar: [
          '/en/',
          {
            title: 'Essentials',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              '/en/guide/',
              '/en/guide/A',
            ]
          },
          {
            title: 'Advanced',
            collapsable: true,
            children: [
              '/en/guide/B',
              '/en/guide/C'
            ]
          }
        ]
      },
    }
  }
}