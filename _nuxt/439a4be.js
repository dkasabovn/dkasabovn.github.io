(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("0d101336",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";n(227)},233:function(t,e,n){(e=n(40)(!1)).push([t.i,'.border-bottom-custom[data-v-2c390acf]{border-bottom:1px solid rgba(0,0,0,.11373)}.title-fancy[data-v-2c390acf]:after{content:"\\27f6";color:red;padding-left:5px;transition:.25s ease-in-out;opacity:0}.title-fancy[data-v-2c390acf]:hover:after{padding-left:15px;opacity:1}',""]),t.exports=e},250:function(t,e,n){"use strict";n.r(e);n(26);var r=n(3),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").only(["title","createdAt","description","readTime","tags","slug"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{doc:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{cleanDate:function(t){return t.substring(0,10)}}},o=(n(232),n(24)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flex items-center mx-auto"},[n("main",{staticClass:"mt-6 lg:mt-10 w-full flex items-center flex-col"},t._l(t.doc,(function(e,i){return n("section",{key:i,staticClass:"py-6 border-bottom-custom w-5/6"},[n("div",{staticClass:"text-gray-600 mb-3 flex justify-between items-center"},[n("p",[t._v(t._s(t.cleanDate(e.createdAt)))]),t._v(" "),n("p",[n("i",[t._v(t._s(e.readTime)+" min read")])])]),t._v(" "),n("nuxt-link",{staticClass:"lg:text-4xl text-3xl title-fancy",attrs:{to:{name:"articles-slug",params:{slug:e.slug}}}},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-gray-700 mt-3 flex justify-between items-center"},[n("p",[t._v(t._s(e.description))]),t._v(" "),n("p",{staticClass:"hidden lg:flex"},[n("span",{staticClass:"text-red-700"},[t._v(t._s(e.tags.join(", ")))]),t._v(" — Tags")])])],1)})),0)])}),[],!1,null,"2c390acf",null);e.default=component.exports}}]);