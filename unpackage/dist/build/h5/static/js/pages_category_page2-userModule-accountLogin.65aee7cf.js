(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_category_page2-userModule-accountLogin"],{"1a22":function(e,t,o){"use strict";var n=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o("ade3")),r=n(o("f0b9")),a=o("9ae9"),s=o("ef67"),d={data:function(){return{loginQuery:{account:"",code:"",salesId:""},VerifyQuery:{phone:""},inviteSpell:{},inviteSpelltype:!1}},mixins:[r.default],onLoad:function(e){1==e.inviteSpell&&(this.inviteSpelltype=!0,this.inviteSpell=uni.getStorageSync("inviteSpell")),this.loginQuery.salesId=uni.getStorageSync("salesId")},methods:{login:function(){var e=this,t=/^[1][3-9][0-9]{9}$/;""==this.loginQuery.account?uni.showToast({title:"请输入手机号！",duration:2e3,icon:"none"}):t.test(this.loginQuery.account)?(uni.showLoading({title:"正在登录...",duration:2e3}),a.request(s.Login,{type:2,phone:this.loginQuery.account,verificationCode:this.loginQuery.code},"POST").then((function(t){uni.hideLoading();var o=t.data;if(uni.setStorageSync("storage_key",o),uni.getStorageSync("salesId")){var n=uni.getStorageSync("salesId"),i=uni.getStorageSync("shopId");e.bindSalesCustomer(n,i),uni.removeStorageSync("salesId"),uni.removeStorageSync("shopId")}1==e.inviteSpelltype?setTimeout((function(){uni.reLaunch({url:"../../pages_category_page1/goodsModule/inviteSpell?collageId="+this.inviteSpell.collageId+"&orderId="+this.inviteSpell.orderId+"&type=0&productId="+this.inviteSpell.productId+"&skuId="+this.inviteSpell.skuId}),uni.removeStorageSync("inviteSpell")}),2e3):setTimeout((function(){uni.switchTab({url:"../../pages/tabbar/user/index"}),uni.removeStorageSync("salesId")}),2e3)})).catch((function(e){uni.hideLoading(),uni.showToast((0,i.default)({title:e.data.message,duration:2e3,icon:"none"},"duration",1e3))}))):uni.showToast({title:"请输入正确的手机号！",duration:2e3,icon:"none"})},codede:function(){this.getVerify()},getVerify:function(){var e=this,t=/^[1][3-9][0-9]{9}$/;""==this.loginQuery.account?uni.showToast({title:"请输入手机号！",duration:2e3,icon:"none"}):t.test(this.loginQuery.account)?(this.VerifyQuery.phone=this.loginQuery.account,a.request(s.Verify,{phone:this.VerifyQuery.phone},"GET").then((function(t){e.sendCode()})).catch((function(e){uni.showToast((0,i.default)({title:e.data.message,duration:2e3,icon:"none"},"duration",1e3))}))):uni.showToast({title:"请输入正确的手机号！",duration:2e3,icon:"none"})},bindSalesCustomer:function(e,t){e&&(uni.getStorageSync("storage_key")?a.request(s.BindSalesCustomer,{shopId:t,distributorId:e},"POST").then((function(e){uni.showToast({title:"绑定成功",icon:"none"})})).catch((function(e){uni.showToast({title:e.data.message,icon:"none"})})):(uni.setStorageSync("salesId",e),uni.navigateTo({url:"login"})))}}};t.default=d},"3ad5":function(e,t,o){"use strict";var n=o("a848"),i=o.n(n);i.a},"4b1c":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 页面左右间距 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container .login-logoBox[data-v-f20ef93c]{margin-top:%?154?%}.container .login-logoBox .login-logo[data-v-f20ef93c]{width:%?234?%;height:%?193?%}.container .iphoneNum-box[data-v-f20ef93c]{border:%?1?% solid #ddd;height:%?88?%;width:%?600?%;border-radius:%?44?%}.container .iphoneNum-box .iphoneNum-input[data-v-f20ef93c]{color:#999;font-size:%?28?%;font-weight:400}.container .passwordNum-box[data-v-f20ef93c]{border:%?1?% solid #ddd;height:%?88?%;width:%?600?%;border-radius:%?44?%}.container .passwordNum-box .passwordNum-input[data-v-f20ef93c]{color:#999;font-size:%?28?%;font-weight:400;width:%?346?%}.container .code-box[data-v-f20ef93c]{border:%?1?% solid #ddd;height:%?88?%;width:%?360?%;border-radius:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.container .code-box .code-lab[data-v-f20ef93c]{width:%?200?%}.container .code-box .codeNum-input[data-v-f20ef93c]{color:#999;font-size:%?28?%;font-weight:400;width:%?170?%}.container .getcode[data-v-f20ef93c]{background-color:#ff7800;height:%?88?%;width:%?220?%;border-radius:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?20?%;color:#fff}.container .registerBut[data-v-f20ef93c]{background-image:-webkit-linear-gradient(315deg,#ffa100 10%,#ff7911);background-image:linear-gradient(135deg,#ffa100 10%,#ff7911);color:#fff;height:%?88?%;width:%?600?%;text-align:center;line-height:%?88?%;border-radius:%?88?%;margin-top:%?17?%}',""]),e.exports=t},"56a8":function(e,t,o){"use strict";o.r(t);var n=o("1a22"),i=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"9abe":function(e,t,o){"use strict";o.r(t);var n=o("e418"),i=o("56a8");for(var r in i)"default"!==r&&function(e){o.d(t,e,(function(){return i[e]}))}(r);o("3ad5");var a,s=o("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"f20ef93c",null,!1,n["a"],a);t["default"]=d.exports},"9ae9":function(e,t,o){o("d3b7");var n=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(n,i){var r={"Content-Type":"application/json"},a=uni.getStorageSync("storage_key"),s=a.token;s&&(r["Authorization"]=s),uni.request({url:e,data:t,method:o,header:r,success:function(e){if(200==e.statusCode){var t=e.data;"200"===t.code?n(e.data):"20004"===t.code||"20005"===t.code?(uni.removeStorageSync("storage_key"),uni.navigateTo({url:"/pages_category_page2/userModule/login.vue"})):uni.showToast({title:t.message,icon:"none"}),i(e)}else i(e)},fail:function(e){i(e)}})}))},i=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(n,i){var r={"Content-Type":"application/json",tenant:"MDAwMA=="};uni.request({url:e,data:t,method:o,header:r,success:function(e){"200"===e.data.code?n(e.data):i(e)},fail:function(e){i(e)}})}))};e.exports={request:n,request1:i}},a848:function(e,t,o){var n=o("4b1c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("ceb4e9fc",n,!0,{sourceMap:!1,shadowMode:!1})},e418:function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container flex-items-plus flex-column"},[n("v-uni-view",{staticClass:"login-logoBox"},[n("v-uni-image",{staticClass:"login-logo",attrs:{src:o("f757")}})],1),n("v-uni-view",{staticClass:"iphoneNum-box flex-row-plus flex-items"},[n("v-uni-view",{staticStyle:{"margin-left":"39upx"}},[e._v("手机")]),n("v-uni-view",{staticStyle:{"margin-left":"50rpx"}},[n("v-uni-input",{attrs:{"placeholder-class":"iphoneNum-input",type:"number",placeholder:"请输入您的手机号"},model:{value:e.loginQuery.account,callback:function(t){e.$set(e.loginQuery,"account",t)},expression:"loginQuery.account"}})],1)],1),n("v-uni-view",{staticClass:"flex-row-plus mar-top-20"},[n("v-uni-view",{staticClass:"code-box"},[n("v-uni-view",[e._v("验证码")]),n("v-uni-view",[n("v-uni-input",{staticStyle:{width:"170upx","margin-left":"20upx"},attrs:{"placeholder-class":"codeNum-input",placeholder:"请输入验证码"},model:{value:e.loginQuery.code,callback:function(t){e.$set(e.loginQuery,"code",t)},expression:"loginQuery.code"}})],1)],1),n("v-uni-view",{staticClass:"getcode",class:!0===e.disabled?"on":"",attrs:{disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.codede.apply(void 0,arguments)}}},[e._v(e._s(e.text))])],1),n("v-uni-view",{staticClass:"mar-top-60"},[n("v-uni-view",{staticClass:"registerBut mar-top-100",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("登录")])],1)],1)},r=[]},ef67:function(e,t){var o="http://localhost1:9007",n="/api",i=2;e.exports={terminal:i,SettledMerchantPrefix:o+"/settled-merchant",shareLink:o,Verify:n+"/app/getCode",Login:n+"/app/login",WxLogin:n+"/app/wxLogin",GetSessionKey:n+"/app/getSessionKey",SetWxPhone:n+"/app/setWxPhone",UpdateWxPhone:n+"/app/updateWxPhone",WxAppLogin:n+"/app/wxAppLogin",FindCategoryListByDepth:n+"/classify/getFirstClassify",GetClaasifyProducts:n+"/classify/getClaasifyProducts",SearchHistory:n+"/app/getHistory",GgetSearchProducts:n+"/app/getSearchProducts",DeleteSearch:n+"/app/deleteSearch",Getindexdata:n+"/app/index",QueryProductDetail:n+"/product/getById",QueryProductSku:n+"/product/getProducts",getCouponProducts:n+"/coupon/getCouponProducts",QueryMemberAddres:n+"/receive/getAll",AddresAdd:n+"/receive/save",AddresDelete:n+"/receive/delete",AddresUpdate:n+"/receive/update",receiveGetInfo:n+"/receive/getById",Comment:n+"/order/addComment",AdditionalComment:n+"/order/addToComment",MyCommentList:n+"/comment/getAll",LikeOrUnLikeComment:n+"/comment/like",GetDistributor:n+"/distributor/getDistributor",FindCouponList:n+"/coupon/getCoupons",MemberAccountWithdraw:n+"/distributor/save",GetUser:n+"/user/getUser",GetStore:n+"/shop/getShopProducts",GetStoreShopClassify:n+"/shop/getShopClassify",GetShopBanner:n+"/shop/getShopBanner",getShopIndex:n+"/shop/getIndex",QueryBankcardList:n+"/bank/getAll",SaveBankcard:n+"/bank/save",UpdateBankcard:n+"/bank/update",DelMemberBankcard:n+"/bank/delete",GetByIdBankcard:n+"/bank/getById",FindOrderList:n+"/order/getAll",Settlement:n+"/order/getSettlement",PlaceOrder:n+"/order/submit",GetOrderDetail:n+"/order/getById",CancelOrder:n+"/order/cancel",DelOrder:n+"/order/delete",ShippingTrace:n+"/order/getDilevery",payOrder:n+"/order/pay",gotoPay:n+"/order/gotoPay",gotoAppPay:n+"/order/gotoAppPay",gotoH5Pay:n+"/order/gotoH5Pay",ConfirmReceive:n+"/order/confirm",Orderrefund:n+"/order/refund",ReasonEnums:n+"/after/getReasonSelect",ApplyReturnMoney:n+"/after/submit",ShoppingaddCart:n+"/cart/addCart",ShoppingCart:n+"/cart/getCart",UpdateNumberCart:n+"/cart/updateNumber",DeleteCart:n+"/cart/delete",SelectedCart:n+"/cart/selected",ReceiveCoupon:n+"/coupon/takeCoupon",FindSaleStoreList:n+"/distributor/getDistributorAll",QuerySalesMainInfo:n+"/distributor/getShopDistributor",FindSalesOrderPage:n+"/distributor/getReward",GetNotReward:n+"/distributor/getNotReward",FindSalesCustomerList:n+"/distributor/getBuyers",FindSubordinateSalesList:n+"/distributor/getDistributors",FindSalesPromConfig:n+"/distributor/getShopExtension",StoreProductList:n+"/distributor/getExtensionProduct",FindMySalesPage:n+"/distributor/getDistributorOrder",HasApply:n+"/distributor/check",BindSalesCustomer:n+"/distributor/bind",FindReturnList:n+"/after/getAll",CancelRefund:n+"/after/returnRefund",ReturnDetail:n+"/after/getById",CancelReturnGoods:n+"/after/returnGoods",ShippingCompany:n+"/order/getExpressSelect",SendReturnGoods:n+"/order/returnExpress",Apply:n+"/distributor/addDistributor",getClassify:n+"/canvas/getClassify",getProducts:n+"/canvas/getProducts",getCanvas:n+"/canvas/getCanvas",getShops:n+"/canvas/getShops",getCoupons:n+"/canvas/getCoupons",takeCoupon:n+"/coupon/takeCoupon",getShopCoupons:n+"/canvas/getShopCoupons",selectCanvasCustomList:n+"/canvas/selectCanvasCustomList",getSeckills:n+"/renovation/getSeckills",getGroupWorks:n+"/renovation/getGroupWorks",getDiscounts:n+"/renovation/getDiscounts",Query:n+"/dict/getByName",DeleteAllSearch:n+"/product/deleteAllSearch",getMessage:n+"/notice/getAll",getMessageDateils:n+"/notice/getById",getNotice:n+"/notice/getGongGaoAll",getProductCollect:n+"/collect/getAllProduct",getStoreCollect:n+"/collect/getAllShop",cancelCollect:n+"/collect/cancel",collect:n+"/collect/collect",deleteCollect:n+"/collect/delete",addAnswer:n+"/seckill/addAnswer",addProblem:n+"/seckill/addProblem",getSeckillList:n+"/seckill/getIndex",getProblems:n+"/seckill/getProblems",getProblemDetail:n+"/seckill/getProblemDetail",getGroupSettlement:n+"/work/getSettlement",getGroupBuyList:n+"/work/getIndex",getInviteSpell:n+"/work/getInvite",getDiscountList:n+"/discount/getIndex",getFootprintList:n+"/footprint/getAll",deleteFootprint:n+"/footprint/delete",getProblemList:n+"/seckill/getProblem",getAnswerList:n+"/seckill/getAnswer",deleteProblem:n+"/seckill/deleteProblem",deleteAnswer:n+"/seckill/deleteAnswer",getShare:n+"/work/getShare"}},f0b9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var e=this;if(!this.disabled){this.disabled=!0;var t=60;this.text="剩余 "+t+"s";var o=setInterval((function(){t-=1,t<0&&clearInterval(o),e.text="剩余 "+t+"s",e.text<"剩余 0s"&&(e.disabled=!1,e.text="重新获取")}),1e3)}}}};t.default=n},f757:function(e,t,o){e.exports=o.p+"static/img/login-logo.e8b2a0c1.png"}}]);