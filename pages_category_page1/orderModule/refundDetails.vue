<!-- 退货详情 -->
<template>
	<view>
		<view class="">
			<view class="order-details-status">
				<view class="status-title-box" v-if='status == 1'>
					<view class="l">
						<text class="status">审核中</text>
						<!-- <text class="label" v-if="deliveryfalse">还剩1天22时30分</text> -->
					</view>
					<image class='r' src="../../static/images/afterSale-details-time.png"></image>
				</view>
				<!--  审核通过-->
				<view class="status-title-box" v-if="status == 10">
					<view class="l">
						<text class="status">审核通过</text>
						<!-- <text class="label" v-if="deliveryfalse">2020年4月24日 22:00:00</text> -->
					</view>
					<image class='r' src="../../static/images/afterSale-details-success.png"></image>
				</view>
				<!--  审核不通过-->
				<view class="status-title-box" v-if="status == 6">
					<view class="l">
						<text class="status">审核不通过</text>
						<!-- <text class="label" v-if="deliveryfalse">2020年4月24日 22:00:00</text> -->
					</view>
					<image class='r' src="../../static/images/afterSale-details-success.png"></image>
				</view>
				<!--  退款中-->
				<view class="status-title-box" v-if="status == 2">
					<view class="l">
						<text class="status">退款中</text>
						<!-- <text class="label">2020年4月24日 22:00:00</text> -->
					</view>
					<image class='r' src="../../static/images/afterSale-details-false.png"></image>
				</view>
				<!--  退货完成待退款-->
				<view class="status-title-box" v-if="status == 4">
					<view class="l">
						<text class="status">退款成功</text>
						<!-- <text class="label">2020年4月24日 22:00:00</text> -->
					</view>
					<image class='r' src="../../static/images/afterSale-details-false.png"></image>
				</view>
				<!--  退货完成拒绝退款-->
				<view class="status-title-box" v-if="status == 5">
					<view class="l">
						<text class="status">退款失败</text>
						<!-- <text class="label">2020年4月24日 22:00:00</text> -->
					</view>
					<image class='r' src="../../static/images/afterSale-details-false.png"></image>
				</view>
				<!--  退款成功-->
				<view class="status-title-box" v-if="status == 9">
					<view class="l">
						<text class="status">撤销申请</text>
						<!-- <text class="label" v-if="deliveryfalse">2020年4月24日 22:00:00</text> -->
					</view>
					<image class='r' src="../../static/images/afterSale-details-success.png"></image>
				</view>
		
			</view>
		
			<!-- 发起退款 -->
			<view class="order-details-info-box mt20" v-if='status == 0'>
				<view class="order-details-price" v-if='status != 0'>
					<text>退款总金额</text>
					<text class="price-box"><text class="fuhao">￥</text>{{itemlist.price}}</text>
				</view>
				<view class="address-box return-explain-box">
					<view>您已成功发起退款申请，请耐心等待商家处理。</view>
					<view class="address-info-r mt20 mar-top-20">
						<view class="item fs24">
							<text class="circle"></text>
							<text class="">卖家同意或超时未处理，系统将退款给您</text>
						</view>
						<view class="item fs24">
							<text class="circle"></text>
							<text class="">如果卖家拒绝，您可以修改退款申请后再次发起，卖家会重新处理</text>
						</view>
					</view>
					<view class="return-explain-btn">
						<text class="btn" @click="cancelRefundTap">撤销申请</text>
					</view>
				</view>
			</view>
			<!-- 退款成功 -->
			<view class="order-details-info-box mt20" v-if="status == 4">
				<view class="order-details-price return-explain-box">
					<text>已原路退回金额</text>
					<text class="price-box"><text class="fuhao">￥</text>{{itemlist.price}}</text>
				</view>
			</view>
			<!-- 退款关闭 -->
			<view class="order-details-info-box mt20" v-if="status == 9">
				<view class="address-box return-explain-box">
					<view>因您撤销退款申请，退款已关闭</view>
				</view>
			</view>
		
			<view class="order-list-box" >
				<view class="title">退款信息</view>
				<view class="item" >
					<view class="order-info-box">
						<view class="order-info" v-for="item in itemlist.skus">
							<view class="order-info-item">
								<image :src="item.image" class="product-img"></image>
								<view class="info-box">
									<text class="product-name">{{item.productName}}</text>
									<view class="product-sku mt20">{{item.value}}</view>
								</view>
							</view>
						</view>
						<view class="delivery-way-box">
							<view class="item" v-if="deliveryfalse">
								<!-- <text class="way">退款原因：多拍/错拍/不想要</text> -->
							</view>
							<view class="item">
								<text class="way">退款金额：￥{{itemlist.price}}</text>
							</view>
							<view class="item">
								<text class="way">退款编号：{{itemlist.afterFormid}}</text>
							</view>
							<view class="item">
								<text class="way">申请时间：{{itemlist.createTime}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="order-list-box">
				<view class="title">协商历史</view>
				<view style="margin: 30rpx;padding: 30rpx;border-left: 1px solid #CCCCCC;" v-if="itemlist.afterHistory.length>0" v-for="item in itemlist.afterHistory">
					<text style="color: #999999;">{{item.title}}</text>
					<br>
					<br>
					<text style="color: #999999;">{{item.time}}</text>
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
				item:{},
				itemlist:{},
				status:0,
				deliveryfalse:false,
				ReturnDetailData:[]
				
				
			}
		},
		onLoad(options){
			this.item = JSON.parse(options.item)
			this.getReturnDetail()
		},
		methods: {
			getReturnDetail(){
				NET.request(API.ReturnDetail,{
					afterId:this.item.afterId,
					orderId:this.item.orderId
				},'GET').then(res => {
					this.status = res.data.afterState
					this.itemlist = res.data
				}).catch(res => {
					
				})
			},
			cancelRefundTap(){
				uni.showLoading({
					title:'正在撤销退款...'
				})
				NET.request(API.CancelRefund, {
					afterId:this.item.afterId,
					orderId:this.item.orderId
				}, 'PUT').then(res => {
					uni.showToast({
						title:'撤销成功',
					})
					uni.switchTab({
						url:"../../pages/tabbar/user/index"
					})
					uni.hideLoading()
				}).catch(res => {
					uni.hideLoading()
				})	
			}
		}
	}
</script>

<style>
page {
  background: #f7f7f7;
}

.order-details-status {
  width: 750upx;
  height: 180upx;
  background: #FF7911;
}

.status-title-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40upx 30upx 0;
  box-sizing: border-box;
}

.status-title-box2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40upx 30upx 0;
  box-sizing: border-box;
}

.status-title-box .l {
  display: flex;
  flex-direction: column;
}

.status-title-box .l .status, .status-title-box2 .status {
  font-size: 30upx;
  color: #fff;
}

.status-title-box .l .label, .status-title-box2 .label {
  font-size: 24upx;
  color: #fff;
  margin-top: 14upx;
}

.status-title-box .r {
  width: 80upx;
  height: 80upx;
}

.order-details-info-box {
  padding: 0 30upx;
  box-sizing: border-box;
  background: #fff;
}

.order-details-info-box.mt20 {
  margin-top: 20upx;
}

.order-details-price {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100upx;
  border-bottom: 1px solid #e5e5e5;
  font-size: 30upx;
  color: #333;
}

.order-details-price .price-box {
  font-size: 36upx;
  color: #ff7911;
}

.order-details-price .fuhao {
  font-size: 24upx;
}

.address-box {
  background: #fff;
  padding: 30upx 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 28upx;
  color: #333;
  border-bottom: 1px solid #e5e5e5;
}

.address-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20upx;
}

.address-box .address-img {
  width: 45upx;
  height: 45upx;
  margin-right: 40upx;
}

.address-box .address-info-r {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 28upx;
  color: #999;
}

.ml30 {
  margin-left: 30upx;
}

.address-box .address-info-r .item {
  display: flex;
  flex-direction: row;
}

.address-box .address-info-r .title {
  display: inline-block;
  width: 100upx;
  text-align: justify;
  text-justify: distribute-all-lines;
  text-align-last: justify;
}

.address-box .address-info-r .item .r {
  flex: 1;
  line-height: 40upx;
}

.return-explain-box {
  border-bottom: none;
}

.return-explain-box .address-info-r .item {
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 40upx;
}

.address-info-r .item .circle {
  width: 8upx;
  height: 8upx;
  border-radius: 50%;
  background: #bbb;
  margin-right: 10upx;
}

.return-explain-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20upx;
}

.return-explain-btn .btn {
  width: 130upx;
  height: 56upx;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 4upx;
  text-align: center;
  line-height: 56upx;
  margin-left: 20upx;
  color: #333;
  font-size: 26upx;
}

.return-explain-btn .btn.on {
  color: #ff7911;
  border: 1px solid #ff7911;
}


.order-list-box {
  margin-top: 20upx;
}
.order-list-box .title{
  padding: 30upx;
  box-sizing: border-box;
  font-size: 30upx;
  color:#333;
  background: #fff;
}
.order-list-box .item {
  margin-bottom: 20upx;
  background: #fff;
  border-radius: 10upx;
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
  /* justify-content: space-between; */
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
  font-size: 28upx;
  color: #999;
}
.delivery-way-box{
  display: flex;
  flex-direction: column;
  margin: 30upx 0 10upx;
}
.delivery-way-box .item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 26upx;
  color: #333;
}
.delivery-way-box .item .way {
  color: #999;
}




</style>
