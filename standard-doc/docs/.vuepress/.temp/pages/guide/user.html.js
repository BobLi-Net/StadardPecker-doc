import comp from "D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/guide/user.html.vue"
const data = JSON.parse("{\"path\":\"/guide/user.html\",\"title\":\"个人信息管理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"重置密码\",\"slug\":\"重置密码\",\"link\":\"#重置密码\",\"children\":[]},{\"level\":2,\"title\":\"管理我的设备\",\"slug\":\"管理我的设备\",\"link\":\"#管理我的设备\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/user.md\"}")
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
