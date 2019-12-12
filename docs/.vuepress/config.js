module.exports = {
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
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    // algolia: {
    //   apiKey: 'f854bb46d3de7eeb921a3b9173bd0d4c',
    //   indexName: 'mu-shaper',
    // },
    repo: 'bingblue/mu-shaper',
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
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
            link: 'https://github.com/vuejs/vue-router/releases'
          }
        ],
        sidebar: [
          '/',
          {
            title: '基础',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/A'
            ]
          },
          {
            title: '进阶',
            collapsable: false,
            children: [
              '/guide/C',
              '/guide/D'
            ]
          }
        ]
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
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
            link: 'https://github.com/vuejs/vue-router/releases'
          }
        ],
        sidebar: [
          '/en/',
          {
            title: 'Essentials',
            collapsable: false,
            children: [
              '/en/guide/',
              '/en/guide/A',
            ]
          },
          {
            title: 'Advanced',
            collapsable: false,
            children: [
              '/en/guide/C',
              '/en/guide/D'
            ]
          }
        ]
      },
    }
  }
}