(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_category_page1-distributionModule-invite"],{"0059":function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),s={name:"u-mask",props:{show:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},customStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},maskClickAble:{type:Boolean,default:!0}},data:function(){return{zoomStyle:{transform:""},scale:"scale(1.2, 1.2)"}},watch:{show:function(t){t&&this.zoom?this.zoomStyle.transform="scale(1, 1)":!t&&this.zoom&&(this.zoomStyle.transform=this.scale)}},computed:{maskStyle:function(){var t={backgroundColor:"rgba(0, 0, 0, 0.6)"};return this.show?t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.mask:t.zIndex=-1,t.transition="all ".concat(this.duration/1e3,"s ease-in-out"),Object.keys(this.customStyle).length&&(t=(0,a.default)((0,a.default)({},t),this.customStyle)),t}},methods:{click:function(){this.maskClickAble&&this.$emit("click")}}};e.default=s},"08a0":function(t,e,i){"use strict";i.r(e);var n=i("9ea5"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"1baf":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uMask:i("b30f").default,tkiQrcode:i("bf63").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-mask",{attrs:{show:t.show,"z-index":"10000"}},[n("v-uni-view",{staticClass:"warp"},[n("v-uni-view",{staticClass:"rect",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"guanbiBox"},[n("v-uni-image",{staticClass:"guanbi",attrs:{src:i("744b"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showcos.apply(void 0,arguments)}}})],1),n("v-uni-view",[n("v-uni-image",{staticStyle:{width:"100%",height:"44rpx"},attrs:{src:i("b556"),mode:""}})],1),n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-view",{staticClass:"user"},[n("v-uni-view",[n("v-uni-image",{staticStyle:{width:"90rpx",height:"90rpx","border-radius":"50%"},attrs:{src:t.listitem.headImage,mode:""}})],1),n("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[n("p",{staticStyle:{"margin-top":"5rpx","font-size":"28rpx"}},[t._v(t._s(t.listitem.name))]),n("p",{staticStyle:{"margin-top":"10rpx","font-size":"20rpx",color:"#9A9A9A"}},[t._v(t._s(t.listitem.extensionReason))])]),t.listitem.invitationCode?n("v-uni-view",{staticStyle:{color:"#FF7800","font-size":"24rpx",flex:"1","text-align":"right","line-height":"90rpx"}},[t._v("邀请码："+t._s(t.listitem.invitationCode))]):t._e()],1),n("v-uni-view",{staticClass:"flex-items-plus"},[n("v-uni-image",{staticStyle:{width:"450upx",height:"450upx"},attrs:{src:t.listitem.image,mode:""}})],1),n("v-uni-view",{staticStyle:{display:"flex","margin-top":"40upx"}},[n("v-uni-view",{staticStyle:{flex:"1","line-height":"40rpx"}},[n("p",{staticStyle:{color:"#343434","font-size":"24rpx"}},[t._v("点击二维码保存到本地长按识别小程序")]),n("p",{staticStyle:{color:"#666666","font-size":"22rpx"}},[t._v("来自「cereshop商城」小程序")])]),t.listitem.ifLogo?n("v-uni-view",{staticStyle:{"margin-left":"60rpx"}},[n("v-uni-view",{staticClass:"qrimg-i",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveQrcode.apply(void 0,arguments)}}},[n("tki-qrcode",{ref:"qrcode2",attrs:{cid:"qrcode2",val:t.erweima,size:t.size,onval:t.onval,loadMake:t.loadMake,usingComponents:!0}})],1)],1):t._e()],1)],1)],1)],1),n("v-uni-view",{staticClass:"fenx"},[n("v-uni-view",{staticClass:"shareBox"},[n("v-uni-button",{attrs:{"open-type":"share"}},[n("v-uni-view",{staticStyle:{flex:"1","text-align":"center",display:"flex"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.WXfenx.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{"margin-left":"120rpx"}},[n("v-uni-image",{attrs:{src:i("762c"),mode:""}})],1),n("v-uni-view",{staticStyle:{"margin-left":"10rpx","font-size":"28rpx",color:"#333333"}},[t._v("分享到微信")])],1)],1)],1),n("v-uni-view",{staticClass:"linkBtnBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.FZlianj.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"linkBox"},[n("v-uni-image",{attrs:{src:i("9694"),mode:""}})],1),n("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v("复制链接")])],1)],1)],1)],1)},s=[]},"2dde":function(t,e,i){"use strict";var n=i("5679"),a=i.n(n);a.a},"3d21":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-mask",class:{"u-mask-zoom":t.zoom,"u-mask-show":t.show},style:[t.maskStyle,t.zoomStyle],attrs:{"hover-stop-propagation":!0},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},s=[]},"42b1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".guanbiBox[data-v-6c2c5fbb]{padding:%?30?% %?20?%}.warp[data-v-6c2c5fbb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%}.qrimg-i[data-v-6c2c5fbb]{margin-right:10px}.guanbi[data-v-6c2c5fbb]{width:%?46?%;height:%?46?%;position:absolute;top:%?-100?%;left:50%;margin-left:%?-23?%}.rect[data-v-6c2c5fbb]{width:75%;height:65%;background-color:#fff;position:relative}.rect .user[data-v-6c2c5fbb]{display:-webkit-box;display:-webkit-flex;display:flex}.fenx[data-v-6c2c5fbb]{position:fixed;bottom:%?118?%;z-index:10001;background-color:#f7f7f7;width:100%;height:%?98?%;display:-webkit-box;display:-webkit-flex;display:flex;color:#343434}.fenx uni-view[data-v-6c2c5fbb]{line-height:%?98?%}.fenx uni-image[data-v-6c2c5fbb]{width:%?50?%;height:%?50?%;display:inline-block;margin-top:%?25?%}.linkBtnBox[data-v-6c2c5fbb]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex}.linkBtnBox .linkBox[data-v-6c2c5fbb]{margin-left:%?70?%}.fenx[data-v-6c2c5fbb]{display:none}",""]),t.exports=e},"4bf2":function(t,e,i){"use strict";i.r(e);var n=i("0059"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"4fb0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 页面左右间距 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-mask[data-v-5d9a6566]{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-mask-show[data-v-5d9a6566]{opacity:1}.u-mask-zoom[data-v-5d9a6566]{-webkit-transform:scale(1.2);transform:scale(1.2)}',""]),t.exports=e},5679:function(t,e,i){var n=i("4fb0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5195f915",n,!0,{sourceMap:!1,shadowMode:!1})},"744b":function(t,e,i){t.exports=i.p+"static/img/guanbi@2x.ac68aadc.png"},"762c":function(t,e,i){t.exports=i.p+"static/img/weixin@2x.89ac1198.png"},9694:function(t,e,i){t.exports=i.p+"static/img/lianjie.9ebcef97.png"},"9bd5":function(t,e,i){"use strict";var n=i("f698"),a=i.n(n);a.a},"9ea5":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("bf63")),s=i("9ae9"),o=i("ef67"),r={components:{tkiQrcode:a.default},data:function(){return{size:110,onval:!0,loadMake:!0,erweima:"",show:!0,item:{},listitem:{},FindSalesPromQuery:{type:2,tenantCode:""},shopId:0,distributorId:0}},onLoad:function(t){this.item=JSON.parse(t.tenantCode),this.shopId=t.shopId,this.distributorId=t.distributorId,this.erweima="/pages_category_page1/store/index?storeId="+this.shopId,this.getFindSalesPromConfig()},methods:{getFindSalesPromConfig:function(){var t=this;s.request(o.FindSalesPromConfig,{shopId:this.shopId,title:"邀请下级",distributorId:this.distributorId},"GET").then((function(e){t.listitem=e.data})).catch((function(t){}))},showcos:function(){uni.navigateBack({delta:1})},WXfenx:function(){},FZlianj:function(){uni.setClipboardData({data:o.shareLink+"/h5/#/pages_category_page1/store/index?storeId="+this.shopId,success:function(t){uni.showToast({title:"复制成功",icon:"none",duration:2e3})}})},onShareTimeline:function(t){var e={title:"",path:"/pages_category_page1/store/index?storeId="+this.shopId,imageUrl:"",success:function(t){t.errMsg},fail:function(t){t.errMsg,t.errMsg},complete:function(t){}};return e},onShareAppMessage:function(e){var i={title:"",desc:"",path:"/pages_category_page1/store/index?storeId="+this.shopId,imageUrl:"",success:function(e){"shareAppMessage:ok"==e.errMsg&&t.log(e)},fail:function(){("shareAppMessage:fail cancel"==res.errMsg||"shareAppMessage:fail"==res.errMsg)&&t.log(res)},complete:function(){}};if("button"==e.from){var n=e.target.dataset;t.log(n.id),i.path="/pages_category_page1/store/index?storeId="+this.shopId}return i},saveQrcode:function(){this.$refs.qrcode._saveCode()}}};e.default=r}).call(this,i("5a52")["default"])},b30f:function(t,e,i){"use strict";i.r(e);var n=i("3d21"),a=i("4bf2");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("2dde");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5d9a6566",null,!1,n["a"],o);e["default"]=c.exports},b556:function(t,e,i){t.exports=i.p+"static/img/banyuan.a5d95485.png"},f698:function(t,e,i){var n=i("42b1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3f187065",n,!0,{sourceMap:!1,shadowMode:!1})},fadd:function(t,e,i){"use strict";i.r(e);var n=i("1baf"),a=i("08a0");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("9bd5");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6c2c5fbb",null,!1,n["a"],o);e["default"]=c.exports}}]);