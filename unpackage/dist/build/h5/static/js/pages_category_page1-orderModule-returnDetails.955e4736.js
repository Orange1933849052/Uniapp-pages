(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_category_page1-orderModule-returnDetails"],{"10c4":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{},[a("v-uni-view",{staticClass:"order-details-status"},[-1==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("无退货")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("251b")}})],1):t._e(),1==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("退货审核中")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("251b")}})],1):t._e(),10==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("审核通过")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("a4e7")}})],1):t._e(),6==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("审核不通过")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("a4e7")}})],1):t._e(),3==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("退货中")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("d0c6")}})],1):t._e(),8==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("退货完成，拒绝退款")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("d0c6")}})],1):t._e(),4==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("已退款")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("a4e7")}})],1):t._e(),2==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("退款中")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("a4e7")}})],1):t._e(),5==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("退款失败")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("251b")}})],1):t._e(),9==t.status?a("v-uni-view",{staticClass:"status-title-box"},[a("v-uni-view",{staticClass:"l"},[a("v-uni-text",{staticClass:"status"},[t._v("退货关闭")])],1),a("v-uni-image",{staticClass:"r",attrs:{src:i("251b")}})],1):t._e()],1),1==t.status?a("v-uni-view",{staticClass:"order-details-info-box mt20"},[a("v-uni-view",{staticClass:"order-details-price"},[a("v-uni-text",[t._v("退款总金额")]),a("v-uni-text",{staticClass:"price-box"},[a("v-uni-text",{staticClass:"fuhao"},[t._v("￥")]),t._v(t._s(t.itemlist.price))],1)],1),a("v-uni-view",{staticClass:"address-box"},[a("v-uni-view",[t._v("商家已同意退货申请，请尽早发货。")]),a("v-uni-view",{staticClass:"address-info"},[a("v-uni-image",{staticClass:"address-img",attrs:{src:i("d7af")}}),a("v-uni-view",{staticClass:"address-info-r"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-text",[a("v-uni-text",{staticClass:"title"},[t._v("收货人")]),t._v("：")],1),a("v-uni-text",{staticClass:"r"},[a("v-uni-text",[t._v(t._s(t.itemlist.returnPerson))]),a("v-uni-text",{staticClass:"ml30"},[t._v(t._s(t.itemlist.returnPhone))])],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-text",[a("v-uni-text",{staticClass:"title"},[t._v("地址")]),t._v("：")],1),a("v-uni-text",{staticClass:"r"},[t._v(t._s(t.itemlist.returnAdress))])],1)],1)],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"order-details-info-box mt20"},[a("v-uni-view",{staticClass:"address-box return-explain-box"},[a("v-uni-view",[t._v("退货说明")]),a("v-uni-view",{staticClass:"address-info-r mt20 mar-top-20"},[a("v-uni-view",{staticClass:"item fs24"},[a("v-uni-text",{staticClass:"circle"}),a("v-uni-text",{},[t._v("未与商家协商一致，请勿使用到付或平邮，以免商家拒签")])],1),a("v-uni-view",{staticClass:"item fs24"},[a("v-uni-text",{staticClass:"circle"}),a("v-uni-text",{},[t._v("交易栋钱款还在平台中间账户，确保您的资金安全")])],1),a("v-uni-view",{staticClass:"item fs24"},[a("v-uni-text",{staticClass:"circle"}),a("v-uni-text",{},[t._v("填写物流写真实物流信息，逾期未填写退货申请将被取消")])],1)],1),a("v-uni-view",{staticClass:"return-explain-btn"},[6==t.status||10==t.status?a("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelRefundTap.apply(void 0,arguments)}}},[t._v("撤销申请")]):t._e(),10==t.status?a("v-uni-text",{staticClass:"btn on",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAddLogistics.apply(void 0,arguments)}}},[t._v("填写物流")]):t._e()],1)],1)],1),6==t.status?a("v-uni-view",{staticClass:"order-details-info-box mt20"},[a("v-uni-view",{staticClass:"order-details-price return-explain-box"},[a("v-uni-text",[t._v("已原路退回金额")]),a("v-uni-text",{staticClass:"price-box"},[a("v-uni-text",{staticClass:"fuhao"},[t._v("￥")]),t._v(t._s(t.itemlist.price))],1)],1)],1):t._e(),9==t.status?a("v-uni-view",{staticClass:"order-details-info-box mt20"},[a("v-uni-view",{staticClass:"address-box return-explain-box"},[a("v-uni-view",[t._v("因您撤销退货申请，退货退款已关闭")])],1)],1):t._e(),a("v-uni-view",{staticClass:"order-list-box"},[a("v-uni-view",{staticClass:"title"},[t._v("退货信息")]),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"order-info-box"},[t._l(t.itemlist.skus,(function(e){return a("v-uni-view",{staticClass:"order-info"},[a("v-uni-view",{staticClass:"order-info-item"},[a("v-uni-image",{staticClass:"product-img",attrs:{src:e.image}}),a("v-uni-view",{staticClass:"info-box"},[a("v-uni-text",{staticClass:"product-name"},[t._v(t._s(e.productName))]),a("v-uni-view",{staticClass:"product-sku mt20"},[t._v(t._s(e.value))])],1)],1)],1)})),a("v-uni-view",{staticClass:"delivery-way-box"},[a("v-uni-view",{staticClass:"item"}),a("v-uni-view",{staticClass:"item"},[a("v-uni-text",{staticClass:"way"},[t._v("退款金额：￥"+t._s(t.itemlist.price))])],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-text",{staticClass:"way"},[t._v("退款编号："+t._s(t.itemlist.afterFormid))])],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-text",{staticClass:"way"},[t._v("申请时间："+t._s(t.itemlist.createTime))])],1)],1)],2)],1)],1),a("v-uni-view",{staticClass:"order-list-box"},[a("v-uni-view",{staticClass:"title"},[t._v("协商历史")]),t._l(t.itemlist.afterHistory,(function(e){return t.itemlist.afterHistory.length>0?a("v-uni-view",{staticStyle:{margin:"30rpx",padding:"30rpx","border-left":"1px solid #CCCCCC"}},[a("v-uni-text",{staticStyle:{color:"#999999"}},[t._v(t._s(e.title))]),a("br"),a("br"),a("v-uni-text",{staticStyle:{color:"#999999"}},[t._v(t._s(e.time))])],1):t._e()}))],2)],1)],1)},o=[]},"251b":function(t,e,i){t.exports=i.p+"static/img/afterSale-details-time.40276367.png"},"54a2":function(t,e,i){"use strict";var a=i("a0b2"),s=i.n(a);s.a},"5f967":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("9ae9"),s=i("ef67"),o={data:function(){return{item:{},itemlist:{},status:0,ReturnDetailData:[]}},onLoad:function(t){this.item=JSON.parse(t.item),this.getReturnDetail()},methods:{getReturnDetail:function(){var t=this;a.request(s.ReturnDetail,{afterId:this.item.afterId,orderId:this.item.orderId},"GET").then((function(e){t.status=e.data.afterState,t.itemlist=e.data})).catch((function(t){}))},cancelRefundTap:function(){uni.showLoading({title:"正在撤销退货..."}),a.request(s.CancelReturnGoods,{afterId:this.item.afterId,orderId:this.item.orderId},"PUT").then((function(t){uni.hideLoading(),uni.showToast({title:"撤销成功"}),uni.switchTab({url:"../../pages/tabbar/user/index"})})).catch((function(t){uni.hideLoading()}))},goAddLogistics:function(){uni.setStorageSync("itemLogistics",this.item),uni.navigateTo({url:"addLogistics"})}}};e.default=o},"9ae9":function(t,e,i){i("d3b7");var a=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(a,s){var o={"Content-Type":"application/json"},n=uni.getStorageSync("storage_key"),r=n.token;r&&(o["Authorization"]=r),uni.request({url:t,data:e,method:i,header:o,success:function(t){if(200==t.statusCode){var e=t.data;"200"===e.code?a(t.data):"20004"===e.code||"20005"===e.code?(uni.removeStorageSync("storage_key"),uni.navigateTo({url:"/pages_category_page2/userModule/login.vue"})):uni.showToast({title:e.message,icon:"none"}),s(t)}else s(t)},fail:function(t){s(t)}})}))},s=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(a,s){var o={"Content-Type":"application/json",tenant:"MDAwMA=="};uni.request({url:t,data:e,method:i,header:o,success:function(t){"200"===t.data.code?a(t.data):s(t)},fail:function(t){s(t)}})}))};t.exports={request:a,request1:s}},a0b2:function(t,e,i){var a=i("bee0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("3f740d26",a,!0,{sourceMap:!1,shadowMode:!1})},a4e7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAK90lEQVR42u3deWxU1xXHcSeoVVJFTRdFaqIoaaqqUct/UZBaKX/kv7RpNjWlyxMQY8xarIBMGtqExFCgYFCAEkghKTSEYDIxO5jFLDZewGZsY/B4xXg3BrOYAPa8mTfz6xm7/YMmAb83njn3vXuu9JFlRTNz73lfzwy2YqekyJIlS5YsWbJkyZKlwQLwGFlKqskA+FbssWvJCvJjuTJ6xJdB+qHeMkkWuUeuknfjmwtEobbIGrlS3ozvKUSjEQLlAc/JFfNagJHIVlfEN6RQrpjXAoxG+ghcwqJnwQflqnnn5fcBF8U3BPiZXDlPBUhPKm4Cc7RcuZG5+N8Ews/Qe7DZiFhrabh7YFnF9Lk/PuH59t4DWtcRe2Vzh4idl2Cax4y4ZmlZJXRd8ulxN9FcF9Hnv6fHf9zl4YXGIBKKHaiPIAEW2HsPGPYlaB8jzwoX2fviCk1L0F4C5B2K8WE3PeM9Qhc7NwkXaq7NL4if022i7gjQesHW2SzLSPCeTLKcru13VH/We5o22p2kC7XU/rdiwnPVD9Baa/9coenJ2VuoLfZ2Ss34THM0rFAfQZJscvb9wNAsum1/Evc5XGGEzcX0LHOv7TOFzSVJ3KcJy3xVtZfd++jC1iT5gp13vt/+x+iiZdOez9L9BBmjs0gT+ZD+1ev42y50+4Ik79tEOPysQj9lCM6hrwokHYJPyncZ8H2aRYhh/l302N9T49sslnmBJcBwaIX8iDGYyTL7QcH1/AOwgi8hHASTG8CNhzR+9vsWzaCbcf7h2NsZ7gDXMw6A/uFtfqxtgOHgctbZDxpYxDyEgQABq9DAZO3is8yX6exR9tmHBxp53/+FBiIEzCySpk98wefpvKYCcx8yMPAEzyCCwZ+AvqWmiCjM/mz6orjfw+/5RiHcP4fOGlJo7vQdpP6xXC+/zyo1iCHtdJEy6avyh94Jr++79EyTSmerVnDesZfht5h++nHrZYRuQWG9JED8LlVJ2klU8TmvYQrwpkERQuiu/1PGAG9CaE8CFLoGGPthhNDbwA2uAK9TgF9AaE4CFHoGOEABDlyH0J4EKLQNsA9Ce1wBXjXQfw1CdxKg0DfAqxDaYwrwJgV4izYg9MYb4BUIzfVf5gqwlwK8DKE51gBv0gaE7jgD7IXQHmeAlyB0d5ExwBu0AaE5tgB7KMCLENrjDLAHQntMAV6nAL+gDQi98QZ4AUJzN7q5Auw2CIT2JEChbYD0izKF7rgC7DDQ1wmhOwlQaBngVQrwWgeE5vo6OANsh9BcXztXgK0UIP3xHKE31gCv0gaE5lgDbIXQHmOAV1ogNHe5RQIUWgbYTAGeh9AcW4C9FODlZggWFikn20gJMRn3whngOYik245r5x+/7VpcaHoIV86t49lPE1eAjQZ6myCSagX9wZp7vvaaXGp8m2FPEqAu8d31mlCcuNRUqlGAjRBJMey/jUwvieOTvDfGAC81QCRa4x1fdr90XS40jU7q/i7WcwVYRwHWQyTUSjvxDQUYGJ3UPbIF2EMBXhzcgEiEnvpVduMbvC4XG8Ynea+cAdZBJEBP3T+cxDcUYF1pkvfLGGBPLcRIiye+wJzk7zfAFWCAAgxAjKjVzuOrnU63jzLsmTPAGogRcrHmfefxnaX4aqJMe2cM8AJtQIyENY7j6w5MpdtH2fbezRbgGQrwLETc1jqP78wUun2Udf9sAXZTgN1nIOIRV3yTSVSBc3AGWA3h2AeO4+uqnkS3jypyDq4Aqwx0nYZwoPv0P+OKr+t0VJ3zSID/EyGV6KzKo4/+/36uXnydp9c5j+90mlrxcQbYQQF2VkENlVvRWf3obfujz2mPW9TZI+mqWh9HfBPpPiJKnWfoTJwBVoJdR9XSO1+4qneV2GdXRRzxVVB8lRElzvGlc1VyBeg30FEBZvQu2DdqGHt9h3ef/o8cx9dekUr3YSkw66/BGqAfrDr904a/34p3mfbpPL5O/2t0e4t9znfGGeApsGovH2Nvz6eykrzHfzmP79QEur3FPuO7KmcMsD0WAaeyp23vu80/P0n7cx5fR/k4ur3FP9/hYAuwjAIsB6uOsnRn76vKFyR2b2Wx+O51Hl+5xT7b4WMKsJUCbCsDM7/jZ5nWsoUJ2VNr+QbH8Q3N1FJgrsPXXsYZ4EkoYH4cZ1g4ontpPblhOP8q/+pn5bI/0n1Yisx0+NpPcAVYaqD1BNRQ+objc7SdXDwie2g7sdFxfC0n/0D3YakzT1s4AyyFQuKIsPTvcT12W4nz+NpO/I7uw1JslnYwBthCG1BJa0mm4/O0nFji8HH/7Ti+8xRfC8Wn2hzt4QywBOopnh3HmbJtPtbHzuMrHUv3Yak5Q1szYAqwudjA+WIoqaV4luNznS/OHt7jlGxyHl/Jb+k+wsrOz96sOQMsgqKiaCl63XmERcvvfP/FnziP7zjFVxRWeHb2tBRxBVhooPk4FBbFueMZjs93jiL86vt1Hl/z8VdJSPG52cQaYCEURxEWOI+wueC9/7u/zfHFV2i6YGZ2MQZ4rgAuEEVT4Z8cn7OpcMXg/TQVfOo8vsLf0H2YLpmXPTQXCXA4ETYXTHce4bFxjuM7d+wVz8bHGmDjUYMuDFwkisZjU5M6o1h8TRSfu+ZkE2uAR+Ey9J7wyOSkzKfp6EvEdOGM7OIM8AhciN4THklPbHxHXiSmS+djF1eA+QYaD8OlKMLDkxIzl8MvENPFs7GJNcB8uBhFmJ82ojNpOPQ83a/p8rnYxRhgwyG4XITOMXHE4ms4ZHpgJvbUH+QK8AAFeBAeYKHxUGp88R38FTE9Mg972AKsowDrBzfgBRYaDkxwNIf6A7+k2wc9NAu7OAM8AA+JRTjefnwHgh6bg12MAdbth8dYqN8/bnjn3/8cGfDgDGzK4wpwHwWYBw+yYme7e3x5/R49v12MAdbug0dFENhHv0XBd/9tZ/b7v4HavbPovwc9fHZ7Avs4A9wLj+slOajdk00fPyFdGpzZnsAepgADewwCoT0JUOgaYM1uCO1xBbiTAtwFoTuuAM9QgGd3QmiuZidngDsgNFezgyvAbQaqcyG0xxRglc/AaR+E5qp9XAHmGKjMgdAeU4D+zQYq6P/TFnqr3MwV4CaDQGiPKcCyjQbK6fcyCt1xBfiRgdgvgxea28AUYOk6Ayfoz58JzX3IGGAp/dlbobkPuAJca6BkDYTmit9nCrB4tYGi1RDaYwqwcJWB4yshNFe0kivA9wzQLxAV2mMK8OgyA8eWQWiuYBlXgEsMHF0KobtspgDzFxk4vBhCc0cWMwaYvxBCd3/jCnCBgUMLIDR3cAFTgAeyDBzMgtAeV4DzDOyfB6G5vHlMAe77q4G8tyB09zZjgPv+AqE9pgD3vvlrAqG9jTwB7n7zGex5A0Jzu/+8gukZcPaPsDsTQnO7MjN5AvSNHYVds/sJhMZ2zn4xhWth5+snCYTGds18hC/A7RlLsCMDQlcza1M4F7bNGIPtMyE0tW1mVgr3Qu6MKgoRQjthbMt4VIEAp7+C3GkQ2lmVosrC51N24fOpEJrIndqAzRnfVidA35QH4ZtcSyA87xJyJ49OUW3Bl/oDfJZeQSA8amt6HflpiqoLG1Pvw2eTlhKTQHgGXc+05fDNeCDFDQu+9CewNXUFtk68QiBcqxE5aVn4ZMrDKW5cgz+u2zLhFxTjXOS8tgU5qSfpYwd9vEoglHCddNN1OYuciXlkFbZMTIcv7ckUWbJkyZIlS5YsWbJGeP0HjhsPG/46SiAAAAAASUVORK5CYII="},bee0:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-1ad23241]{background:#f7f7f7}.order-details-status[data-v-1ad23241]{width:%?750?%;height:%?180?%;background:#ff7911}.status-title-box[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?40?% %?30?% 0;box-sizing:border-box}.status-title-box2[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?40?% %?30?% 0;box-sizing:border-box}.status-title-box .l[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.status-title-box .l .status[data-v-1ad23241], .status-title-box2 .status[data-v-1ad23241]{font-size:%?30?%;color:#fff}.status-title-box .l .label[data-v-1ad23241], .status-title-box2 .label[data-v-1ad23241]{font-size:%?24?%;color:#fff;margin-top:%?14?%}.status-title-box .r[data-v-1ad23241]{width:%?80?%;height:%?80?%}.order-details-info-box[data-v-1ad23241]{padding:0 %?30?%;box-sizing:border-box;background:#fff}.order-details-info-box.mt20[data-v-1ad23241]{margin-top:%?20?%}.order-details-price[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?100?%;border-bottom:1px solid #e5e5e5;font-size:%?30?%;color:#333}.order-details-price .price-box[data-v-1ad23241]{font-size:%?36?%;color:#ff7911}.order-details-price .fuhao[data-v-1ad23241]{font-size:%?24?%}.address-box[data-v-1ad23241]{background:#fff;padding:%?30?% 0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?28?%;color:#333;border-bottom:1px solid #e5e5e5}.address-info[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}.address-box .address-img[data-v-1ad23241]{width:%?45?%;height:%?45?%;margin-right:%?40?%}.address-box .address-info-r[data-v-1ad23241]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?28?%;color:#999}.ml30[data-v-1ad23241]{margin-left:%?30?%}.address-box .address-info-r .item[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.address-box .address-info-r .title[data-v-1ad23241]{display:inline-block;width:%?100?%;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify}.address-box .address-info-r .item .r[data-v-1ad23241]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?40?%}.return-explain-box[data-v-1ad23241]{border-bottom:none}.return-explain-box .address-info-r .item[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?40?%}.address-info-r .item .circle[data-v-1ad23241]{width:%?8?%;height:%?8?%;border-radius:50%;background:#bbb;margin-right:%?10?%}.return-explain-btn[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;margin-top:%?20?%}.return-explain-btn .btn[data-v-1ad23241]{width:%?130?%;height:%?56?%;background:#fff;border:1px solid #bbb;border-radius:%?4?%;text-align:center;line-height:%?56?%;margin-left:%?20?%;color:#333;font-size:%?26?%}.return-explain-btn .btn.on[data-v-1ad23241]{color:#ff7911;border:1px solid #ff7911}.order-list-box[data-v-1ad23241]{margin-top:%?20?%}.order-list-box .title[data-v-1ad23241]{padding:%?30?%;box-sizing:border-box;font-size:%?30?%;color:#333;background:#fff}.order-list-box .item[data-v-1ad23241]{margin-bottom:%?20?%;background:#fff;border-radius:%?10?%}.order-info-box[data-v-1ad23241]{padding:0 %?30?%;box-sizing:border-box}.order-info[data-v-1ad23241]{border-bottom:1px solid #eee}.order-info-item[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?20?% 0}.product-img[data-v-1ad23241]{width:%?180?%;height:%?180?%;border-radius:%?10?%;margin-right:%?30?%}.info-box[data-v-1ad23241]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\r\n  /* justify-content: space-between; */}.product-name[data-v-1ad23241]{font-size:%?26?%;color:#333;height:%?68?%;line-height:%?34?%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:2}.price-sku-box[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.product-sku[data-v-1ad23241]{font-size:%?24?%;color:#999}.product-price[data-v-1ad23241]{font-size:%?28?%;color:#333;font-weight:400}.product-price .fuhao[data-v-1ad23241]{font-size:%?28?%}.product-num[data-v-1ad23241]{font-size:%?28?%;color:#999}.delivery-way-box[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?30?% 0 %?10?%}.delivery-way-box .item[data-v-1ad23241]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#333}.delivery-way-box .item .way[data-v-1ad23241]{color:#999}body.?%PAGE?%[data-v-1ad23241]{background:#f7f7f7}",""]),t.exports=e},c255:function(t,e,i){"use strict";i.r(e);var a=i("5f967"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=s.a},d0c6:function(t,e){t.exports="data:image/png;base64,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"},d7af:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAB0ElEQVQ4T31SO4hTQRQ9d2bT+EmznfgtbcRH7rzEuGgRtLFTjJbiZztBtBFs7URB2Wp1rZZFRWwsXUjjEt4vhYplCkVtIogK4kvyrkx480ji06nmnjnnfs4dwtyJouioiFxRSjGA7SLygYhejkaj1Uaj8X2aTi7odDoL1Wp1RUSWART4FPmLiJw1xmw5rCDFcfwIwKX5TmYqEf3MsuyIMeadxSfiMAxbSqlXeSwisqq1fqC1HgyHw+MA7gDYlyfaYualQpwkyXMROWMBEVkxxlydrtjtdvdXKpU3AHbm+CFmfjupHMfxJwC77D3Lsr2+73+cbz9JkjURuZhzln3ff+jEPwDssA/9fn+h3W6PS8S3ReRWjt9g5ntO/B7AQfugtV7yPK9w1CWJomiTiFqTWYnO1Wq1Z058F8D1nNjTWrc8z/vmhGEYXlBKPc4N/Q1gNzMPnNt7lFK2+qR1AJ9FZB3AgIiOATg1tfv7zHytcNtekiQ5LSJPAFT+s+vXaZqebDabv2bENuj1eq3xePyUiBZLEmykaXrZCf8SWyAIggNa6xcADucJRgBuMrP1ZeaU/WG7921EtJZl2QkA540xm2WjlIodMQiCxXq9/vVfHvwBc4myEJvNIuMAAAAASUVORK5CYII="},ef67:function(t,e){var i="http://localhost1:9007",a="/api",s=2;t.exports={terminal:s,SettledMerchantPrefix:i+"/settled-merchant",shareLink:i,Verify:a+"/app/getCode",Login:a+"/app/login",WxLogin:a+"/app/wxLogin",GetSessionKey:a+"/app/getSessionKey",SetWxPhone:a+"/app/setWxPhone",UpdateWxPhone:a+"/app/updateWxPhone",WxAppLogin:a+"/app/wxAppLogin",FindCategoryListByDepth:a+"/classify/getFirstClassify",GetClaasifyProducts:a+"/classify/getClaasifyProducts",SearchHistory:a+"/app/getHistory",GgetSearchProducts:a+"/app/getSearchProducts",DeleteSearch:a+"/app/deleteSearch",Getindexdata:a+"/app/index",QueryProductDetail:a+"/product/getById",QueryProductSku:a+"/product/getProducts",getCouponProducts:a+"/coupon/getCouponProducts",QueryMemberAddres:a+"/receive/getAll",AddresAdd:a+"/receive/save",AddresDelete:a+"/receive/delete",AddresUpdate:a+"/receive/update",receiveGetInfo:a+"/receive/getById",Comment:a+"/order/addComment",AdditionalComment:a+"/order/addToComment",MyCommentList:a+"/comment/getAll",LikeOrUnLikeComment:a+"/comment/like",GetDistributor:a+"/distributor/getDistributor",FindCouponList:a+"/coupon/getCoupons",MemberAccountWithdraw:a+"/distributor/save",GetUser:a+"/user/getUser",GetStore:a+"/shop/getShopProducts",GetStoreShopClassify:a+"/shop/getShopClassify",GetShopBanner:a+"/shop/getShopBanner",getShopIndex:a+"/shop/getIndex",QueryBankcardList:a+"/bank/getAll",SaveBankcard:a+"/bank/save",UpdateBankcard:a+"/bank/update",DelMemberBankcard:a+"/bank/delete",GetByIdBankcard:a+"/bank/getById",FindOrderList:a+"/order/getAll",Settlement:a+"/order/getSettlement",PlaceOrder:a+"/order/submit",GetOrderDetail:a+"/order/getById",CancelOrder:a+"/order/cancel",DelOrder:a+"/order/delete",ShippingTrace:a+"/order/getDilevery",payOrder:a+"/order/pay",gotoPay:a+"/order/gotoPay",gotoAppPay:a+"/order/gotoAppPay",gotoH5Pay:a+"/order/gotoH5Pay",ConfirmReceive:a+"/order/confirm",Orderrefund:a+"/order/refund",ReasonEnums:a+"/after/getReasonSelect",ApplyReturnMoney:a+"/after/submit",ShoppingaddCart:a+"/cart/addCart",ShoppingCart:a+"/cart/getCart",UpdateNumberCart:a+"/cart/updateNumber",DeleteCart:a+"/cart/delete",SelectedCart:a+"/cart/selected",ReceiveCoupon:a+"/coupon/takeCoupon",FindSaleStoreList:a+"/distributor/getDistributorAll",QuerySalesMainInfo:a+"/distributor/getShopDistributor",FindSalesOrderPage:a+"/distributor/getReward",GetNotReward:a+"/distributor/getNotReward",FindSalesCustomerList:a+"/distributor/getBuyers",FindSubordinateSalesList:a+"/distributor/getDistributors",FindSalesPromConfig:a+"/distributor/getShopExtension",StoreProductList:a+"/distributor/getExtensionProduct",FindMySalesPage:a+"/distributor/getDistributorOrder",HasApply:a+"/distributor/check",BindSalesCustomer:a+"/distributor/bind",FindReturnList:a+"/after/getAll",CancelRefund:a+"/after/returnRefund",ReturnDetail:a+"/after/getById",CancelReturnGoods:a+"/after/returnGoods",ShippingCompany:a+"/order/getExpressSelect",SendReturnGoods:a+"/order/returnExpress",Apply:a+"/distributor/addDistributor",getClassify:a+"/canvas/getClassify",getProducts:a+"/canvas/getProducts",getCanvas:a+"/canvas/getCanvas",getShops:a+"/canvas/getShops",getCoupons:a+"/canvas/getCoupons",takeCoupon:a+"/coupon/takeCoupon",getShopCoupons:a+"/canvas/getShopCoupons",selectCanvasCustomList:a+"/canvas/selectCanvasCustomList",getSeckills:a+"/renovation/getSeckills",getGroupWorks:a+"/renovation/getGroupWorks",getDiscounts:a+"/renovation/getDiscounts",Query:a+"/dict/getByName",DeleteAllSearch:a+"/product/deleteAllSearch",getMessage:a+"/notice/getAll",getMessageDateils:a+"/notice/getById",getNotice:a+"/notice/getGongGaoAll",getProductCollect:a+"/collect/getAllProduct",getStoreCollect:a+"/collect/getAllShop",cancelCollect:a+"/collect/cancel",collect:a+"/collect/collect",deleteCollect:a+"/collect/delete",addAnswer:a+"/seckill/addAnswer",addProblem:a+"/seckill/addProblem",getSeckillList:a+"/seckill/getIndex",getProblems:a+"/seckill/getProblems",getProblemDetail:a+"/seckill/getProblemDetail",getGroupSettlement:a+"/work/getSettlement",getGroupBuyList:a+"/work/getIndex",getInviteSpell:a+"/work/getInvite",getDiscountList:a+"/discount/getIndex",getFootprintList:a+"/footprint/getAll",deleteFootprint:a+"/footprint/delete",getProblemList:a+"/seckill/getProblem",getAnswerList:a+"/seckill/getAnswer",deleteProblem:a+"/seckill/deleteProblem",deleteAnswer:a+"/seckill/deleteAnswer",getShare:a+"/work/getShare"}},faa1:function(t,e,i){"use strict";i.r(e);var a=i("10c4"),s=i("c255");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("54a2");var n,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"1ad23241",null,!1,a["a"],n);e["default"]=l.exports}}]);