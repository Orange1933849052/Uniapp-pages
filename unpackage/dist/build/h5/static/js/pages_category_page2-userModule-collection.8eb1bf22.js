(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_category_page2-userModule-collection"],{"3a11":function(t,e,o){t.exports=o.p+"static/img/collect-empty.ff940fd2.png"},"4a2e":function(t,e,o){"use strict";(function(t){o("99af"),o("4160"),o("d81d"),o("a434"),o("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o("9ae9"),l=o("ef67"),c={data:function(){return{collectionTypeList:[{name:"商品"},{name:"店铺"}],collectionTypeFlag:0,disabled:!1,btnWidth:180,show:!1,options:[{text:"删除",style:{backgroundColor:"#F15C48"}}],isAllProCheck:!1,isAllStoreCheck:!1,allCheckShow:!1,productCollect:[],storeCollect:[],productPage:1,productPageSize:10,proloadingType:0,storePage:1,storePageSize:10,storeloadingType:0}},onLoad:function(){this.getProductCollect(),this.getStoreCollect()},onReachBottom:function(){0==this.collectionTypeFlag?1==this.proloadingType?uni.stopPullDownRefresh():(this.productPage=this.productPage+1,this.getProductCollect()):1==this.collectionTypeFlag&&(1==this.storeloadingType?uni.stopPullDownRefresh():(this.storePage=this.storePage+1,this.getStoreCollect()))},methods:{paoductDel:function(){var t=this,e=[];this.productCollect.forEach((function(t,o){1==t.selected&&e.push(t.collectId)})),i.request(l.deleteCollect,{ids:e},"DELETE").then((function(e){t.productCollect=[],t.$u.toast("删除成功"),t.getProductCollect()})).catch((function(e){t.$u.toast("删除失败")}))},shopDel:function(){var t=this,e=[];this.storeCollect.forEach((function(t,o){1==t.selected&&e.push(t.collectId)})),i.request(l.deleteCollect,{ids:e},"DELETE").then((function(e){t.storeCollect=[],t.$u.toast("删除成功"),t.getStoreCollect()})).catch((function(e){t.$u.toast("删除失败")}))},toStoreClick:function(t){uni.navigateTo({url:"../../pages_category_page1/store/index?storeId="+t})},toGoodsDetails:function(t,e,o){uni.navigateTo({url:"../../pages_category_page1/goodsModule/goodsDetails?productId="+t+"&shopId="+e+"&skuId="+o})},collectionTypeActive:function(t){this.collectionTypeFlag=t,0==t?(this.productPage=1,this.productCollect=[],this.proloadingType=0,this.getProductCollect()):1==t&&(this.storePage=1,this.storeCollect=[],this.storeloadingType=0,this.getStoreCollect())},productClick:function(t,e){if(0==e){var o=this.productCollect[t].collectId;this.cancelCollect(o),this.productCollect.splice(t,1),this.$u.toast("删除成功")}},storeClick:function(t,e){if(0==e){var o=this.storeCollect[t].collectId;this.cancelCollect(o),this.storeCollect.splice(t,1),this.$u.toast("删除成功")}},productOpen:function(t){var e=this;this.productCollect[t].show=!0,this.productCollect.map((function(o,i){t!=i&&(e.productCollect[i].show=!1)}))},storeOpen:function(t){var e=this;this.storeCollect[t].show=!0,this.storeCollect.map((function(o,i){t!=i&&(e.storeCollect[i].show=!1)}))},productItemSel:function(t,e){var o=this;this.productCollect[t].selected=e;var i=0;this.productCollect.forEach((function(t,e){0==o.productCollect[e].selected?o.isAllProCheck=!1:i++})),this.productCollect.length==i&&(this.isAllProCheck=!0)},storeItemSel:function(t,e){var o=this;this.storeCollect[t].selected=e;var i=0;this.storeCollect.forEach((function(t,e){0==o.storeCollect[e].selected?o.isAllStoreCheck=!1:i++})),this.storeCollect.length==i&&(this.isAllStoreCheck=!0)},allProductSel:function(t){var e=this;this.isAllProCheck=!this.isAllProCheck,this.productCollect.forEach((function(o,i){e.productCollect[i].selected=t}))},allStoreSel:function(t){var e=this;this.isAllStoreCheck=!this.isAllStoreCheck,this.storeCollect.forEach((function(o,i){e.storeCollect[i].selected=t}))},editClick:function(){this.allCheckShow=!0},finishClick:function(){this.allCheckShow=!1},getProductCollect:function(){var e=this;i.request(l.getProductCollect,{page:this.productPage,pageSize:this.productPageSize},"GET").then((function(o){0==o.data.list.length?(e.proloadingType=1,e.productPage=e.productPage):(t.log(e.productCollect,222),e.productCollect=e.productCollect.concat(o.data.list),e.productCollect.forEach((function(t,e){t["show"]=!1,t["selected"]=0})))})).catch((function(t){uni.showToast({title:"收藏商品查询失败",icon:"none"})}))},getStoreCollect:function(){var t=this;i.request(l.getStoreCollect,{page:this.storePage,pageSize:this.storePageSize},"GET").then((function(e){0==e.data.list.length&&(t.storeloadingType=1,t.storePage=t.storePage),t.storeCollect=t.storeCollect.concat(e.data.list),t.storeCollect.forEach((function(t,e){t["show"]=!1,t["selected"]=0}))})).catch((function(t){uni.showToast({title:"失败",icon:"none"})}))},cancelCollect:function(t){i.request(l.cancelCollect,{ids:[t]},"PUT").then((function(t){})).catch((function(t){uni.showToast({title:"失败",icon:"none"})}))}}};e.default=c}).call(this,o("5a52")["default"])},"56c6":function(t,e,o){"use strict";o.r(e);var i=o("6d8d"),l=o("7bb1");for(var c in l)"default"!==c&&function(t){o.d(e,t,(function(){return l[t]}))}(c);o("9a5c");var s,n=o("f0c5"),a=Object(n["a"])(l["default"],i["b"],i["c"],!1,null,"4f8f941d",null,!1,i["a"],s);e["default"]=a.exports},"6d8d":function(t,e,o){"use strict";o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return i}));var i={uTabs:o("eb28").default,uSwipeAction:o("c522").default},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"collection-box"},[i("v-uni-view",{staticClass:"tabsbox"},[i("u-tabs",{attrs:{list:t.collectionTypeList,"bar-width":"60",bold:!1,"active-color":"#FF7800","inactive-color":"#999999","is-scroll":!1,current:t.collectionTypeFlag},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.collectionTypeActive.apply(void 0,arguments)}}})],1),0==t.collectionTypeFlag?i("v-uni-view",[t.productCollect.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"wid function-box"},[t.allCheckShow?i("v-uni-view",{staticClass:"finishbox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.finishClick.apply(void 0,arguments)}}},[t._v("完成")]):i("v-uni-view",{staticClass:"flex-row-plus editicon-box flex-items fs28",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editClick.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"editicon",attrs:{src:o("c842")}}),i("v-uni-label",{staticClass:"mar-left-10"},[t._v("编辑")])],1)],1),i("v-uni-view",{staticClass:"swipe-box"},t._l(t.productCollect,(function(e,l){return i("u-swipe-action",{key:e.collectId,attrs:{show:e.show,index:l,options:t.options},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.productClick.apply(void 0,arguments)},open:function(e){arguments[0]=e=t.$handleEvent(e),t.productOpen.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"flex-item",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.toGoodsDetails(e.productId,e.shopId,e.skuId)}}},[i("v-uni-view",{staticClass:"item u-border-bottom wid flex-row-plus flex-items"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.allCheckShow,expression:"allCheckShow"}]},[1==e.selected?i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("86a4")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.productItemSel(l,0)}}}):i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("df23")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.productItemSel(l,1)}}})],1),i("v-uni-image",{staticClass:"product-img",attrs:{mode:"aspectFill",src:e.image}}),i("v-uni-view",{staticClass:"title-wrap mar-left-20"},[i("v-uni-text",{staticClass:"title u-line-2"},[t._v(t._s(e.productName))]),i("v-uni-view",{staticClass:"flex-column-plus font-color-FF7800 flex-row"},[i("v-uni-label",{staticClass:"fs22"},[t._v("¥")]),i("v-uni-label",{staticClass:"fs24 mar-left-5"},[t._v(t._s(e.price))])],1),i("v-uni-label",{staticClass:"font-color-999 discountsPriceLine fs24"},[t._v("¥"+t._s(e.originalPrice))])],1)],1)],1)],1)})),1),t.allCheckShow?i("v-uni-view",{staticClass:"pad-bot-140"}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.allCheckShow,expression:"allCheckShow"}],staticClass:"allcheck-box flex-row-plus flex-sp-between flex-items"},[i("v-uni-view",{staticClass:"left"},[t.isAllProCheck?i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("86a4")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allProductSel(0)}}}):i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("df23")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allProductSel(1)}}}),i("v-uni-text",[t._v("全选")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"btn-delete",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paoductDel.apply(void 0,arguments)}}},[t._v("删除")])],1)],1),t.allCheckShow?i("v-uni-view",{staticClass:"pad-bot-140"}):t._e()],1):i("v-uni-view",{staticClass:"mar-top-60 empty-box"},[i("v-uni-image",{staticClass:"collect-empty",attrs:{src:o("3a11")}}),i("v-uni-view",{staticClass:"tohome-box flex-items-plus"},[t._v("暂无收藏")])],1)],1):t._e(),1==t.collectionTypeFlag?i("v-uni-view",[t.storeCollect.length>0?i("v-uni-view",[t.allCheckShow?i("v-uni-view",{staticClass:"finishbox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.finishClick.apply(void 0,arguments)}}},[t._v("完成")]):i("v-uni-view",{staticClass:"flex-row-plus editicon-box flex-items fs28",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editClick.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"editicon",attrs:{src:o("c842")}}),i("v-uni-label",{staticClass:"mar-left-10"},[t._v("编辑")])],1),i("v-uni-view",{staticClass:"swipe-box"},t._l(t.storeCollect,(function(e,l){return i("u-swipe-action",{key:e.collectId,attrs:{show:e.show,index:l,options:t.options},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.storeClick.apply(void 0,arguments)},open:function(e){arguments[0]=e=t.$handleEvent(e),t.storeOpen.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"item u-border-bottom flex-items"},[i("v-uni-view",{staticClass:"flex-row-plus flex-sp-between flex-items-plus wid"},[i("v-uni-view",{staticClass:"flex-items-plus flex-row pad-topbot-10"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.allCheckShow,expression:"allCheckShow"}]},[1==e.selected?i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("86a4")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.storeItemSel(l,0)}}}):i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("df23")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.storeItemSel(l,1)}}})],1),i("v-uni-image",{staticClass:"head-img",attrs:{mode:"aspectFill",src:e.shopLogo}}),i("v-uni-view",{staticClass:"title-wrap mar-left-20"},[i("v-uni-text",{staticClass:"title u-line-2"},[t._v(t._s(e.shopName))]),i("v-uni-label",{staticClass:"font-color-999 fs24"},[t._v(t._s(e.person)+"人关注")])],1)],1),i("v-uni-view",{staticClass:"toStore flex-items-plus fs24",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toStoreClick(e.shopId)}}},[t._v("进入店铺")])],1)],1)],1)})),1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.allCheckShow,expression:"allCheckShow"}],staticClass:"allcheck-box flex-row-plus flex-sp-between flex-items"},[i("v-uni-view",{staticClass:"left"},[t.isAllStoreCheck?i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("86a4")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allStoreSel(0)}}}):i("v-uni-image",{staticClass:"cart-select-img",attrs:{src:o("df23")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.allStoreSel(1)}}}),i("v-uni-text",[t._v("全选")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"btn-delete",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shopDel.apply(void 0,arguments)}}},[t._v("删除")])],1)],1),t.allCheckShow?i("v-uni-view",{staticClass:"pad-bot-140"}):t._e()],1):i("v-uni-view",{staticClass:"mar-top-60 empty-box"},[i("v-uni-image",{staticClass:"collect-empty",attrs:{src:o("3a11")}}),i("v-uni-view",{staticClass:"tohome-box flex-items-plus"},[t._v("暂无收藏")])],1)],1):t._e()],1)},c=[]},"7bb1":function(t,e,o){"use strict";o.r(e);var i=o("4a2e"),l=o.n(i);for(var c in i)"default"!==c&&function(t){o.d(e,t,(function(){return i[t]}))}(c);e["default"]=l.a},"9a5c":function(t,e,o){"use strict";var i=o("ecf8"),l=o.n(i);l.a},d009:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 页面左右间距 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4f8f941d]{background-color:#f7f7f7}.collection-box .empty-box[data-v-4f8f941d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.collection-box .empty-box .tohome-box[data-v-4f8f941d]{color:#999;margin-top:%?50?%}.collection-box .empty-box .collect-empty[data-v-4f8f941d]{width:%?270?%;height:%?270?%}.collection-box .function-box[data-v-4f8f941d]{background-color:#f7f7f7}.collection-box .tabsbox[data-v-4f8f941d]{margin-top:%?4?%;background-color:#fff}.collection-box .editicon-box[data-v-4f8f941d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;position:relative;left:%?-30?%;padding:%?16?% 0}.collection-box .finishbox[data-v-4f8f941d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;position:relative;left:%?-30?%;padding:%?16?% 0}.collection-box .editicon[data-v-4f8f941d]{width:%?30?%;height:%?30?%}.collection-box .swipe-box .item[data-v-4f8f941d]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%}.collection-box .swipe-box .product-img[data-v-4f8f941d]{width:%?180?%;-webkit-box-flex:0;-webkit-flex:0 0 %?180?%;flex:0 0 %?180?%;height:%?180?%;border-radius:%?12?%}.collection-box .swipe-box .head-img[data-v-4f8f941d]{width:%?80?%;-webkit-box-flex:0;-webkit-flex:0 0 %?80?%;flex:0 0 %?80?%;height:%?80?%;border-radius:50%}.collection-box .swipe-box .title[data-v-4f8f941d]{text-align:left;font-size:%?28?%;color:#606266;margin-top:%?20?%}.collection-box .swipe-box .cart-select-img[data-v-4f8f941d]{width:%?98?%;height:%?98?%;padding:%?30?%;box-sizing:border-box}.collection-box .swipe-box .toStore[data-v-4f8f941d]{border:%?1?% #ff7800 solid;color:#ff7800;padding:%?0?% %?20?%;border-radius:%?5?%;height:%?52?%}.collection-box .allcheck-box[data-v-4f8f941d]{background-color:#fff;padding:%?10?% 0;width:100%;position:fixed;bottom:%?0?%}.collection-box .allcheck-box .left[data-v-4f8f941d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#666}.collection-box .allcheck-box .left .cart-select-img[data-v-4f8f941d]{width:%?98?%;height:%?98?%;padding:%?30?%;box-sizing:border-box}.collection-box .allcheck-box .right[data-v-4f8f941d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?% 0 0;box-sizing:border-box}.collection-box .allcheck-box .btn-delete[data-v-4f8f941d]{width:%?150?%;height:%?60?%;line-height:%?60?%;text-align:center;border:1px solid #ff7911;border-radius:%?40?%;font-size:%?28?%;color:#ff7911}body.?%PAGE?%[data-v-4f8f941d]{background-color:#f7f7f7}',""]),t.exports=e},ecf8:function(t,e,o){var i=o("d009");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var l=o("4f06").default;l("2d3fc05c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);