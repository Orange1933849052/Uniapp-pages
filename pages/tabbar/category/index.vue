<template>
	<view class="container">
		<div>
			<searchBar />
		</div>
		<view class="content">
		<!-- 分类中心 -->
			<scroll-view scroll-y class="left-aside">
				<view v-for="(item,index) in flist" :key="item.classifyId" class="f-item b-b" :class="{active: index === currentIndex}" @click="tabtap(item,index)">
					<div>{{item.classifyName}}</div>
					<div class="f-item-num">2888</div>
				</view>
			</scroll-view>
			<scroll-view v-if="slist.length > 0"  scroll-with-animation scroll-y class="right-aside">
				<!-- <u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs> -->
				<div class="tabs">
					<div class="tab-item" @click="changeTab(index)" :class="current===index ? 'active':''" v-for="(item,index) in list" :key="index">
						<span>{{item.name}}</span>
						<span>{{item.num}}</span>
					</div>
				</div>
				<div class="day">
					<div class="day-item" @click="changeClassify(index)" :class="dayCurrent===index ? 'active':''" v-for="(item,index) in dayList" :key="index">
						{{item.name}}
					</div>
				</div>
				<view v-for="item in slist" :key="item.classifyId" class="s-list">
					<text class="s-item">{{item.classifyName}}</text>
					<view class="t-list">
						<view @click="navToList(item.classifyId, titem.classifyId)" class="t-item" v-for="titem in item.childs" :key="titem.classifyId">
							<image :src="titem.classifyImage"></image>
							<text>{{titem.classifyName}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<view v-else class="emptyOrder-box flex-items-plus flex-column ">
				<image class="emptyOrder-img" src="../../../static/images/totalAwardEmpty.png"></image>
				<label class="font-color-999 fs26 mar-top-30">该分类没有商品～</label>
			</view>
		</view>
	</view>
</template>
<script>
	const NET = require('../../../utils/request')
	const API = require('../../../config/api')
	import searchBar from '@/component/search-bar'
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentIndex: 0,
				currentId:'',
				flist: [],
				slist: [],
				list: [
					{
						name:'热销',
						num: 1232
					},
					{
						name: '预告',
						num: 8888
					}
				],
				current: 0,
				dayList: [
					{
						name: '今日上架'
					},
					{
						name: '昨日上架'
					},
					{
						name: '更早上架'
					}
				],
				dayCurrent: 0
			}
		},
		onLoad() {
			this.loadData();
		},
		components:{
			searchBar
		},
		methods: {
			loadData(){
				uni.showLoading({
					title:'加载中...'
				})
				NET.request(API.FindCategoryListByDepth, {
						classifyId: "",
					}, 'GET').then(res => {
					this.flist = res.data
					this.currentId = this.flist[0].classifyId
					uni.hideLoading()
					this.getChildCategory()
				}).catch(res => {
					uni.hideLoading()
				})
			},
			changeTab(e) {
				this.current = e;
			},
			changeClassify(e) {
				this.dayCurrent = e;
			},
			getChildCategory(){
				uni.showLoading({
					title:'加载中...'
				})
				NET.request(API.FindCategoryListByDepth,{
					classifyId:this.currentId
				},'GET').then(res => {
					uni.hideLoading()
					this.slist = res.data
				}).catch(res => {
					uni.hideLoading()
				})
			},
			//一级分类点击
			tabtap(item,index){
				if(this.currentIndex == index){
					return;
				}
				
				this.currentId = item.classifyId;
				
				this.currentIndex = index
				this.getChildCategory()
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
				if(tabs.length > 0){
					this.currentId = tabs[0].pid;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			navToList(sid, tid){
				uni.navigateTo({
					url: `../../../pages_category_page1/goodsModule/goodsList?category3Id=${tid}`
				})
			}
		}
	}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #fff;
	}
	
	.content {
		display: flex;
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #F5F5F5;
		border-right: solid 1px #ddd;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		// height: 100upx;
		font-size: 28upx;
		color: $font-color-base;
		position: relative;
		padding: 30rpx 0;
		.f-item-num{
			// background: #FB3F3D;
			border: 2rpx solid #979797;
			color: #979797;
			font-size: 20rpx;
			border-radius: 30rpx;
			padding: 0 10rpx;
			margin-top: 6rpx;
		}
		&.active{
			color: #FB3F3D;
			background: #FFF3F7;
			.f-item-num{
				border: 2rpx solid #FB3F3D;
				background: #FB3F3D;
				color: #fff;
			}
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 100upx;
				width: 8upx;
				background-color: #FB3F3D;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}
	
	.right-aside{
		flex: 1;
		padding-left: 20upx;
		background: #fff;
		.tabs{
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: space-around;
			padding-top: 30rpx;
			.active{
				position: relative;
				transition: height 1s linear 2s;
				transition-duration: 0.5s;
						transition-property: background-color,color;
				// color: #FB3F3D!important;
				:nth-child(1){
					color: #FB3F3D!important;
					position: relative;
					&:after{
						width: 100%;
						height: 4rpx;
						background: #FB3F3D;
						position: absolute;
						left: 0;
						bottom: -10rpx;
						content: "";
						transition-duration: 0.5s;
						transition-property: background-color,color;
					}
				}
				:nth-child(2){
					border: 2rpx solid #FB3F3D!important;
					color: #fff!important;
					background: #FB3F3D;
				}
			}
			.tab-item{
				display: flex;
				align-items: center;
				:nth-child(1){
					font-size: 32rpx;
					color: #333333;
					margin-right: 10rpx;
				}
				:nth-child(2){
					border: 2rpx solid #979797;
					padding: 0 10rpx;
					border-radius: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 20rpx;
					color: #979797;
				}
			}
		}
		.day{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 40rpx;
			.day-item{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 156rpx;
				height: 50rpx;
				background: #F5F5F5;
				border-radius: 4rpx;
				font-size: 26rpx;
				color: #333333;
			}
			.active{
				background: #FFF3F7;
				color: #FB3F3D;
			}
		}
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		color: $font-color-dark;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;
		
		image{
			width: 140upx;
			height: 140upx;
		}
	}
	.emptyOrder-box{
		margin-left: 180upx;
		.emptyOrder-img{
			width: 200upx;
			height: 200upx;
		}
	}
</style>
