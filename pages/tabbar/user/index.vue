<template>
	<view class="content">
		<!-- 我的 -->
		<image class="top-bg" src="../../../static/img/user/top-bg.png" mode="widthFix"></image>
		<view class="page-content">
			<view class="user-info-box" @click="gologin" v-if="JSON.stringify(item) =='{}' ">
				<image class="user-image" src="../../../static/img/user/morentouxiang.png" mode="widthFix"></image>
				<view class="user-info">
					<view class="user-logoin-title">点击登录</view>
					<view class="user-logoin-lable">登录后享受更多权益~</view>
				</view>
				<image class="user-info-right" src="../../../static/img/user/back2.png" mode=""></image>
			</view>
			<view class="user-info-box" v-else @click="goinfo">
				<image class="user-image" v-if="useritem.headImage" :src="useritem.headImage" mode="widthFix" style="border-radius: 50%;"></image>
				<image class="user-image" v-else src="../../../static/img/user/morentouxiang.png" mode="widthFix"></image>
				<view class="user-info">
					<view class="user-logoin-title" v-if="useritem.name">{{useritem.name}}</view>
					<view class="user-logoin-title" v-else>{{infoitem.phone}}</view>
				</view>
				<image class="user-info-right" src="../../../static/img/user/back2.png" mode=""></image>
			</view>
			<view class="order-box">
				<view class="order-item" @click="orderTap(1)">
					<image class="order-item-image" src="../../../static/img/user/daifukuan1.png" mode="widthFix"></image>
					<view class="order-item-text">待付款</view>
				</view>
				<view class="order-item" @click="orderTap(2)">
					<image class="order-item-image" src="../../../static/img/user/daifahuo1.png" mode="widthFix"></image>
					<view class="order-item-text">待发货</view>
				</view>
				<view class="order-item" @click="orderTap(3)">
					<image class="order-item-image" src="../../../static/img/user/daishouhuo.png" mode="widthFix"></image>
					<view class="order-item-text">待收货</view>
				</view>
				<image class="order-line" src="../../../static/img/user/line.png" mode="widthFix"></image>
				<view class="order-item" @click="orderTap(0)">
					<image class="order-item-image" src="../../../static/img/user/dingdan.png" mode="widthFix"></image>
					<view class="order-item-text">全部订单</view>
				</view>
			</view>
			<view class="item-btn mt20" @click="toMessage">
				<image class="item-btn-icon" src="../../../static/images/mymessage-icon.png" mode="widthFix"></image>
				<view class="item-btn-text flex-row-plus flex-items">
					<label>消息中心</label>
					<view class="messNum" v-if="useritem.notRead>0">{{useritem.notRead}}</view>
				</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="toCollection">
				<image class="item-btn-icon" src="../../../static/images/mycollection-icon.png" mode="widthFix"></image>
				<view class="item-btn-text">我的收藏</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="toQuestion">
				<image class="item-btn-icon" src="../../../static/images/myQuestion-icon.png" mode="widthFix"></image>
				<view class="item-btn-text">我的问答</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="toFootprint">
				<image class="item-btn-icon" src="../../../static/images/myfootprint-icon.png" mode="widthFix"></image>
				<view class="item-btn-text">浏览足迹</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="gouserEvaluate">
				<image class="item-btn-icon" src="../../../static/img/user/pingjia.png" mode="widthFix"></image>
				<view class="item-btn-text">我的评价</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn mt20" @click="memberAccountClick">
				<image class="item-btn-icon" src="../../../static/img/user/fenxiao.png" mode="widthFix"></image>
				<view class="item-btn-text">我的账户</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="couponClick">
				<image class="item-btn-icon" src="../../../static/img/user/kaquan.png" mode="widthFix"></image>
				<view class="item-btn-text">我的卡券</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="godistribution">
				<image class="item-btn-icon" src="../../../static/img/user/fenxiao.png" mode="widthFix"></image>
				<view class="item-btn-text">分销中心</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="applySettle">
			  <image class="item-btn-icon" src="../../../static/img/user/fenxiao.png" mode="widthFix"></image>
			  <view class="item-btn-text">商家入驻</view>
			  <image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn mt20" @click="addressClick">
				<image class="item-btn-icon" src="../../../static/img/user/dizhi1.png" mode="widthFix"></image>
				<view class="item-btn-text">地址管理</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="goafterSale">
				<image class="item-btn-icon" src="../../../static/img/user/shouhou.png" mode="widthFix"></image>
				<view class="item-btn-text">我的售后</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
			<view class="item-btn" @click="goBankcard">
				<image class="item-btn-icon" src="../../../static/img/user/kaquan.png" mode="widthFix"></image>
				<view class="item-btn-text">银行卡</view>
				<image class="item-btn-right" src="../../../static/img/user/arrow.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	const NET = require('../../../utils/request')
	const API = require('../../../config/api')
	const SECRET = require('../../../utils/secret')
	export default {
		data() {
			return {
				item:{},
				infoitem:{},
				useritem:{},
        linkAddress: 'https://ceres.zkthink.com'
			}
		},
		onShow() {
			if(uni.getStorageSync('storage_key')){
				this.item = uni.getStorageSync('storage_key');
			}
			this.getInfo()
			this.GetUser()
		},
		methods: {
			toMessage(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/messageCenter'
					})
				}
			},
			toCollection(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/collection'
					})
				}
			},
			toQuestion(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/questionList'
					})
				}
			},
			toFootprint(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/footprintList'
					})
				}
			},
			GetUser(){
				NET.request(API.GetUser, {}, 'GET').then(res => {
					this.useritem = res.data
				}).catch(res => {

				})
			},
			// 获取会员信息
			getInfo() {
				NET.request(API.Info, {
					token: this.item.token,
				}, 'GET').then(res => {
					this.infoitem = res.data
				}).catch(res => {

				})
			},
			// 个人信息  登录页面
			gologin(){
				uni.navigateTo({
					url:'../../../pages_category_page2/userModule/login'
				})
			},
			goinfo(){
				uni.navigateTo({
					url:'../../../pages_category_page2/userModule/personalDetails?infoitem=' + JSON.stringify(this.infoitem)
				})
			},
			// 我的评论
			gouserEvaluate(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page1/goodsModule/userEvaluate'
					})
				}

			},
			// 分销中心
			godistribution(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page1/distributionModule/index'
					})
				}
			},
      applySettle() {
        const res = uni.getStorageSync('storage_key');
        let token = SECRET.Encrypt(res.token)
        let username = this.useritem.name
        let test = SECRET.Decrypt(token)
        // #ifdef H5
        console.log('h5 test')
        window.open(API.SettledMerchantPrefix + `/#/?username=${username}&user=${token}`)
        // #endif
        // #ifdef APP-PLUS
        plus.runtime.openURL(API.SettledMerchantPrefix + `/#/?username=${username}&user=${token}`, function(e) {
          console.log(e);
        })
        // #endif
        // #ifdef MP-WEIXIN
        console.log('wx test')
        var url = API.SettledMerchantPrefix + `/#/?username=${username}&user=${token}`
        uni.navigateTo({
          url: `../../../pages_category_page1/linkOthers/index?url=${url}`
          // 此处的链接为小程序上面新建的webview页面路径，参数url为要跳转外链的地址
          // url: '../../../pages_category_page1/linkOthers/index?url=' + encodeURIComponent(url)
          // url:'../../../pages_category_page2/userModule/coupon'
        })
        // #endif
      },
			//我的账户
			memberAccountClick(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/memberAccount'
					})
				}
			},
			//我的优惠券
			couponClick(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/coupon'
					})
				}
			},
			// 地址管理
			addressClick(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/address'
					})
				}

			},
			// 我的售后
			goafterSale(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page1/orderModule/afterSale'
					})
				}
			},
			// 我的银行卡
			goBankcard(){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/bankcard'
					})
				}
			},
			//判断是否是分销员
			getApplyState(){
				NET.request(API.HasApply,{
					tenantCode:this.currentId
				},'POST').then(res => {
					uni.hideLoading()
					this.slist = res.data
				}).catch(res => {
					uni.hideLoading()
				})
			},
			orderTap(type){
				if(JSON.stringify(this.item) == '{}'){
					uni.navigateTo({
						url:'../../../pages_category_page2/userModule/login'
					})
				}else{
					uni.navigateTo({
						url:'../../../pages_category_page1/orderModule/index?type='+type
					})
				}
			}
		}
	}
</script>

<style lang='scss'>
	.content {
		height: 100%;
		background-color: #f8f8f8;
		.top-bg{
			width: 100%;
		}
		.page-content{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			z-index: 10;
			margin-top: -230upx;
			.user-info-box{
				width: 100%;
				box-sizing: border-box;
				padding: 30upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				.user-image{
					width: 130upx;
					height: 130upx;
				}
				.user-info{
					flex: 1;
					display: flex;
					flex-direction: column;
					padding-left: 20upx;
					box-sizing: border-box;
					z-index: 10;
					.user-logoin-title{
						font-size:36upx;
						font-weight:500;
						color:rgba(255,255,255,1);
					}
					.user-logoin-lable{
						font-size:24upx;
						font-weight:400;
						color:rgba(255,255,255,1);
						margin-top: 20upx;
					}
				}
				.user-info-right{
					width: 30upx;
					height: 30upx;
				}
			}
			.order-box{
				width:690upx;
				height:170upx;
				background:rgba(255,255,255,1);
				box-shadow:0px 0px 10upx 0px rgba(51,51,51,0.1);
				border-radius:10upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: 30upx;
				z-index: 10;
				.order-line{
					width: 12upx;
					height: 106upx;
				}
				.order-item{
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.order-item-image{
						width: 54upx;
						height: 54upx;
					}
					.order-item-text{
						font-size:28upx;
						margin-top: 10upx;
						font-weight:500;
						color:rgba(102,102,102,1);
					}
				}
			}
			.item-btn{
				width: 100%;
				height: 100upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				box-sizing: border-box;
				background-color: #fff;
				padding: 0 30upx;
				.item-btn-icon{
					width: 48upx;
					height: 48upx;
				}
				.item-btn-text{
					font-size:28upx;
					margin-left: 20upx;
					font-weight:500;
					flex: 1;
					color:rgba(102,102,102,1);
				}
				.messNum{
					margin-left: 10rpx;
					font-size: 16rpx;
					background-color: red;
					color: #FFFFFF;
					width: 30rpx;
					height: 30rpx;
					border-radius: 50%;
					margin-top: -10rpx;
					line-height: 30rpx;
					text-align: center;
				}
				.item-btn-right{
					width: 24upx;
					height: 24upx;
				}

			}
			.mt20{
				margin-top: 20upx;
			}
			.mt1{
				margin-top: 1upx;
			}
		}
	}
</style>
