<template>
	<view class="container flex-items-plus flex-column">
		<view class="login-logoBox">
			<image class="login-logo" src="../../static/images/login-logo.png"></image>
		</view>
		<view class="loginTitle-text flex-column-plus flex-items font-color-666 fs26">
			<label>为了给您提供更好的服务</label>
			<label>我们需要您的授权哦~</label>
		</view>
		<view>
			<!-- #ifdef H5 -->
			<!-- <button class="loginWxBut fs28" @click="GetUserData">微信登录</button> -->
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<button class="loginWxBut fs28" @click="GetUserInfo">微信登录</button>
			<!-- #endif -->
			<view class="loginBut" v-if="noWeixin" @click="goLogin">手机号登录</view>
		</view>
		<view class="flex-row-plus mar-top-30" v-if="noWeixin">
			<label class="font-color-FF7800">还没有账号，</label>
			<view class="register-text" @click="goRegister">去注册</view>
		</view>
	</view>
</template>

<script>
	const NET = require('../../utils/request')
	const API = require('../../config/api')
	export default {
		data() {
			return {
				WXloginQuery:{
					"code": "",
					"salesId": 0,
					"headImg":''
				},
				noWeixin: false
			}
		},
		onLoad(options) {
			// #ifndef MP-WEIXIN
			this.noWeixin = true
			// #endif
		},
		onBackPress(options) {
			this.back();
			return true;
		},
		methods: {
			back(){
				uni.switchTab({
				 url: '../../pages/tabbar/index/index'
				});
			},
			goLogin() {
				uni.navigateTo({
					url: 'accountLogin'
				})
			},
			goRegister() {
				uni.navigateTo({
					url: 'register'
				})
			},
			// H5
			GetUserData(){
				let local = encodeURIComponent('https://ceres.zkthink.com/h5/pages_category_page2/userModule/login')
				console.log(local,888)
				window.location.href =
					"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0713a10bbae8732"+
					+"&redirect_uri="+local
					+"&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
			},
			GetUserInfo(){
				// #ifdef APP-PLUS
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    // 获取用户信息
					uni.getUserInfo({
					  provider: 'weixin',
					  success: function (infoRes) {
						  let wechatOpenId = infoRes.userInfo.openId
						  let avatarUrl = infoRes.userInfo.avatarUrl
						  NET.request(API.WxAppLogin,{
						  	'wechatOpenId':wechatOpenId
						  },'POST').then(res => {
						  	console.log(res,99999)
						  	if(res.data.ifFirst == 0){
								// const item = res.data
								// uni.setStorageSync('storage_key', item);
						  		setTimeout(function(){
						  			uni.switchTab({
						  				url:'../../pages/tabbar/user/index',
						  				success() {
						  					uni.hideLoading()
						  				}
						  			})
						  		uni.removeStorageSync('salesId');
						  		},1000)
						  	}else{
						  		let data = {
						  			wechatOpenId : wechatOpenId,
									headImg : avatarUrl
						  		}
								uni.navigateTo({
									url:'bindPhone?data='+ JSON.stringify(data) 
								})
						  		uni.removeStorageSync('salesId');
						  	}
						  }).catch(res => {
						  	console.log(res,2222)
						  })
					  },
					  fail: () => {
					  	uni.showToast({
					  		title: "微信登录授权失败",
					  		icon: "none"
					  	});
					  }
					});
				  }
				});
				// #endif
				// #ifdef MP-WEIXIN
				const that = this
				uni.login({
					provider: 'weixin',
					success: (res2) => {
						that.WXloginQuery.code = res2.code
					},
					fail: () => {
						uni.showToast({
							title: "微信登录授权失败",
							icon: "none"
						});
					}
				})
				uni.getUserProfile({
					desc:'正在获取',//不写不弹提示框
					success:function(res){
						that.WXloginQuery.headImg = res.userInfo.avatarUrl
						uni.setStorageSync('avatarUrl', res.userInfo.avatarUrl);
						uni.navigateTo({
							url:'mobilePhone'
						})
					},
					fail:function(err){
						uni.showToast({
							title: "微信登录授权失败",
							icon: "none"
						});
					}
				})	
				// #endif
			},
			getWXlogin(){
				console.log('-- start to getWXlogin')
				uni.showLoading({
					title: '正在登录...',
					duration: 2000,
				});
				NET.request(API.WxLogin,{
					code:this.WXloginQuery.code,
					salesId:this.WXloginQuery.salesId,
					headImg:this.WXloginQuery.headImg
				},'POST').then(res => {
					console.log('-- log WxLogin res')
					console.dir(res)
					const item = res.data
					uni.setStorageSync('storage_key', item);
					if (res.code === "200") {
						if(this.noWeixin == false){
							uni.navigateTo({
								url:'mobilePhone'
							})
						}else{
							if(res.data.ifFirst == 0){
								setTimeout(function(){
									uni.switchTab({
										url:'../../pages/tabbar/user/index',
										success() {
											uni.hideLoading()
										}
									})
								uni.removeStorageSync('salesId');
								},1000)
							}else{
								console.log(this.WXloginQuery.headImg,999)
								let data = {
									wechatOpenId : res.data.wechatOpenId,
									headImg : this.WXloginQuery.headImg
								}
								setTimeout(function(){
									uni.navigateTo({
										url:'bindPhone?data='+ JSON.stringify(data) 
									})
								uni.removeStorageSync('salesId');
								},1000)
							}
						}
					}
				}).catch(res => {
					console.log('-- log WxLogin error')
					console.dir(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.login-logoBox {
			margin-top: 154upx;

			.login-logo {
				width: 250upx;
				height: 250upx;
			}
		}

		.loginTitle-text {
			margin-top: 222upx;
		}

		.loginWxBut {
			background-image: linear-gradient(135deg, #FFA100 10%, #FF7911 100%);
			color: #FFFFFF;
			height: 88upx;
			width: 600upx;
			text-align: center;
			line-height: 88upx;
			border-radius: 88upx;
			margin-top: 49upx;
		}

		.loginBut {
			background-color: #FFFFFF;
			color: #FF7800;
			height: 88upx;
			width: 600upx;
			text-align: center;
			line-height: 88upx;
			border-radius: 88upx;
			border: 2upx solid #FF7800;
			margin-top: 30upx;
		}

		.register-text {
			color: #47A7EE;
		}
	}
</style>
