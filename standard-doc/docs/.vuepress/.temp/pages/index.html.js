import comp from "D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"http://www.bzyxxcx.com/logo_.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/quikly-start\",\"type\":\"primary\"},{\"text\":\"操作指南\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"常见问题\",\"link\":\"/faq/\",\"type\":\"primary\"},{\"text\":\"官方网站\",\"link\":\"http://www.bzyxxcx.com\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"极致体验\",\"details\":\"以插件形式植入Word/WPS/AutoCAD，即用即查，结果分类可定位，操作高效便捷。\"},{\"title\":\"安全可靠\",\"details\":\"基于客户端方式进行文档检查分析，保护文档内容不被泄露。\"},{\"title\":\"数据可信\",\"details\":\"基于大数据技术构建，包含国标、行标、地标、团标，实时更新，经过6000+用户验证。\"}],\"footer\":\"Copyright © 2018-present 标无忧（山东）信息科技有限公司\"},\"headers\":[],\"git\":{\"updatedTime\":1715065507000,\"contributors\":[{\"name\":\"bob.li\",\"email\":\"hiaspx@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
