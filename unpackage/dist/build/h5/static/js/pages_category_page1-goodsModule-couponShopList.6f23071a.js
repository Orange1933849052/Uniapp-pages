(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_category_page1-goodsModule-couponShopList"],{4378:function(e,t,a){e.exports=a.p+"static/img/searchEmpty.d3d842bf.png"},"443b":function(e,t,a){"use strict";var o;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"container"},[e.list.length>0?o("v-uni-view",e._l(e.list,(function(t,i){return o("v-uni-view",{key:i,staticClass:"goodsDetails-box flex-display flex-column mar-left-30",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goodsDateils(t.shopId,t.productId,t.skuId)}}},[0==t.activityType?o("v-uni-view",{staticClass:"goodsDetails flex-items-plus flex-row mar-top-30"},[o("v-uni-image",{staticClass:"goodsImg",attrs:{src:t.image}}),o("v-uni-view",{staticClass:"mar-left-30"},[o("v-uni-view",{staticClass:"goodsName-box overflowNoDot"},[o("v-uni-label",{staticClass:"goodsName fs26"},[e._v(e._s(t.productName))])],1),o("v-uni-view",{staticClass:"priceBuyNum-box mar-top-20"},[o("v-uni-label",{staticClass:"fs24 font-color-FF7800"},[e._v("¥")]),o("v-uni-label",{staticClass:"fs36 font-color-FF7800 mar-left-10"},[e._v(e._s(t.price))]),null!=t.users?o("v-uni-label",{staticClass:"fs24 font-color-999 mar-left-10"},[e._v(e._s(t.users)+"人付款")]):o("v-uni-label",{staticClass:"fs24 font-color-999 mar-left-10"},[e._v("0人付款")])],1),o("v-uni-view",{staticClass:"flex-display flex-sp-between flex-row mar-top-10 flex-items"},[o("v-uni-label",{staticClass:"fs22 font-color-999"},[e._v(e._s(t.shopName))]),o("v-uni-image",{staticClass:"arrowImg",attrs:{src:a("b39d")}})],1)],1)],1):o("v-uni-view",{staticClass:"spikeList"},[o("v-uni-view",{staticClass:"listItem"},[o("v-uni-view",{staticClass:"itemBox"},[o("img",{attrs:{src:t.image}})]),o("v-uni-view",{staticClass:"itemInfo mar-top-30"},[o("p",[e._v(e._s(t.productName))]),null!=t.users?o("v-uni-view",{staticClass:"number"},[e._v(e._s(t.users)+"人付款"),0!=t.total?o("span",[e._v("，限量"+e._s(t.total)+"件")]):e._e()]):o("v-uni-view",{staticClass:"number"},[e._v("0人付款"),0!=t.total?o("span",[e._v("，限量"+e._s(t.total)+"件")]):e._e()]),o("v-uni-view",{staticClass:"flex-row-plus flex-item mar-top-30"},[o("v-uni-view",{staticClass:"discountsPriceLine font-color-999"},[e._v("¥"+e._s(t.originalPrice))]),o("v-uni-view",{staticClass:"mar-left-30 font-color-FF7800 flex-row-plus"},[1==t.activityType?o("v-uni-label",{staticClass:"fs30"},[e._v("拼团价")]):e._e(),2==t.activityType?o("v-uni-label",{staticClass:"fs30"},[e._v("秒杀价")]):e._e(),3==t.activityType?o("v-uni-label",{staticClass:"fs30"},[e._v("折扣价")]):e._e(),o("b",[e._v("￥")]),o("v-uni-label",{staticClass:"fs28"},[e._v(e._s(t.price))])],1)],1),o("v-uni-view",{staticClass:"flex-display flex-sp-between flex-row mar-top-10 flex-items"},[o("v-uni-label",{staticClass:"fs22 font-color-999"},[e._v(e._s(t.shopName))]),o("v-uni-image",{staticClass:"arrowImg",attrs:{src:a("b39d")}})],1)],1)],1)],1)],1)})),1):o("v-uni-view",{staticClass:"emptyCart-box flex-items-plus flex-column"},[o("v-uni-image",{staticClass:"emptyCart-img",attrs:{src:a("4378")}}),o("v-uni-label",{staticClass:"font-color-999 fs26 mar-top-30"},[e._v("无可用商品")])],1)],1)},s=[]},"556c":function(e,t,a){"use strict";a.r(t);var o=a("78e4"),i=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,(function(){return o[e]}))}(s);t["default"]=i.a},"78e4":function(e,t,a){"use strict";a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("9ae9"),i=a("ef67"),s={data:function(){return{page:1,pageSize:20,activityId:null,shopCouponId:null,list:[],loadingType:0}},onLoad:function(e){e.shopCouponId&&(this.activityId=e.activityId,this.shopCouponId=e.shopCouponId),this.searchList(1)},methods:{searchList:function(e){var t=this;wx.showLoading({title:"加载中..."}),1==e&&(this.list=[],this.page=1),this.shopCouponId&&o.request(i.getCouponProducts,{activityId:this.activityId,shopCouponId:this.shopCouponId,page:this.page,pageSize:this.pageSize},"GET").then((function(e){0==e.data.list.length&&(t.loadingType=1,t.page=t.page),uni.hideLoading(),t.list=t.list.concat(e.data.list)})).catch((function(e){uni.hideLoading()}))},onReachBottom:function(){1==this.loadingType?uni.stopPullDownRefresh():(this.page=this.page+1,this.searchList(0))},goodsDateils:function(e,t,a){uni.navigateTo({url:"goodsDetails?shopId="+e+"&productId="+t+"&skuId="+a})}}};t.default=s},"82e5":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 页面左右间距 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-input[data-v-b86b0aba]{padding-left:%?80?%}.container[data-v-b86b0aba]{height:100%}.container .emptyCart-box[data-v-b86b0aba]{margin-top:%?70?%}.container .emptyCart-box .emptyCart-img[data-v-b86b0aba]{width:%?270?%;height:%?270?%}.container .searchImg[data-v-b86b0aba]{width:%?36?%;height:%?36?%;position:absolute;left:%?60?%}.container .search-box[data-v-b86b0aba]{background-color:#f7f7f7;border-radius:%?33?%;width:%?530?%;height:%?66?%}.container .searchboxPlace[data-v-b86b0aba]{font-size:%?26?%;color:#a9a9a9;padding-right:%?30?%}.container .searchClose-icon[data-v-b86b0aba]{z-index:997;width:%?40?%;height:%?40?%;margin-left:%?-50?%}.container .promotion618[data-v-b86b0aba]{width:%?130?%;height:%?30?%}.container .goodsDetails-box[data-v-b86b0aba]{width:%?690?%}.container .goodsDetails-box .goodsDetails[data-v-b86b0aba]{border-bottom:%?1?% solid #ededed;padding-bottom:%?30?%}.container .goodsDetails-box .goodsDetails .goodsName-box[data-v-b86b0aba]{width:%?389?%;height:%?85?%}.container .goodsDetails-box .goodsDetails .goodsName-box .img618-cion[data-v-b86b0aba]{width:%?70?%;height:%?36?%}.container .goodsDetails-box .goodsDetails .goodsImg[data-v-b86b0aba]{width:%?260?%;height:%?260?%}.container .goodsDetails-box .goodsDetails .discounts-box[data-v-b86b0aba]{margin-left:%?-10?%;margin-top:%?20?%}.container .goodsDetails-box .goodsDetails .discounts-box .discounts-text[data-v-b86b0aba]{margin-left:%?10?%;color:#ff7800;background-color:#ffe4cc;padding:%?6?% %?12?%;border-radius:%?4?%}.container .goodsDetails-box .goodsDetails .arrowImg[data-v-b86b0aba]{width:%?20?%;height:%?20?%}.container .spikeList[data-v-b86b0aba]{padding-top:%?30?%;border-bottom:%?1?% solid #ededed}.container .spikeList .arrowImg[data-v-b86b0aba]{width:%?20?%;height:%?20?%}.container .spikeList .listItem[data-v-b86b0aba]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?1?% solid #eee;margin-bottom:%?30?%}.container .spikeList .listItem[data-v-b86b0aba]:last-child{border-bottom:none}.container .spikeList .listItem .itemBox[data-v-b86b0aba]{width:%?260?%;height:%?260?%;margin-right:%?30?%}.container .spikeList .listItem .itemBox img[data-v-b86b0aba]{width:100%;height:100%}.container .spikeList .listItem .itemInfo[data-v-b86b0aba]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.container .spikeList .listItem .itemInfo p[data-v-b86b0aba]{font-size:%?26?%;color:#333;line-height:%?40?%;margin-bottom:%?20?%;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.container .spikeList .listItem .itemInfo .number[data-v-b86b0aba]{color:#999;font-size:%?26?%}',""]),e.exports=t},"9ae9":function(e,t,a){a("d3b7");var o=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(o,i){var s={"Content-Type":"application/json"},n=uni.getStorageSync("storage_key"),r=n.token;r&&(s["Authorization"]=r),uni.request({url:e,data:t,method:a,header:s,success:function(e){if(200==e.statusCode){var t=e.data;"200"===t.code?o(e.data):"20004"===t.code||"20005"===t.code?(uni.removeStorageSync("storage_key"),uni.navigateTo({url:"/pages_category_page2/userModule/login.vue"})):uni.showToast({title:t.message,icon:"none"}),i(e)}else i(e)},fail:function(e){i(e)}})}))},i=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(o,i){var s={"Content-Type":"application/json",tenant:"MDAwMA=="};uni.request({url:e,data:t,method:a,header:s,success:function(e){"200"===e.data.code?o(e.data):i(e)},fail:function(e){i(e)}})}))};e.exports={request:o,request1:i}},b39d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAOVBMVEUAAACVlZWJiYmdnZ2bm5uZmZmYmJiZmZmZmZmampqZmZmYmJiZmZmYmJiampqZmZmZmZmZmZmZmZkzQDzFAAAAEnRSTlMADA0NIaqrsbK1tsLDxMTF2eG60GkTAAAAPklEQVQoz2NgwA9Y2RmxSwgIcWOXYRGksgzPgMtw4pLgwiHOz0wdcT4m7OK8JIpj9RpOLwvgCgo2DkYGIgEA28YELsReckcAAAAASUVORK5CYII="},b80d:function(e,t,a){"use strict";a.r(t);var o=a("443b"),i=a("556c");for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("ec52");var n,r=a("f0c5"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"b86b0aba",null,!1,o["a"],n);t["default"]=l.exports},de2b:function(e,t,a){var o=a("82e5");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("4f06").default;i("9529fd4c",o,!0,{sourceMap:!1,shadowMode:!1})},ec52:function(e,t,a){"use strict";var o=a("de2b"),i=a.n(o);i.a},ef67:function(e,t){var a="http://localhost1:9007",o="/api",i=2;e.exports={terminal:i,SettledMerchantPrefix:a+"/settled-merchant",shareLink:a,Verify:o+"/app/getCode",Login:o+"/app/login",WxLogin:o+"/app/wxLogin",GetSessionKey:o+"/app/getSessionKey",SetWxPhone:o+"/app/setWxPhone",UpdateWxPhone:o+"/app/updateWxPhone",WxAppLogin:o+"/app/wxAppLogin",FindCategoryListByDepth:o+"/classify/getFirstClassify",GetClaasifyProducts:o+"/classify/getClaasifyProducts",SearchHistory:o+"/app/getHistory",GgetSearchProducts:o+"/app/getSearchProducts",DeleteSearch:o+"/app/deleteSearch",Getindexdata:o+"/app/index",QueryProductDetail:o+"/product/getById",QueryProductSku:o+"/product/getProducts",getCouponProducts:o+"/coupon/getCouponProducts",QueryMemberAddres:o+"/receive/getAll",AddresAdd:o+"/receive/save",AddresDelete:o+"/receive/delete",AddresUpdate:o+"/receive/update",receiveGetInfo:o+"/receive/getById",Comment:o+"/order/addComment",AdditionalComment:o+"/order/addToComment",MyCommentList:o+"/comment/getAll",LikeOrUnLikeComment:o+"/comment/like",GetDistributor:o+"/distributor/getDistributor",FindCouponList:o+"/coupon/getCoupons",MemberAccountWithdraw:o+"/distributor/save",GetUser:o+"/user/getUser",GetStore:o+"/shop/getShopProducts",GetStoreShopClassify:o+"/shop/getShopClassify",GetShopBanner:o+"/shop/getShopBanner",getShopIndex:o+"/shop/getIndex",QueryBankcardList:o+"/bank/getAll",SaveBankcard:o+"/bank/save",UpdateBankcard:o+"/bank/update",DelMemberBankcard:o+"/bank/delete",GetByIdBankcard:o+"/bank/getById",FindOrderList:o+"/order/getAll",Settlement:o+"/order/getSettlement",PlaceOrder:o+"/order/submit",GetOrderDetail:o+"/order/getById",CancelOrder:o+"/order/cancel",DelOrder:o+"/order/delete",ShippingTrace:o+"/order/getDilevery",payOrder:o+"/order/pay",gotoPay:o+"/order/gotoPay",gotoAppPay:o+"/order/gotoAppPay",gotoH5Pay:o+"/order/gotoH5Pay",ConfirmReceive:o+"/order/confirm",Orderrefund:o+"/order/refund",ReasonEnums:o+"/after/getReasonSelect",ApplyReturnMoney:o+"/after/submit",ShoppingaddCart:o+"/cart/addCart",ShoppingCart:o+"/cart/getCart",UpdateNumberCart:o+"/cart/updateNumber",DeleteCart:o+"/cart/delete",SelectedCart:o+"/cart/selected",ReceiveCoupon:o+"/coupon/takeCoupon",FindSaleStoreList:o+"/distributor/getDistributorAll",QuerySalesMainInfo:o+"/distributor/getShopDistributor",FindSalesOrderPage:o+"/distributor/getReward",GetNotReward:o+"/distributor/getNotReward",FindSalesCustomerList:o+"/distributor/getBuyers",FindSubordinateSalesList:o+"/distributor/getDistributors",FindSalesPromConfig:o+"/distributor/getShopExtension",StoreProductList:o+"/distributor/getExtensionProduct",FindMySalesPage:o+"/distributor/getDistributorOrder",HasApply:o+"/distributor/check",BindSalesCustomer:o+"/distributor/bind",FindReturnList:o+"/after/getAll",CancelRefund:o+"/after/returnRefund",ReturnDetail:o+"/after/getById",CancelReturnGoods:o+"/after/returnGoods",ShippingCompany:o+"/order/getExpressSelect",SendReturnGoods:o+"/order/returnExpress",Apply:o+"/distributor/addDistributor",getClassify:o+"/canvas/getClassify",getProducts:o+"/canvas/getProducts",getCanvas:o+"/canvas/getCanvas",getShops:o+"/canvas/getShops",getCoupons:o+"/canvas/getCoupons",takeCoupon:o+"/coupon/takeCoupon",getShopCoupons:o+"/canvas/getShopCoupons",selectCanvasCustomList:o+"/canvas/selectCanvasCustomList",getSeckills:o+"/renovation/getSeckills",getGroupWorks:o+"/renovation/getGroupWorks",getDiscounts:o+"/renovation/getDiscounts",Query:o+"/dict/getByName",DeleteAllSearch:o+"/product/deleteAllSearch",getMessage:o+"/notice/getAll",getMessageDateils:o+"/notice/getById",getNotice:o+"/notice/getGongGaoAll",getProductCollect:o+"/collect/getAllProduct",getStoreCollect:o+"/collect/getAllShop",cancelCollect:o+"/collect/cancel",collect:o+"/collect/collect",deleteCollect:o+"/collect/delete",addAnswer:o+"/seckill/addAnswer",addProblem:o+"/seckill/addProblem",getSeckillList:o+"/seckill/getIndex",getProblems:o+"/seckill/getProblems",getProblemDetail:o+"/seckill/getProblemDetail",getGroupSettlement:o+"/work/getSettlement",getGroupBuyList:o+"/work/getIndex",getInviteSpell:o+"/work/getInvite",getDiscountList:o+"/discount/getIndex",getFootprintList:o+"/footprint/getAll",deleteFootprint:o+"/footprint/delete",getProblemList:o+"/seckill/getProblem",getAnswerList:o+"/seckill/getAnswer",deleteProblem:o+"/seckill/deleteProblem",deleteAnswer:o+"/seckill/deleteAnswer",getShare:o+"/work/getShare"}}}]);