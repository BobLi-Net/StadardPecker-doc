import comp from "D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/guide/white-pager.html.vue"
const data = JSON.parse("{\"path\":\"/guide/white-pager.html\",\"title\":\"啄木鸟操作原理白皮书\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"软件结构\",\"slug\":\"软件结构\",\"link\":\"#软件结构\",\"children\":[]},{\"level\":2,\"title\":\"授权原理\",\"slug\":\"授权原理\",\"link\":\"#授权原理\",\"children\":[]},{\"level\":2,\"title\":\"为什么选择插件方式？\",\"slug\":\"为什么选择插件方式\",\"link\":\"#为什么选择插件方式\",\"children\":[]}],\"git\":{\"updatedTime\":1715065507000,\"contributors\":[{\"name\":\"bob.li\",\"email\":\"hiaspx@qq.com\",\"commits\":1}]},\"filePathRelative\":\"guide/white-pager.md\"}")
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
