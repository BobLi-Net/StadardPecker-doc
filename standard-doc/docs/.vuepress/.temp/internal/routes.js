export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/quikly-start.html", { loader: () => import(/* webpackChunkName: "quikly-start.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/quikly-start.html.js"), meta: {"title":"快速上手"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/faq/cad.html", { loader: () => import(/* webpackChunkName: "cad.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/faq/cad.html.js"), meta: {"title":"CAD及同类产品相关问题"} }],
  ["/faq/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/faq/index.html.js"), meta: {"title":"常见问题索引"} }],
  ["/faq/setup.html", { loader: () => import(/* webpackChunkName: "setup.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/faq/setup.html.js"), meta: {"title":"客户端相关问题"} }],
  ["/faq/word.html", { loader: () => import(/* webpackChunkName: "word.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/faq/word.html.js"), meta: {"title":"Word插件相关问题"} }],
  ["/faq/wps.html", { loader: () => import(/* webpackChunkName: "wps.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/faq/wps.html.js"), meta: {"title":"WPS插件相关问题"} }],
  ["/guide/contract.html", { loader: () => import(/* webpackChunkName: "contract.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/guide/contract.html.js"), meta: {"title":"联系我们"} }],
  ["/guide/setup.html", { loader: () => import(/* webpackChunkName: "setup.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/guide/setup.html.js"), meta: {"title":"安装及卸载详情"} }],
  ["/guide/usage.html", { loader: () => import(/* webpackChunkName: "usage.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/guide/usage.html.js"), meta: {"title":"使用指南"} }],
  ["/guide/user.html", { loader: () => import(/* webpackChunkName: "user.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/guide/user.html.js"), meta: {"title":"个人信息管理"} }],
  ["/guide/white-pager.html", { loader: () => import(/* webpackChunkName: "white-pager.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/guide/white-pager.html.js"), meta: {"title":"啄木鸟操作原理白皮书"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Works/Project/StandardPecker/doc/standard-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
