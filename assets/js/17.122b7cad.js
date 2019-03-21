(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{280:function(t,r,a){"use strict";a.r(r);var e=a(4),s=Object(e.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第8章-vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第8章-vue-router","aria-hidden":"true"}},[t._v("#")]),t._v(" 第8章 Vue Router")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"动态路由匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由匹配","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态路由匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"嵌套路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 嵌套路由")]),t._v(" "),a("blockquote",[a("p",[t._v("https://router.vuejs.org/zh/guide/essentials/nested-routes.html")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"编程式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程式导航","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程式导航")]),t._v(" "),a("blockquote",[a("p",[t._v("https://router.vuejs.org/zh/guide/essentials/navigation.html")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"命名路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 命名路由")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"命名视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名视图","aria-hidden":"true"}},[t._v("#")]),t._v(" 命名视图")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"重定向和别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重定向和别名","aria-hidden":"true"}},[t._v("#")]),t._v(" 重定向和别名")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"相关-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关 API")]),t._v(" "),a("h3",{attrs:{id:"路由对象-this-route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由对象-this-route","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由对象 this.$route")]),t._v(" "),a("p",[t._v("一个"),a("strong",[t._v("路由对象 (route object)")]),t._v(" 表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，还有 URL 匹配到的"),a("strong",[t._v("路由记录 (route records)")]),t._v("。")]),t._v(" "),a("p",[t._v("路由对象是不可变 (immutable) 的，每次成功的导航后都会产生一个新的对象。")]),t._v(" "),a("p",[t._v("路由对象出现在多个地方:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在组件内，即 "),a("code",[t._v("this.$route")])])]),t._v(" "),a("li",[a("p",[t._v("在 "),a("code",[t._v("$route")]),t._v(" 观察者回调内")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("router.match(location)")]),t._v(" 的返回值")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.path")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("字符串，对应当前路由的路径，总是解析为绝对路径，如 "),a("code",[t._v('"/foo/bar"')]),t._v("。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.params")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.query")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("一个 key/value 对象，表示 URL 查询参数。例如，对于路径 "),a("code",[t._v("/foo?user=1")]),t._v("，则有 "),a("code",[t._v("$route.query.user == 1")]),t._v("，如果没有查询参数，则是个空对象。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.hash")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("当前路由的 hash 值 (带 "),a("code",[t._v("#")]),t._v(") ，如果没有 hash 值，则为空字符串。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.fullPath")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("完成解析后的 URL，包含查询参数和 hash 的完整路径。")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.matched")])]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Array<RouteRecord>")])])]),t._v(" "),a("p",[t._v("一个数组，包含当前路由的所有嵌套路径片段的"),a("strong",[t._v("路由记录")]),t._v(" 。路由记录就是 "),a("code",[t._v("routes")]),t._v(" 配置数组中的对象副本 (还有在 "),a("code",[t._v("children")]),t._v(" 数组)。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下面的对象就是路由记录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这也是个路由记录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("当 URL 为 "),a("code",[t._v("/foo/bar")]),t._v("，"),a("code",[t._v("$route.matched")]),t._v(" 将会是一个包含从上到下的所有对象 (副本)。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.name")])]),t._v(" "),a("p",[t._v("当前路由的名称，如果有的话。(查看"),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/named-routes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("命名路由"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("$route.redirectedFrom")])]),t._v(" "),a("p",[t._v("如果存在重定向，即为重定向来源的路由的名字。(参阅"),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("重定向和别名"),a("OutboundLink")],1),t._v(")")])])]),t._v(" "),a("h3",{attrs:{id:"router-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-实例","aria-hidden":"true"}},[t._v("#")]),t._v(" Router 实例")]),t._v(" "),a("blockquote",[a("p",[t._v("我们在组件中访问的 this.$router 就是路由文件中创建的路由实例")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("API")]),t._v(" "),a("th",[t._v("作用")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("push")]),t._v(" "),a("td",[t._v("跳转，会形成历史记录")]),t._v(" "),a("td",[t._v("想要导航到不同的 URL，则使用 "),a("code",[t._v("router.push")]),t._v(" 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。")])]),t._v(" "),a("tr",[a("td",[t._v("replace")]),t._v(" "),a("td",[t._v("路径替换")]),t._v(" "),a("td",[t._v("跳过去，别回来了")])]),t._v(" "),a("tr",[a("td",[t._v("go")]),t._v(" "),a("td",[t._v("跳转到指定步骤的路由")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("back")]),t._v(" "),a("td",[t._v("后退一步")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("forward")]),t._v(" "),a("td",[t._v("前进一步")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td")])])])])},[],!1,null,null,null);r.default=s.exports}}]);