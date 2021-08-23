<template>
	<view class="container">
		<view>
			<view v-for="(item, index) in Productlist" :key="index" class="goodsDetails-box flex-display flex-column mar-left-30"
				  @click="goodsDateils(index)">
				<view class="goodsDetails flex-items-plus flex-row mar-top-30">
					<image class="goodsImg" :src="item.image"></image>
					<view class="mar-left-30">
						<view class="goodsName-box overflowNoDot">
							<label class="goodsName fs26 mar-left-20">{{item.productName}}</label>
						</view>
						<view class="priceBuyNum-box mar-top-20">
							<label class="fs24 font-color-FF7800">¥</label>
							<label class="fs36 font-color-FF7800 mar-left-10">{{item.price}}</label>
							<label class="fs24 font-color-999 mar-left-20" v-if="item.users != null">{{item.users}}人付款</label>
							<label class="fs24 font-color-999 mar-left-20" v-else>0人付款</label>
						</view>
						<!-- <view class="flex-display flex-sp-between flex-row mar-top-10 flex-items">
							<image class="arrowImg" src="../../static/img/user/arrow.png"></image>
						</view> -->
						<view class="fenxiang" @click="fenxiang(item)">
							分享
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-mask :show="show" z-index="10000">
			<view class="warp">
				<view class="rect" @tap.stop>
					<!-- 关闭按钮 -->
					<image @click="show=false" src="../../static/img/guanbi@2x.png" class="guanbi" mode=""></image>
					<!-- 内容 -->

					<view class="mar-left-30">
						<view>
							<image style="width: 100%;" :src="tuimgs" mode=""></image>
						</view>
						<!-- 个人信息 -->
						<view class="user">
							<view>
								<image :src="headimg" style="width: 90rpx;height: 90rpx;border-radius: 50%;" mode=""></image>
							</view>
							<view style="margin-left: 20rpx;">
								<p style="line-height: 90rpx; font-size: 28rpx;">{{username}}</p>
							</view>
						</view>
						<view style="padding: 40upx;">
							<p >{{fenxiangitem.productName}}</p>
							<label class="fs24 font-color-FF7800">¥</label>
							<label class="fs36 font-color-FF7800 mar-left-10">{{fenxiangitem.price}}</label>
						</view>
						<view style="border-top: 1px solid #999999; display: flex;position: absolute;margin: 20upx;">
							<view style="flex: 1;line-height: 40rpx;margin-top: 20upx;">
								<p style="color: #343434;font-size: 28rpx;">长按识别小程序</p>
								<p style="color: #666666;font-size: 24rpx;">来自「cereshop商城」小程序</p>
							</view>
							<view style="margin-left: 80rpx;margin-top: 20upx;">
								<view class="qrimg-i">
									<tki-qrcode  cid="qrcode2" ref="qrcode2" :val="erweima" :size="size" :onval="onval" :loadMake="loadMake" :usingComponents="true" />
								</view>
							</view>
						</view>

					</view>
					<!-- 分享 -->
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	const NET = require('../../utils/request')
	const API = require('../../config/api')
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	export default {
		data() {
			return {
				Productlist: [],
				item:{},
				fenxiangitem: {},
				show: false,
				erweima: '',
				tuimgs:'',
				size: 160, // 二维码大小
				onval: true, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				shopId:0,
				headimg:'',
				username:'',
				distributorId:0,
				page: 1,
				pageSize: 20,
				loadingType:0
			}
		},
		onLoad(options) {
			this.shopId = options.shopId
			this.distributorId = options.distributorId
			this.headimg = options.headimg
			this.username = options.username
			this.getStoreProductList()
		},
		onReachBottom() {
			if(this.loadingType == 1){
				uni.stopPullDownRefresh()
			}else{
				this.page = this.page+1
				this.getStoreProductList()
			}
		},
		methods: {
			getStoreProductList() {
				uni.showLoading({
					title: '加载中...'
				})
				NET.request(API.StoreProductList, {
					shopId: this.shopId,
					page:this.page,
					pageSize:this.pageSize
				}, 'GET').then(res => {
					uni.hideLoading()
					if(res.data.list.length == 0){
						this.loadingType = 1
						this.page = this.page
					}
					this.Productlist = this.Productlist.concat(res.data.list)
				}).catch(res => {
					uni.hideLoading()
				})
			},
			goodsDateils(id) {
				uni.navigateTo({
					url: '../goodsModule/goodsDetails' + id
				})
			},
			fenxiang(item) {
				this.fenxiangitem = item
				this.show = true
				this.erweima = API.SettledMerchantPrefix + '/h5/#/pages/goodsModule/goodsDetails?id='+this.fenxiangitem.productId+'&salesId='+this.distributorId + '&storeId='+this.fenxiangitem.shopId
				this.tuimgs = item.image
			}



		}
	}
</script>

<style lang='scss' scoped>
	input {
		padding-left: 80upx;
	}

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;

	}

	.qrimg-i {
		margin-right: 10px;
	}

	.rect {
		width: 89%;
		height: 80%;
		background-color: #fff;
		position: relative;
		.guanbi {
			width: 46rpx;
			height: 46rpx;
			position: absolute;
			top: -100rpx;
			left: 50%;
			margin-left: -23rpx;
		}

		.user {
			display: flex;
			padding: 20upx;

		}


	}

	.fenx {
		position: fixed;
		bottom: 0rpx;
		z-index: 10001;
		background-color: #F7F7F7;
		width: 100%;
		height: 98rpx;
		display: flex;
		color: #343434;

		view {
			line-height: 98rpx;
		}

		image {
			width: 50rpx;
			height: 50rpx;
			display: inline-block;
			margin-top: 25rpx;
		}
	}

	.fenxiang {
		height: 50upx;
		line-height: 50upx;
		width: 120upx;
		color: white;
		border-radius: 10upx;
		text-align: center;
		position: absolute;
		background-color: #FF7911;
		right: 20upx;
	}

	.container {
		.emptyCart-box {
			margin-top: 70upx;

			.emptyCart-img {
				width: 270upx;
				height: 270upx;
			}
		}

		.searchImg {
			width: 36upx;
			height: 36upx;
			position: absolute;
			left: 60upx;
		}

		.search-box {
			background-color: #F7F7F7;
			border-radius: 33upx;
			width: 530upx;
			height: 66upx;
		}

		.searchboxPlace {
			font-size: 26upx;
			color: #A9A9A9;
			padding-right: 30upx;
		}

		.searchClose-icon {
			width: 30upx;
			height: 30upx;
			margin-left: -50upx;
		}

		.promotion618 {
			width: 130upx;
			height: 30upx;
		}

		.goodsDetails-box {
			width: 690upx;

			.goodsDetails {
				border-bottom: 1upx solid #EDEDED;
				padding-bottom: 30upx;

				.goodsName-box {
					width: 389upx;
					height: 85upx;

					.img618-cion {
						width: 70upx;
						height: 36upx;
					}
				}

				.goodsImg {
					width: 260upx;
					height: 260upx;
				}

				.discounts-box {
					margin-left: -10upx;
					margin-top: 20upx;

					.discounts-text {
						margin-left: 10upx;
						color: #FF7800;
						background-color: #FFE4CC;
						padding: 6upx 12upx;
						border-radius: 4upx;
					}
				}

				.arrowImg {
					width: 20upx;
					height: 20upx;
				}
			}


		}
	}
</style>
