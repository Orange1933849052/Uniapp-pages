<template>
	<view class="container flex-center flex-column">
		<view class="inStoreBackImg flex-items-plus" v-if="StoreListData.length>0">
			<label>选择进入的店铺</label>
		</view>
		<view v-if="StoreListData.length>0">
			<view class="flex-items-plus flex-column" v-for="(item,index) in StoreListData" :key="index" @click="getStore(item)">
				<view class="store-box flex-row-plus mar-top-30 bor-line-E5E5E5 pad-bot-30">
					<image class="storeLogoImg" :src="item.shopLogo"></image>
					<view class="font-color-656 fs24 mar-left-20">
						<label class="fs30 font-color-333">{{item.shopName}}</label>
						<view class="flex-row-plus mar-top-20">
							<label>等级：{{item.levelName}} </label>
							<view class="mar-left-50">
								总收益：<label class="font-color-FF7800">{{item.price}}</label>元
							</view>
						</view>
						<view class="mar-top-10">关系：<label>{{item.state==1?'有效':'无效'}}</label></view>
					</view>
				</view>
			</view>
		</view>
		<view v-else class="emptyCart-box flex-items-plus flex-column">
			<image class="emptyCart-img" src="../../static/img/bgnull.png"></image>
			<label class="font-color-999 fs26 mar-top-30">这里空空如也~</label>
		</view>
	</view>
</template>

<script>
	const NET = require('../../utils/request')
	const API = require('../../config/api')
	export default {
		data() {
			return {
				currentId: '',
				StoreListData: [],
				StoreListQuery: {
					id: '',
				},
				page: 1,
				pageSize: 20,
				loadingType:0,
			}
		},
		onLoad() {
			this.getStoreList()
		},
		onReachBottom(){
			if(this.loadingType == 1){
				uni.stopPullDownRefresh()
			}else{
				this.page = this.page+1
				this.getStoreList()
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
			back(){
				uni.switchTab({
					url:'../../pages/tabbar/user/index'
				}); 
			},
			getStoreList() {
				uni.showLoading({
					title: '加载中...'
				})
				NET.request(API.FindSaleStoreList, {
					page: this.page,
					pageSize: this.pageSize
				}, 'GET').then(res => {
					uni.hideLoading()
					if(res.data.list.length == 0){
						this.loadingType = 1
						this.page = this.page
					}
					this.StoreListData = this.StoreListData.concat(res.data.list)
				}).catch(res => {
					uni.hideLoading()
				})
			},
			getStore(item) {
				uni.navigateTo({
					url: 'salesIndex?tenantCode=' + JSON.stringify(item)
				});
			}
		}
	}
</script>

<style lang="scss">
	.emptyCart-box{
		margin-top: 70upx;
		.emptyCart-img{
			width: 270upx;
			height: 270upx;
		}
	}
	.container {
		.inStoreBackImg {
			width: 100%;
			height: 100upx;
			background: url(../../static/images/inStoreBackImg.png) no-repeat;
			background-size: 100% 100upx;
			color: #FFFFFF;
		}

		.store-box {
			width: 690upx;

			.storeLogoImg {
				width: 140upx;
				height: 140upx;
			}
		}
	}
</style>
