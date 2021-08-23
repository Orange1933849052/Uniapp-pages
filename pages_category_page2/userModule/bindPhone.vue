<template>
	<view class="bindPhone flex-column-plus flex-items">
		<view class="phone-box flex-row-plus flex-items">
			<image class="bindPhone-icon mar-left-40" src="../../static/images/bindPhone-icon.png"></image>
			<input v-model="phone" class="mar-left-40" placeholder="请输入手机号" />
		</view>
		<view class="flex-items-plus flex-row-plus mar-top-30">
			<view class="code-box flex-row-plus flex-items">
				<image class="bindCode-icon mar-left-40" src="../../static/images/bindCode-icon.png"></image>
				<input v-model="code" class="mar-left-40" placeholder="请输入验证码" />
			</view>
			<view @click="codede" :class="disabled === true ? 'codeBut-active' : 'codeBut'">{{text}}</view>
		</view>
		<view :class="disabled === true ? 'confirmBut-active' : 'confirmBut'" @click="bindPhone">确认</view>
		<u-popup v-model="bindPhoneShow" class="popupbind" mode="center" border-radius="14" @close="closepopupbind" :closeable="true" close-icon-pos="top-right" close-icon-size="20">
			<view class="popupbind-box flex-items-plus">
				<view class="flex-column flex-items-plus" style="width: 95%;">
					<view class="fa38 font-color-FF7800">提示</view>
					<view class="mar-top-50" style="width: 90%;">此手机号已经绑定其他微信号，暂时无法与您的微信账号进行绑定。</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import sendVerifyCode from "@/mixins/SendVerifyCode";
	const NET = require('../../utils/request')
	const API = require('../../config/api')
	export default {
		data() {
			return {
				disabled:false,
				phone:'',
				code:'',
				wechatOpenId:'',
				headImg:'',
				bindPhoneShow:false,
				wxData:{}
			};
		},
		onLoad(options) {
			this.wxData = JSON.parse(options.data)
			this.wechatOpenId = this.wxData.wechatOpenId
			this.headImg = this.wxData.headImg
		},
		mixins: [sendVerifyCode],
		methods:{
			closepopupbind(){
				this.bindPhoneShow = false
			},
			codede(){
				let phoneCodeVerification = /^[1][3-9][0-9]{9}$/;
				if (this.phone == '') {
					uni.showToast({
						title: '请输入手机号！',
						duration: 2000,
						icon: 'none'
					});
				} else if (!phoneCodeVerification.test(this.phone)) {
					uni.showToast({
						title: '请输入正确的手机号！',
						duration: 2000,
						icon: 'none'
					});
				}else {
					NET.request(API.Verify, {
						phone: this.phone,
					}, 'GET').then(res => {
						this.sendCode()
					}).catch(res => {
						uni.showToast({
							title: res.data.message,
							duration: 2000,
							icon: 'none',
							duration:1000
						});
					})
				}
			},
			bindPhone(){
				NET.request(API.UpdateWxPhone, {
					phone: this.phone,
					wechatOpenId:this.wechatOpenId,
					headImage:this.headImg,
					verificationCode:this.code
				}, 'POST').then(res => {
					const item = res.data
					uni.setStorageSync('storage_key', item);
					uni.showToast({
						title: '绑定成功',
						duration: 2000,
						icon: 'none',
						duration:1000
					});
					setTimeout(function(){
						uni.switchTab({
							url:'../../pages/tabbar/user/index',
							success() {
								uni.hideLoading()
							}
						})
					},1000)
				}).catch(res => {
					console.log(res,777)
					this.bindPhoneShow = true
				})
			}
		}
	}
</script>

<style lang="scss">
.bindPhone{
	.popupbind-box{
		width: 500rpx;
		height: 300rpx;
	}
	.phone-box{
		margin-top: 120rpx;
		width: 622rpx;
		height: 108rpx;
		border: 3rpx solid #F3F4F5;
		border-radius: 54rpx;
		.bindPhone-icon{
			width: 40rpx;
			height: 53rpx;
		}
	}
	.code-box{
		width: 370rpx;
		height: 108rpx;
		border: 3rpx solid #F3F4F5;
		border-radius: 54rpx;
		.bindCode-icon{
			width: 55rpx;
			height: 51rpx;
		}
	}
	.codeBut{
		height: 108rpx;
		width: 230rpx;
		background: linear-gradient(0deg, #FEA202 0%, #FF7400 100%);
		border-radius: 54rpx;
		line-height: 108rpx;
		text-align: center;
		color: #FFFFFF;
		margin-left: 22rpx;
	}
	.codeBut-active{
		height: 108rpx;
		width: 230rpx;
		background-color: #F3F4F5;
		border-radius: 54rpx;
		line-height: 108rpx;
		text-align: center;
		color: #999999;
		margin-left: 22rpx;
	}
	.confirmBut{
		width: 622rpx;
		height: 108rpx;
		background-color: #F3F4F5;
		border-radius: 54rpx;
		color: #999999;
		font-size: 30rpx;
		margin-top: 140rpx;
		line-height: 108rpx;
		text-align: center;
	}
	.confirmBut-active{
		width: 622rpx;
		height: 108rpx;
		background: linear-gradient(0deg, #FEA202 0%, #FF7400 100%);
		border-radius: 54rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		margin-top: 140rpx;
		line-height: 108rpx;
		text-align: center;
	}
}
</style>
