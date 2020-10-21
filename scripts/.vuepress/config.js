module.exports = {
  lang: 'zh-CN',
  plugins: [
    [
      'vuepress-plugin-mathjax', {
        target: 'svg',
        macros: {
          '*': '\\times'
        }
      }
    ],
    [
      'vuepress-plugin-comment', {
        choosen: 'gitalk',
        options: {
          clientID: '57f16373f90dd62b1b30',
          clientSecret: '494142f6184aa16fa320d69b5ea09eb420e7a013',
          repo: 'Math',
          owner: 'haozi',
          admin: [
            'haozi'
          ],
          distractionFreeMode: false
        }
      }
    ]
  ]
}
