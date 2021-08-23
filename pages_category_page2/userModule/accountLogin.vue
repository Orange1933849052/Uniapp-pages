<template>
	<!-- 登录 -->
	<view class="container flex-items-plus flex-column">
		<view class="login-logoBox">
			<image class="login-logo" src="../../static/images/login-logo.png"></image>
		</view>
		<view class="iphoneNum-box flex-row-plus flex-items">
			<view style=" margin-left:39upx;">
				手机
			</view>
			<view style="margin-left: 50rpx;">
				<input v-model="loginQuery.account" placeholder-class="iphoneNum-input" type="number" placeholder="请输入您的手机号" />
			</view>
		</view>
		
		<view class="flex-row-plus mar-top-20">
			<view class="code-box">
				<view>
					验证码
				</view>
				<view>
					<input v-model="loginQuery.code" style="width: 170upx;margin-left: 20upx;" placeholder-class="codeNum-input" placeholder="请输入验证码" />
				</view>
			</view>
			<view :class="disabled === true ? 'on' : ''" :disabled="disabled" class="getcode" @click="codede">{{text}}</view>
		</view>
		
		<view class="mar-top-60">
			<view class="registerBut mar-top-100" @click="login">登录</view>
		</view>
	</view>
</template>

<script>
	import sendVerifyCode from "@/mixins/SendVerifyCode";
	const NET = require('../../utils/request')
	const API = require('../../config/api')
	export default {
		data() {
			return {
				loginQuery: {
					account: '',
					code: '',
					salesId:'',
				},
				// 获取验证码
				VerifyQuery: {
					phone: ""
				},
				inviteSpell:{},
				inviteSpelltype:false
			}
		},
		mixins: [sendVerifyCode],
		onLoad(options) {
			if(options.inviteSpell == 1){
				this.inviteSpelltype = true
				this.inviteSpell = uni.getStorageSync('inviteSpell');
			}
			this.loginQuery.salesId = uni.getStorageSync('salesId');
		},
		methods: {
			login() {
				let phoneCodeVerification = /^[1][3-9][0-9]{9}$/;
				if (this.loginQuery.account == '') {
					uni.showToast({
						title: '请输入手机号！',
						duration: 2000,
						icon: 'none'
					});
				} else if (!phoneCodeVerification.test(this.loginQuery.account)) {
					uni.showToast({
						title: '请输入正确的手机号！',
						duration: 2000,
						icon: 'none'
					});
				}  else {
					uni.showLoading({
						title: '正在登录...',
						duration: 2000,
					});
					NET.request(API.Login, {
						type:2,
						phone: this.loginQuery.account,
						verificationCode: this.loginQuery.code
					}, 'POST').then(res => {
						uni.hideLoading()
						const item = res.data
						uni.setStorageSync('storage_key', item);
						if(uni.getStorageSync("salesId")){
							let salesId = uni.getStorageSync("salesId")
							let shopId = uni.getStorageSync("shopId")
							this.bindSalesCustomer(salesId,shopId)
							uni.removeStorageSync('salesId');	
							uni.removeStorageSync('shopId');	
						}
						if(this.inviteSpelltype == true){
							setTimeout(function(){
								uni.reLaunch({
									url:'../../pages_category_page1/goodsModule/inviteSpell?collageId=' + this.inviteSpell.collageId + '&orderId=' + this.inviteSpell.orderId + '&type=0'+'&productId='+this.inviteSpell.productId+'&skuId='+this.inviteSpell.skuId
								})
								uni.removeStorageSync('inviteSpell');	
							},2000)
						}else{
							setTimeout(function(){
								uni.switchTab({
									url: '../../pages/tabbar/user/index'
								})
								uni.removeStorageSync('salesId');	
							},2000)
						}
					}).catch(res => {
						uni.hideLoading()
						uni.showToast({
							title: res.data.message,
							duration: 2000,
							icon: 'none',
							duration:1000
						});
					})
				}

			},
			// 获取验证码
			codede() {
				this.getVerify()
			},
			getVerify() {
				let phoneCodeVerification = /^[1][3-9][0-9]{9}$/;
				if (this.loginQuery.account == '') {
					uni.showToast({
						title: '请输入手机号！',
						duration: 2000,
						icon: 'none'
					});
				} else if (!phoneCodeVerification.test(this.loginQuery.account)) {
					uni.showToast({
						title: '请输入正确的手机号！',
						duration: 2000,
						icon: 'none'
					});
				}else {
					this.VerifyQuery.phone = this.loginQuery.account
			
					NET.request(API.Verify, {
						phone: this.VerifyQuery.phone,
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
			//绑定关系
			bindSalesCustomer(salesId,storeId) {
				if (salesId) {
					//如果已登录，静默绑定客户关系，否则跳转到登录页面
					if (uni.getStorageSync('storage_key')) {
						NET.request(API.BindSalesCustomer, {
							shopId:storeId,
							distributorId: salesId
						}, 'POST').then(res => {
							uni.showToast({
								title: "绑定成功",
								icon: "none"
							})
						}).catch(res => {
							uni.showToast({
								title: res.data.message,
								icon: "none"
							})
						})
					} else {
						uni.setStorageSync('salesId',salesId)
						uni.navigateTo({
							url:'login'
						})
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.login-logoBox {
			margin-top: 154upx;

			.login-logo {
				width: 234upx;
				height: 193upx;
			}
		}

		.iphoneNum-box {
			border: 1upx solid #DDDDDD;
			height: 88upx;
			width: 600upx;
			border-radius: 44upx;

			.iphoneNum-input {
				color: #999999;
				font-size: 28upx;
				font-weight: 400;
			}
		}

		.passwordNum-box {
			border: 1upx solid #DDDDDD;
			height: 88upx;
			width: 600upx;
			border-radius: 44upx;

			.passwordNum-input {
				color: #999999;
				font-size: 28upx;
				font-weight: 400;
				width: 346upx;
			}
		}

		.code-box {
			border: 1upx solid #DDDDDD;
			height: 88upx;
			width: 360upx;
			border-radius: 44upx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.code-lab {
				width: 200upx;
			}

			.codeNum-input {
				color: #999999;
				font-size: 28upx;
				font-weight: 400;
				width: 170upx;
			}
		}

		.getcode {
			background-color: #FF7800;
			height: 88upx;
			width: 220upx;
			border-radius: 44upx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-left: 20upx;
			color: #FFFFFF;
		}

		.registerBut {
			background-image: linear-gradient(135deg, #FFA100 10%, #FF7911 100%);
			color: #FFFFFF;
			height: 88upx;
			width: 600upx;
			text-align: center;
			line-height: 88upx;
			border-radius: 88upx;
			margin-top: 17upx;
		}
	}
</style>
