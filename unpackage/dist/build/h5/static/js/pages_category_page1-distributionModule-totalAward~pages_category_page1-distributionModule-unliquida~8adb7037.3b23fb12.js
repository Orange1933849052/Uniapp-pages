(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_category_page1-distributionModule-totalAward~pages_category_page1-distributionModule-unliquida~8adb7037"],{1378:function(t,e,r){var n=r("21d6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("1ebcee8a",n,!0,{sourceMap:!1,shadowMode:!1})},"18a5":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[r("v-uni-view",{attrs:{id:t.id}},[r("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[r("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,n){return r("v-uni-view",{key:n,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(n)],attrs:{id:"u-tab-item-"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(n)}}},[t._v(t._s(e[t.name]||e["name"]))])})),t.showBar?r("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},o=[]},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,u,"next",t)}function u(t){n(a,i,o,c,u,"throw",t)}c(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"21d6":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 页面左右间距 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-796ff26f],\nuni-scroll-view[data-v-796ff26f]{box-sizing:border-box}[data-v-796ff26f]::-webkit-scrollbar,[data-v-796ff26f]::-webkit-scrollbar,[data-v-796ff26f]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-796ff26f]{position:relative}uni-scroll-view[data-v-796ff26f] ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-796ff26f]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-796ff26f]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color;transition-property:background-color,color}.u-tab-bar[data-v-796ff26f]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-796ff26f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}',""]),t.exports=e},"3ba9":function(t,e,r){"use strict";var n=r("4ea4");r("a9e3"),r("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=n(r("1da1")),o={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var r=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){r.init()}))},current:{immediate:!0,handler:function(t,e){var r=this;this.$nextTick((function(){r.currentIndex=t,r.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var r={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(r.fontWeight="bold"),e==t.currentIndex?(r.color=t.activeColor,r=Object.assign(r,t.activeItemStyle)):r.color=t.inactiveColor,r}}},methods:{init:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:r=e.sent,t.parentLeft=r.left,t.componentWidth=r.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var r=e.width,n=e.left-this.parentLeft,i=n-(this.componentWidth-r)/2;this.scrollLeft=i<0?0:i;var o=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=o-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=o},9594:function(t,e,r){"use strict";r.r(e);var n=r("3ba9"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},y={};y[a]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(B([])));g&&g!==n&&i.call(g,a)&&(y=g);var m=S.prototype=L.prototype=Object.create(y);k.prototype=m.constructor=S,S.constructor=k,S[u]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var i=new E(w(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=B,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return c.type="throw",c.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:B(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var i=e&&e.prototype instanceof L?e:L,o=Object.create(i.prototype),a=new N(n||[]);return o._invoke=j(t,r,a),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function k(){}function S(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,o,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(s).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function j(t,e,r){var n=f;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return C()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=I(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function I(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,I(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function B(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},aa9b:function(t,e,r){"use strict";var n=r("1378"),i=r.n(n);i.a},eb28:function(t,e,r){"use strict";r.r(e);var n=r("18a5"),i=r("9594");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("aa9b");var a,c=r("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"796ff26f",null,!1,n["a"],a);e["default"]=u.exports}}]);