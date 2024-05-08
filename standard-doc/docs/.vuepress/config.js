import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '长江设计集团啄木鸟标准法规审查系统',
  description: '技术支持：186 7866 8510（李）（微信同号）',

  theme: defaultTheme({
    logo: 'http://www.bzyxxcx.com/logo_.png',
    navbar: [{
      text: '首页',
      link: '/',
    },{
      text: '快速上手',
      link: '/quikly-start',
    },{
      text: '使用说明',
      children: [        
       
        '/guide/setup.md',
        '/guide/usage.md',
        '/guide/user.md', 
        '/guide/contract.md',
        '/guide/white-pager.md',
      ],
    },{
      text: '常见问题',
      children: [
        '/faq/index.md',
        '/faq/word.md',
        '/faq/wps.md',
        '/faq/cad.md',
        '/faq/setup.md'
      ],
    }],
  }),

  bundler: viteBundler(),
})
