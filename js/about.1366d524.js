(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{c49c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Likes",{attrs:{likes:t.likes}})},n=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"likes"},[t.likes&&t.likes.length?s("ul",{staticClass:"likes-list"},t._l(t.likes,(function(e){return s("li",{key:e,staticClass:"likes-item"},[t._v(" "+t._s(e)+" "),s("Heart",{staticClass:"is-small",attrs:{active:!0},on:{click:function(s){return t.onLike(e)}}})],1)})),0):s("p",[s("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("likes.empty"))+" ")])],1)])},c=[],r=s("d96e"),a={components:{Heart:r["a"]},props:{likes:{type:Array,default:function(){return[]}}},methods:{onLike:function(t){this.$store.dispatch("like",t)}}},o=a,u=(s("e19c"),s("2877")),k=Object(u["a"])(o,l,c,!1,null,"0fa62fac",null),f=k.exports,p={components:{Likes:f},computed:{likes:function(){return this.$store.state.likes}}},d=p,m=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=m.exports},ced5:function(t,e,s){},e19c:function(t,e,s){"use strict";s("ced5")}}]);
//# sourceMappingURL=about.1366d524.js.map