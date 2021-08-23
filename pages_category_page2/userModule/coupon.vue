<!-- 优惠券列表 -->
<template>
	<view class="container">
		<view class="list" v-if="list.length > 0">
			<view class="item" v-for="(item, index) in list" v-if="item.state === 0">
				<view class="lable">{{item.activityName}}</view>
				<view class="discoun"> <text style="font-size: 28rpx">￥</text>{{item.reduceMoney}}</view>
				<view class="info-box">
				  <view class="info-condition">满{{item.fullMoney}}元减{{item.reduceMoney}}元</view>
				  <view class="info-date">{{getDate(item.startTime)}} 至 {{getDate(item.endTime)}}</view>
				</view>
				<view class="use-btn" @click="useTap(item)">立即使用</view>
			</view>
		</view>
		<view v-else class="emptyOrder-box flex-items-plus flex-column">
			<image class="emptyOrder-img" src="../../static/images/totalAwardEmpty.png"></image>
			<label class="font-color-999 fs26 mar-top-30">你还没有优惠券哦～</label>
		</view>
	</view>
</template>

<script>
	const NET = require('../../utils/request')
	const API = require('../../config/api')
	export default {
		data() {
			return {
				list:[],
				// page:1,
				// pageSize:20,
				total:0,
				// loadingType:0,
			}
		},
		onShow() {
			this.getFindCouponList()
		},
		methods: {
			getFindCouponList(){
			    uni.showLoading({
			      title: '加载中...',
			    })
			    NET.request(API.FindCouponList,"GET").then(res => {
			      uni.hideLoading()
				  this.list = res.data
			    }).catch(res => {
			      uni.hideLoading()
			    })
			},
			getDate(time) {
			    if (!time) return '';
			    return time.split(' ')[0]
			},
			useTap(item){
        uni.navigateTo({
          url: `../../pages_category_page1/goodsModule/couponShopList?activityId=${item.activityId}&shopCouponId=${item.shopCouponId}`
        })
			}
		}
	}
</script>

<style lang="scss">
	.emptyOrder-box{
		margin-top: 70upx;
		.emptyOrder-img{
			width: 270upx;
			height: 270upx;
		}
	}
	.list {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}

	.item {
	  width: 690rpx;
	  height: 200rpx;
	  background: rgba(255, 233, 216, 1);
	  border-radius: 10rpx;
	  margin-top: 20rpx;
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  position: relative;
	}

	.item:last-child {
	  margin-bottom: 100rpx;
	}

	.lable {
	  padding: 10rpx 10rpx;
	  background: rgba(255, 121, 17, 0.2);
	  border-radius: 10rpx 0px 10rpx 0px;
	  font-size: 20rpx;
	  font-weight: 500;
	  line-height: 28rpx;
	  text-align: center;
	  color: rgba(255, 121, 17, 1);
	  position: absolute;
	  left: 0;
	  top: 0;
	}

	.discoun {
	  display: flex;
	  flex-direction: row;
	  align-items: baseline;
	  font-size: 40rpx;
	  margin-left: 30rpx;
	  color: #FF7911;
	  width: 120rpx;
	}

	.discoun text {
	  display: inline-block;
	}

	.info-box {
	  width: 340rpx;
	  display: flex;
	  flex-direction: column;
	  align-items: flex-start;
	}

	.info-condition {
	  font-size: 24rpx;
	  font-weight: bold;
	  color: rgba(255, 121, 17, 1);
	}

	.info-date {
	  font-size: 22rpx;
	  font-family: PingFang SC;
	  font-weight: 500;
	  color: rgba(255, 121, 17, 1);
	  margin-top: 20rpx;
	}

	.use-btn {
	  width: 160rpx;
	  height: 56rpx;
	  border: 1px solid rgba(255, 121, 17, 1);
	  border-radius: 28rpx;
	  line-height: 56rpx;
	  text-align: center;
	  font-size: 24rpx;
	  font-weight: 500;
	  background-color: rgba(255, 121, 17, 1);
	  color: #FFFFFF;
	}
</style>
