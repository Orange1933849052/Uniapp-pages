<template>
	<view class="container">
		<view class="salesIndex-topBackImg">
			<view class="topStoreTag flex-row-plus">
				<view class="storeName overflow font-color-FFF mar-left-30">
					<label class=" fs24">{{item.shopName}}</label>
				</view>
				<view>
					<image class="storeLogoImg" :src="item.shopLogo"></image>
				</view>
			</view>
			<view class="flex-items flex-column">
				<image class="salesHeadImg" :src="SalesMainItem.headImage"></image>
				<view class="font-color-FFF fs36 mar-top-10">{{SalesMainItem.name}}</view>
				<view class="gradeText">{{item.levelName}}</view>
			</view>
		</view>
		<view class="flex-items-plus">
			<view class="flex-row-plus award-box flex-items flex-sp-around">
				<view class="flex-column-plus flex-items" @click="gototalAward">
					<label class="font-color-FF7911 fs44">{{SalesMainItem.cumulative}}</label>
					<label class="fs24 font-color-656">累计奖励(元）</label>
				</view>
				<view class="borRig-line-E5E5E5 lineRight" style="height: 44upx;"></view>
				<view class="flex-column-plus flex-items" @click="gounliquidated">
					<label class="font-color-FF7911 fs44">{{SalesMainItem.unsettled}}</label>
					<label class="fs24 font-color-656">未结算奖励(元）</label>
				</view>
			</view>
		</view>
		<view class="flex-items-plus">
			<view class="flex-row-plus award-box flex-items flex-sp-around">
				<view class="flex-column-plus flex-items" @click="gototalClient">
					<label class="font-color-333 fs44">{{SalesMainItem.users}}</label>
					<label class="fs24 font-color-656">累计客户(人）</label>
				</view>
				<view class="borRig-line-E5E5E5 lineRight" style="height: 44upx;"></view>
				<view class="flex-column-plus flex-items" @click="gototalPersonnel">
					<label class="font-color-333 fs44">{{SalesMainItem.distributors}}</label>
					<label class="fs24 font-color-656">累计分销员(人）</label>
				</view>
			</view>
		</view>
		<view class="flex-items-plus">
			<view class="flex-row-plus award-box flex-items flex-sp-around">
				<view class="flex-column-plus flex-items"  @click="gopromotion">
					<image class="salesIcon" src="../../static/images/salesStore-icon.png"></image>
					<label class="fs24 font-color-656">推广店铺</label>
				</view>
				<view class="flex-column-plus flex-items" @click="storeindex">
					<image class="salesIcon" src="../../static/images/extendGoods-icon.png"></image>
					<label class="fs24 font-color-656">推广商品</label>
				</view>
				<view class="flex-column-plus flex-items" @click="godistributionOrder">
					<image class="salesIcon" src="../../static/images/salesOrder-icon.png"></image>
					<label class="fs24 font-color-656">分销订单</label>
				</view>
				<view class="flex-column-plus flex-items" @click="goinvite">
					<image class="salesIcon" src="../../static/images/inviteLower-icon.png"></image>
					<label class="fs24 font-color-656">邀请下级</label>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const NET = require('../../utils/request')
	const API = require('../../config/api')
	export default {
		data() {
			return {
				item: {},
				SalesMainItem: {},
			}
		},
		onLoad(item) {
			this.item = JSON.parse(item.tenantCode)
			uni.setStorageSync("salesId",this.item.distributorId)
			this.getSalesMainInfo()
		},

		methods: {
			getSalesMainInfo() {
				uni.showLoading({
					title: '加载中...'
				})
				NET.request(API.QuerySalesMainInfo, {
					distributorId: this.item.distributorId,
					shopId:this.item.shopId
				}, 'GET').then(res => {
					uni.hideLoading()
					this.SalesMainItem = res.data
				}).catch(res => {
				uni.hideLoading()
				})
			},
			//累计奖励
			gototalAward() {
				uni.navigateTo({
					url: 'totalAward?shopId=' + this.item.shopId + '&distributorId=' + this.item.distributorId
				});
			},
			// 未结算奖励
			gounliquidated() {
				uni.navigateTo({
					url: 'unliquidated?shopId=' + this.item.shopId + '&distributorId=' + this.item.distributorId
				});
			},
			// 累计客户
			gototalClient() {
				uni.navigateTo({
					url: 'totalClient?shopId=' + this.item.shopId + '&distributorId=' + this.item.distributorId
				});
			},
			// 累计分销员
			gototalPersonnel() {
				uni.navigateTo({
					url: 'totalPersonnel?shopId=' + this.item.shopId + '&distributorId=' + this.item.distributorId
				});
			},
			// 推广店铺
			gopromotion(){
				uni.navigateTo({
					url: 'promotion?shopId=' + this.item.shopId + '&distributorId=' + this.item.distributorId
				});
			},
			// 推广商品
			storeindex(){
				uni.navigateTo({
					url: 'commodity?shopId=' + this.item.shopId + '&distributorId=' + this.item.distributorId + '&headimg=' + this.SalesMainItem.headImage + '&username=' + this.SalesMainItem.name
				});
			},
			// 分销订单
			godistributionOrder(){
				uni.navigateTo({
					url: 'distributionOrder?shopId=' + this.item.shopId
				});
			},
			// 邀请下级
			goinvite(){
				uni.navigateTo({
					url: 'invite?tenantCode=' + JSON.stringify(this.SalesMainItem) + '&shopId=' + this.item.shopId + '&distributorId=' + this.item.distributorId
				});
			}
			
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F7F7F7;
	}

	.container {
		.salesIndex-topBackImg {
			width: 100%;
			height: 280upx;
			background: url(../../static/images/salesIndex-topBackImg.png) no-repeat;
			background-size: 100% 280upx;
			padding-top: 10upx;

			.topStoreTag {
				background-color: #000000;
				height: 40upx;
				width: 180upx;
				border-radius: 0 20upx 20upx 0;

				.storeName {
					width: 110upx;
				}

				.storeLogoImg {
					width: 38upx;
					height: 38upx;
					border-radius: 50%;
				}
			}

			.salesHeadImg {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
			}

			.gradeText {
				background-image: linear-gradient(to right, #FFFFFF 10%, #FFD5AB 100%);
				border-radius: 40upx;
				font-size: 18upx;
				color: #94431B;
				font-weight: bold;
				line-height: 36upx;
				text-align: center;
				margin-top: 15upx;
				padding: 5upx 10upx;
			}
		}

		.award-box {
			background-color: #FFFFFF;
			height: 158upx;
			width: 690upx;
			margin-top: 30upx;
			border-radius: 10upx;
			box-shadow: 0upx 0upx 10upx 4upx #F0F0F0;

			.salesIcon {
				width: 60upx;
				height: 56upx;
			}
		}
	}
</style>
