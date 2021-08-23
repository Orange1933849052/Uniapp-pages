<!-- 订单中心 -->
<template>
	<view class="container">
		<view style="padding-bottom:68upx;">
			<view>
				<u-tabs :list="tabList" :is-scroll="false" bg-color="#F7F7F7" active-color="#FF7800" :current="type" @change="orderStateChange"></u-tabs>
			</view>
			<view class="order-list-box">
				<view v-if="listTotal > 0">
					<view class="item" v-for="(item, index) in list" :key="index" @click="itemTap(item.orderId,item)">
						<view class="order-list-top">
							<view class="top-l" @click.stop="goShop(item.shopId)">
								<image :src="item.shopLogo" class="shop-img"></image>
								<text class="shop-name">{{item.shopName}}</text>
								<image src="/images/arrow-right.png" class="arrow-img"></image>
							</view>
							<!--订单状态： 退款中 交易关闭 待付款 待发货 待收货 已完成-->
							<view class="order-status" v-if='item.state==1'>待付款</view>
							<view class="order-status" v-else-if='item.state==2'>待发货</view>
							<view class="order-status" v-else-if='item.state==3'>待收货</view>
							<view class="order-status" v-else-if='item.state==4'>已完成</view>
							<view class="order-status" v-else-if='item.state==5'>交易关闭</view>
							<view class="order-status" v-else-if='item.state==6'>待成团</view>
							<view class="order-status" v-else-if='item.returnType==1'>退款中</view>
						</view>
						<view class="order-info-box">
							<view class="order-info">
								<view class="order-info-item" v-for="(proItem, pIndex) in item.skus" :key="pIndex">
									<image :src="proItem.image" class="product-img"></image>
									<view class="info-box">
										<text class="product-name">{{proItem.productName}}</text>
										<view class="product-sku">{{proItem.value}}</view>
										<view class="price-sku-box">
										<view class="box-h">
											<text class="product-price"><text class="fuhao">￥</text>{{proItem.price}}</text>
											<text class="product-num">x {{proItem.number}}</text>
											</view>
											<view v-if="proItem.commentId == 0 && item.state == 4" class="evaluate" @click.stop="evaluateTap(proItem,item.orderId)">立即评价</view>
											<view v-if="proItem.commentId != 0 && item.state == 4" class="evaluate2" @click.stop="evaluateTowTap(index,proItem.commentId)">追加评价</view>
										</view>
									</view>
								</view>
								<view class="total-price-box">总价¥{{item.orderPrice}},优惠¥{{item.discountPrice}}
									<block v-if="item.price > 0">
										，实付¥{{item.price}}
									</block>
								</view>
							</view>

							<view class="order-btn-box">
								<text class="btn l" v-if='item.state==1|| item.state == 6 ' @click.stop="cancelOrder(item.orderId,index)">取消订单</text>
								<!-- <text class="btn l" v-if='item.state==2' >提醒发货</text> -->
								<text class="btn r" v-if='item.state==1' @click.stop="payOrder(item,index)">立即付款</text>
								<text class="btn l" v-if="(item.state==3 || item.state==4) && ( item.afterState == 0 || item.afterState == 6)" @click.stop="applyTap(item,index)" >申请售后</text>
								<text class="btn l" v-if='item.state==3 || item.state==4' @click.stop="goLogisticsTap(item.express,item.deliverFormid)">查看物流</text>
								<text class="btn r" v-if='item.state==3' @click.stop="confirmReceiptTap(item.orderId)">确认收货</text>
								<text class="btn l" v-if='item.state==5|| item.state == 9' @click.stop="delOrder(item.orderId)">删除订单</text>
								<text class="btn l" v-if='item.returnType==1' @click.stop="refundDetail(item)">退款详情</text>
								<text class="btn r" v-if='item.state==6' @click.stop="goInviteSpll(item.collageId,item.orderId,item.skus[0].productId,item.skus[0].skuId,item.shopId)">邀请拼单</text>
								<text class="btn r" v-if='item.state==5' @click.stop="againCollage(item.skus[0].productId,item.shopId,item.skus[0].skuId)">{{item.collageId !=0 ? '再次开团' : '再次购买'}}</text>
							</view>
						</view>
					</view>
				</view>
				<view v-else class="emptyOrder-box flex-items-plus flex-column">
					<image class="emptyOrder-img" src="../../static/images/emptyOrder-img.png"></image>
					<label class="font-color-999 fs26 mar-top-30">你还没有订单哦～</label>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const NET = require('../../utils/request')
	const API = require('../../config/api')
  // #ifdef H5
  var jweixin = require('jweixin-module')
  // #endif
	export default {
		data() {
			return {
				type: 0,
				page: 1,
				pageSize: 20,
				list: [],
				scrollLeft: 0,
				tabList: [
					{
					name: '全部',
					number:0
					},{
					name: '待付款',
					number:1
					},{
					name: '待发货',
					number:2
					},{
					name: '待收货',
					number:3
					},{
					name: '待评价',
					number:4
					},{
					name: '待成团',
					number:6
					},
				],
				listTotal:0,
				loadingType:0,
				orderState:''
			}
		},
		onLoad(options) {
			if(options.type){
				this.type = options.type,
				this.orderState = options.type
				this.getListData()
			}else{
				this.getListData()
			}
		},
		onReachBottom(){
			if(this.loadingType == 1){
				uni.stopPullDownRefresh()
			}else{
				this.page = this.page+1
				this.getListData()
			}
		},
		onBackPress(e) {
			if (e.from === 'navigateBack') {
				return false;
			}
			this.back();
			return true;
		},
		methods: {
			//去商品详情
			againCollage(productId,shopId,skuId){
				uni.navigateTo({
					url:'../goodsModule/goodsDetails?productId='+productId+'&shopId='+shopId+'&skuId='+skuId
				})
			},
			goInviteSpll(collageId,orderId,productId,skuId){
				uni.navigateTo({
					url:'../goodsModule/inviteSpell?collageId=' + collageId + '&orderId=' + orderId + '&type=1'+'&productId='+productId+'&skuId='+skuId

				})
			},
			back(){
				uni.switchTab({
					url:'../../pages/tabbar/user/index'
				});
			},
			//退款详情
			refundDetail(item){
				uni.navigateTo({
					url:'refundDetails?item='+JSON.stringify(item)
				})
			},
			orderStateChange(index) {
				this.type = index;
				this.orderState = this.tabList[index].number
				this.page = 1
				this.list = []
				this.getListData()
			},
			// 订单列表数据
			getListData() {
				if(this.orderState == 0){
					this.orderState = ''
				}
			    uni.showLoading({
			      title: '加载中...',
			    })
			    NET.request(API.FindOrderList, {
			      state: this.orderState,
			      page: this.page,
			      pageSize: this.pageSize
			    }, 'GET').then(res => {
					if(res.data.list.length == 0){
						this.loadingType = 1
						this.page = this.page
					}
					uni.hideLoading()
					this.listTotal = res.data.total
					this.list =  this.list.concat(res.data.list)

			    }).catch(res => {
			      uni.hideLoading()
			    })
			},
			cancelOrder(orderId,index) {
			    uni.showModal({
			      title: '温馨提示',
			      content: '您确定要取消该订单吗？',
			      confirmText: '确定取消',
			      cancelText: '点错了',
			      success: res => {
			        if (res.confirm) {
			          this.doCancel(orderId,index)
			        } else if (res.cancel) {
			          console.log('用户点击取消')
			        }
			      }
			    })
			},
			doCancel(orderId,index) {
			    uni.showLoading({
			      title: '提交中...',
			    })
			    NET.request(API.CancelOrder, {
			      orderId: orderId
			    }, 'PUT').then(res => {
			      uni.hideLoading()
			      uni.showToast({
			        title: '取消成功',
			      })
			      setTimeout(() => {
					this.type = 0
			        this.orderState = 0
					this.page = 1
					this.list = []
					this.getListData()
			      }, 1500);

			    }).catch(res => {
			      uni.hideLoading()
			    })
			},
			goLogisticsTap(express,deliverFormid){
			    uni.navigateTo({
					url:'logisticsInfo?express='+express+'&deliverFormid='+deliverFormid
			    })
			},
			confirmReceiptTap(orderId) {
			    uni.showModal({
			      title: '温馨提示',
			      content: '确定您已经收到货物，否则会造成财产损失',
			      confirmText: '确定收到',
			      cancelText: '点错了',
			      success: res => {
			        if (res.confirm) {
			          this.doConfirm(orderId)
			        } else if (res.cancel) {
			          console.log('用户点击取消')
			        }
			      }
			    })
			},
			doConfirm(orderId) {
			    NET.request(API.ConfirmReceive, {
			      orderId: orderId
			    }, 'PUT').then(res => {
					uni.hideLoading()
					uni.showToast({
						title: '确认成功',
					})
					setTimeout(() => {
						this.type = 4;
						this.orderState =4
						this.page = 1
						this.list = []
						this.getListData()
					}, 1500);
			    }).catch(res => {
			      uni.hideLoading()
			    })
			},
			delOrder(orderId) {
			    uni.showModal({
			      title: '温馨提示',
			      content: '您确定要删除该订单吗？',
			      confirmText: '确定删除',
			      cancelText: '点错了',
			      success: res => {
			        if (res.confirm) {
			          this.doDel(orderId)
			        } else if (res.cancel) {
			          console.log('用户点击取消')
			        }
			      }
			    })
			},
			doDel(orderId) {
			    uni.showLoading({
			      title: '提交中...',
			    })
			    NET.request(API.DelOrder, {
			      orderId: orderId
			    }, 'DELETE').then(res => {
			      uni.hideLoading()
			      uni.showToast({
			        title: '删除成功',
			      })
			    setTimeout(() => {
					this.type = 0;
					this.orderState =0
					this.page = 1
					this.list = []
					this.getListData()
			    }, 1500);

			    }).catch(res => {
			      uni.hideLoading()
			    })
			},
			// 跳转订单详情
			itemTap(orderId,item) {
				uni.setStorageSync("afterapplyItem",item)
			    uni.navigateTo({
					url:'orderDetails?orderId='+orderId
			    })
			},
			goShop(id) {
			    uni.navigateTo({
					url:"../store/index?storeId="+id
			    })

			},
			applyTap(item, index) {
			    // 申请售后
			    uni.navigateTo({
					url: 'afterSaleApply?item=' + JSON.stringify(item)
			    })
			},
			payOrder(item, index) {
        uni.showLoading({
          title: '订单提交中...',
        })
				let submitResult = {
					collageId : item.collageId,
					money : item.orderPrice,
					orderId : item.orderId,
					type : 2
				}
        // #ifdef H5
        let ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          this.payRequest(submitResult)
        }else{
          NET.request(API.gotoH5Pay, submitResult, 'POST').then(res => {
            //console.dir(res)
            location.replace(res.data.mwebUrl)
            // window.location.replace(url)
          }).catch(err => {
            this.submitActive = true
            uni.hideLoading()
            uni.showToast({
              title: '支付失败',
              icon: 'none'
            })
          })
        }
        // #endif
				// #ifdef MP-WEIXIN
				NET.request(API.gotoPay,submitResult,'POST').then(res => {
					uni.requestPayment({
						privider: 'wxpay',
						timeStamp: res.data.timeStamp,
						nonceStr: res.data.nonceStr,
						package: res.data.package,
						signType: res.data.signType,
						paySign: res.data.paySign,
						success: function(payRes) {
							uni.showToast({
								icon: 'none',
								title: '支付成功'
							})
							this.type = 0
							this.page = 1
							this.getListData()
						},
						fail: function(err) {
							uni.showToast({
								icon: 'none',
								title: '支付失败'
							})
						}
					})
				}).catch(err => {
				  uni.hideLoading()
				  uni.showToast({
					title: '支付失败',
					icon:'none'
				  })
				})
				// #endif
			},
      // H5支付微信内置浏览器支付
      payRequest(payInfo){
        NET.request(API.gotoPay, payInfo, 'POST').then(res => {
          jweixin.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timeStamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.paySign, // 必填，签名，见附录1
            jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
          jweixin.ready(function() {
            jweixin.checkJsApi({
              jsApiList: ['chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
              success: function(res) {
                // console.log('checkjsapi Success')
                // console.log(res);
              },
              fail:function(res) {
                // console.log('res')
                // console.log(res);
              }
            });
            jweixin.chooseWXPay({
              timestamp: res.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
              package: res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
              signType: res.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: res.data.paySign, // 支付签名
              success:function(res) {
                // 支付成功后的回调函数
                uni.showToast({
                  icon: 'none',
                  title: '支付成功'
                })
                uni.navigateTo({
                  url: 'index?type=0'
                })
              },
              cancel: function(r) {
                uni.showToast({
                  icon: 'none',
                  title: '取消支付'
                })
              },
              fail:function(res) {
                uni.showToast({
                  icon: 'none',
                  title: '支付失败'
                })
              }
            });
          });
          jweixin.error(function(res) {
            console.log('error')
            console.log(res)
            uni.hideLoading()
            uni.showToast({
              icon: 'none',
              title: '支付失败了',
              duration: 3000
            });
          });
        }).catch(err => {
          uni.hideLoading()
        })
      },
			evaluateTap(item, orderId){
			    uni.setStorageSync('evaluateItem', item)
			    uni.setStorageSync('orderId', orderId)
			    uni.navigateTo({
			      url: '../goodsModule/evaluate',
			    })
			},
			evaluateTowTap(index,commentId){
				console.log(commentId,444)
			  uni.setStorageSync('addCommentVOList', this.list[index]);
			  uni.navigateTo({
			  	url:'../goodsModule/addEvaluate?type=1&commentId='+commentId
			  })
			},
		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	  background: #f6f6f6;
	}

	.nav-box-box {
	  height: 88upx;
	  background: #f6f6f6;
	  white-space: nowrap;
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  z-index: 10;
	}

	.nav-box-box .item {
	  display: inline-view;
	  padding: 0 30upx;
	  box-sizing: border-box;
	  height: 88upx;
	  text-align: center;
	  line-height: 88upx;
	  font-size: 30upx;
	  color: #666;
	  font-weight: 500;
	}

	.nav-box-box .item.active text {
	  display: inline-view;
	  color: #ff7911;
	  box-sizing: border-box;
	  height: 88upx;
	  border-bottom: 2px solid #ff7911;
	}

	.order-list-box {
	  padding: 20upx 30upx 0;
	  box-sizing: border-box;
	}

	.order-list-box .item {
	  margin-bottom: 20upx;
	  background: #fff;
	  border-radius: 10upx;
	}

	.order-list-top {
	  height: 96upx;
	  padding: 0 30upx;
	  box-sizing: border-box;
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
	  border-bottom: 1px solid #eee;
	}

	.top-l {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	}

	.shop-img {
	  width: 36upx;
	  height: 36upx;
	  margin-right: 10upx;
	}

	.shop-name {
	  font-size: 30upx;
	  color: #333;
	  font-weight: bold;
	}

	.arrow-img {
	  margin-left: 15upx;
	  width: 24upx;
	  height: 24upx;
	}

	.order-status {
	  font-size: 28upx;
	  color: #ff7911;
	  font-weight: 500;
	}

	.order-info-box {
	  padding: 0 30upx;
	  box-sizing: border-box;
	}

	.order-info {
	  border-bottom: 1px solid #eee;
	}

	.order-info-item {
	  display: flex;
	  flex-direction: row;
	  padding: 20upx 0;
	}

	.product-img {
	  width: 180upx;
	  height: 180upx;
	  border-radius: 10upx;
	  margin-right: 30upx;
	}

	.info-box {
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	}

	.product-name {
	  font-size: 26upx;
	  color: #333;
	  height: 68upx;
	  line-height: 34upx;
	  display: -webkit-box;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  word-break: break-all;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	}

	.price-sku-box {
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	}

	.product-sku {
	  font-size: 24upx;
	  color: #999;
	}

	.product-price {
	  font-size: 28upx;
	  color: #333;
	  font-weight: 400;
	}

	.product-price .fuhao {
	  font-size: 28upx;
	}

	.product-num {
	  display: inline-view;
	  font-size: 28upx;
	  margin-left: 20upx;
	  color: #999;
	}
	.total-price-box{
	  font-size: 26upx;
	  color:#333;
	  text-align: right;
	  padding: 30upx 0;
	}
	.order-btn-box {
	  padding: 20upx 0;
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-end;
	}

	.order-btn-box .btn {
	  display: inline-view;
	  width: 150upx;
	  height: 56upx;
	  border-radius: 28upx;
	  text-align: center;
	  line-height: 56upx;
	  font-size: 26upx;
	  color:#333;
	  margin-left: 20upx;
	}
	.evaluate{
	  height: 56upx;
	  border-radius: 28upx;
	  text-align: center;
	  line-height: 56upx;
	  font-size: 26upx;
	  padding: 0 30upx;
	  border: 1px solid #FF7911;
	  color: #FF7911;
	}
	.evaluate2{
	  height: 56upx;
	  border-radius: 28upx;
	  text-align: center;
	  line-height: 56upx;
	  font-size: 26upx;
	  padding: 0 30upx;
	  border: 1px solid #BBBBBB;
	  color: #333;
	}
	.order-btn-box .btn.l {
	  border: 1px solid #BBBBBB;
	  color: #333;
	}

	.order-btn-box .btn.r {
	  border: 1px solid #FF7911;
	  color: #FF7911;
	}
	.emptyOrder-box{
		margin-top: 70upx;
		.emptyOrder-img{
			width: 270upx;
			height: 270upx;
		}
	}
</style>
