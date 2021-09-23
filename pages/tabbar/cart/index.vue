<template>
	<view class="content">
		<!-- 购物车 -->
		<view v-if="dataList.length>0">
			<view class="cart-bg">
				<view class="cart-num-box">
					<image class="dizhi-box" :src="require('@/static/assets/car/gwc_dizhi_@2x.png')"></image>
					<text class="title_box">购物车</text>
					<text class="btn-box" @click="btnTypeClick(1)" v-if="btnType == 0">管理</text>
					<text class="btn-box" @click="btnTypeClick(0)" v-if="btnType == 1">完成</text>
				</view>
			</view>
			<view class="cart-list-box">
				<view v-for="(item, index) in dataList" :key="item.shopId">
					<view class="item">
						<view class="shop-box">
							<image v-if="item.selected == 1" src="../../../static/assets/car/gwc_gouxuan_@2x.png" class="cart-select-img"  @click="updateShopSel(index,0)"></image>
							<image v-else src="../../../static/images/select-empty.png" class="cart-select-img" @click="updateShopSel(index,1)"></image>
							<view class="shop-name-box" @click="goStore(index)">
								<image src="../../../static/images/orderStore-icon.png" class="shop-img"></image>
								<text class="shop-name">{{item.shopName}}</text>
								<image src="../../../static/img/user/arrow.png" class="arrow-right-img"></image>
							</view>
						</view>
						<view v-for="(skuItem, cIndex) in dataList[index].skus" :key="cIndex" class="product-list-box">
							<view class="pro-item" @click="goodsDateils(item.shopId,skuItem.productId,skuItem.skuId)">
								<image v-if="skuItem.selected == 1" src="../../../static/assets/car/gwc_gouxuan_@2x.png" @click.stop="cartItemSel(index,cIndex,0)"  class="cart-select-img"></image>
								<image v-else src="../../../static/images/select-empty.png" @click.stop="cartItemSel(index,cIndex,1)" class="cart-select-img"></image>
								<view class="pro-r">
									<image :src="skuItem.image" class="pro-img"></image>
									<view class="pro-r-r">
										<view class="pro-name">{{skuItem.productName}}</view>
										<view class="sku-box" @click.stop="popupShow(skuItem)">
											<text v-if="skuItem.value">{{skuItem.value}} <span style="padding-left:8rpx">x{{skuItem.number}}</span></text>
											<text v-else>默认规格</text>
											<!-- <text>{{skuItem.number}}</text> -->
											<image v-if="false" src="../../../static/images/arrow-down.png" class="arrow-down-img"></image>
										</view>
										<div class="sku-img">
											<image :src="require('@/static/assets/car/gwc_tuihuan_@2x.png')"></image>
										</div>
										<view class="pro-price-num-box">
											<view class="pro-price-box">
												<text>结算价￥</text>
												<text>{{skuItem.price}}</text>
											</view>
											<!-- <view class="pro-num-box">
												<text class="num-btn r" @click.stop="numSub(index,cIndex)">-</text>
												<text class="num">{{skuItem.number}}</text>
												<text class="num-btn l" @click.stop="numAdd(index,cIndex)">+</text>
											</view> -->
										</view>
									</view>
								</view>
							</view>
						</view>
						<div class="remarks" @click.stop="addRemarks(item)">
							<div>
								<span style="padding-right:6rpx">添加备注</span>
								<u-icon name="arrow-right" color="#888888"></u-icon>
							</div>
						</div>
					</view>
				</view>
			</view>
			<!-- #ifdef H5 -->
			<view class="cart-bottom-box-h5">
			<!-- #endif -->
			<!-- #ifndef H5 -->
			<view class="cart-bottom-box-app">
			<!-- #endif -->
				<view class="cart-bottom">
					<view class="left">
						<image v-if="isAllCheck" src="../../../static/assets/car/gwc_gouxuan_@2x.png" class="cart-select-img" @click="allSel(0)"></image>
						<image v-else src="../../../static/images/select-empty.png" class="cart-select-img" @click="allSel(1)"></image>
						<text>全选</text>
					</view>
					<view class="right" v-if="btnType == 0">
						<view class="price-box">
							<text>合计：</text>
							<text class="price">¥{{checkMoney}}</text>
						</view>
						<view class="btn-confirm" @click="settlementTap" :style="noChoose ? 'background: #E5E5E5;color: #333333;':''">结算</view>
					</view>
					<view class="right" v-if="btnType == 1">
						<view class="btn-confirm" @click="cartDel" :style="noChoose ? 'background: #E5E5E5;color: #333333;':''">删除</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 购物车为空 -->
		<view v-if="dataList.length===0" class="emptyCart-box flex-items-plus flex-column">
			<image class="emptyCart-img" src="../../../static/images/cartEmpty.png"></image>
			<label class="font-color-999 fs26 mar-top-30">你的购物车还没有宝贝哦</label>
			<label class="font-color-999 fs26 mar-top-10">快去首页选一个吧～</label>
		</view>
		<u-popup class="car-popup" v-model="show" v-if="popupData" mode="bottom">
			<div class="car-popup-container">
				<div class="head">
					<div class="head-left">
						<image :src="popupData.image" mode="widthFix" />
					</div>
					<div class="head-middle">
						<div class="h-m-top">
							<span>¥</span>
							<span>{{popupData.price}}</span>
						</div>
						<div class="h-m-bottom">
							{{popupData.price}}+人已购买
						</div>
					</div>
					<div class="head-right">
						<u-icon name="close-circle" color="#B6B6B6" size="45"></u-icon>
					</div>
				</div>
				<div class="content">
					<div class="c-title">颜色分类(3)</div>
					<scroll-view scroll-y="true" class="content-scroll">
						<div v-for="(item, index) in 10" :class="csCurrent===index?'active':''" @click="cItemClick(item,index)" :key="index" class="c-s-item">
							005橡芽白/深苔藓绿
						</div>
					</scroll-view>
				</div>
				<div class="foot">
					<div class="f-title">鞋码</div>
					<scroll-view scroll-x="true" class="foot-scroll">
						<div @click="footClick(item,index)" :class="index===footCurrent?'active':''" v-for="(item,index) in 10" :key="index" class="f-item">
							43
						</div>
					</scroll-view>
				</div>
				<div class="btn">
					<div>确认</div>
				</div>
			</div>
		</u-popup>
		<u-popup class="remark-popup" mode="center" v-model="remarkShow" border-radius="16">
			<div class="remark-container">
				<div class="title">添加备注</div>
				<div class="textarea">
					<textarea placeholder="请输入备注信息" />
				</div>
				<div class="btn">
					<div @click="remarkShow = false">取消</div>
					<div>确认</div>
				</div>
			</div>
		</u-popup>
	</view>
</template>

<script>
	const NET = require('../../../utils/request')
	const API = require('../../../config/api')
	export default {
		data() {
			return {
				title: 'Hello',
				btnType:0,
				dataList:[],
				goosDetailshowFlag:false,
				colorActiveId:1,
				colorList:[{id:1,color:'复古蓝色'},{id:2,color:'马卡龙粉色'}],
				modelNumActiveId:1,
				modelNumList:[{id:1,modelNum:'小号'},{id:2,modelNum:'中号'},{id:3,modelNum:'大号'}],
				skuItemList:[],
				buyNum:1,
				allNum: 0,
				checkNum: 0,
				checkMoney: 0,
				isAllCheck: true,
				skuProdList:{},
				item:{},
				noChoose: false,
				show: false,
				popupData: null,
				csCurrent: '',
				footCurrent: '',
				remarkShow: false,
				remark: ''
			}
		},
		onLoad() {

		},
		watch: {
			checkMoney(n,o){
				if (n === 0) {
					this.noChoose = true;
				} else {
					this.noChoose = false;
				}
			}
		},
		onShow() {
			//判断是否登录
			let item = {}
			if(uni.getStorageSync('storage_key')){
				item = uni.getStorageSync('storage_key');
			}
			if(JSON.stringify(item) == '{}'){
				uni.navigateTo({
					url:'../../../pages_category_page2/userModule/login'
				})
			}else{
				this.getDataList()
			}
		},
		methods: {
			addRemarks(e){
				this.remarkShow = true;
			},
			footClick(e,index){
				this.footCurrent = index;
			},
			cItemClick(e,index){
				this.csCurrent = index;
				console.log(this.csCurrent);
			},
			popupShow(e) {
				this.popupData = e;
				setTimeout(() => {
					this.show = true;
				}, 100);
				console.log(123);
			},
			//逛店铺
			goStore(index) {
				uni.navigateTo({
					url: '../../../pages_category_page1/store/index?storeId=' + this.dataList[index].shopId
				})
			},
			//商品详情
			goodsDateils(shopId,productId,skuId){
				uni.navigateTo({
					url: '../../../pages_category_page1/goodsModule/goodsDetails?shopId='+shopId + '&productId='+productId +'&skuId='+skuId
				})
			},
			btnTypeClick(type){
				this.btnType = type
			},
			getDataList(){
				wx.showLoading({
					  title: '加载中...',
				})
				NET.request(API.ShoppingCart,{},'GET').then(res => {
					  wx.hideLoading()
					  this.dataList = res.data
					  this.allNum = this.dataList.length
					  this.updateMoneyAndNum()
				}).catch(res => {
					  wx.hideLoading()
				})
			},
			// 数量减
			numSub(index,cIndex) {
				if (this.dataList[index].skus[cIndex].number > 1) {
					this.dataList[index].skus[cIndex].number = this.dataList[index].skus[cIndex].number - 1
					this.updateCart(this.dataList[index].skus[cIndex].skuId,this.dataList[index].skus[cIndex].number)
				} else {
				  uni.showToast({
					title: '亲！至少一件哦！',
					icon:"none"
				  })
				}
			},
			// 数量加
			numAdd(index,cIndex) {
				if (this.dataList[index].skus[cIndex].number <= 100) {
				  this.dataList[index].skus[cIndex].number = this.dataList[index].skus[cIndex].number + 1
				  this.updateCart(this.dataList[index].skus[cIndex].skuId,this.dataList[index].skus[cIndex].number)
				} else {
				  wx.showToast({
					title: '库存不足！',
					icon: 'none'
				  })
				}
			},
			updateMoneyAndNum() {
				this.isAllCheck = true
				this.allNum = 0
				this.checkNum = 0
				this.checkMoney = 0
			    let len = this.dataList.length
			    for (let i = 0; i < len; i++) {
			      let len2 = this.dataList[i].skus.length
			      for (let j = 0; j < len2; j++) {
			        let item = this.dataList[i].skus[j]
			        this.allNum += item.number
			        if (item.selected == 1) {
			          this.checkNum ++
			          this.checkMoney += parseFloat(item.price * item.number)
			        } else {
			          if (this.isAllCheck) {
			            this.isAllCheck = false
			          }
			        }
			      }
			    }
				this.checkMoney = parseFloat(this.checkMoney.toFixed(10))
			},
			updateShopSel(index, type) {
				let shopCarts = [{
					shopId:'',
					skus:[]
				}]
				this.dataList[index].selected = type
				let len = this.dataList[index].skus.length
				for (let i = 0; i < len; i++) {
					this.dataList[index].skus[i].selected = type
					var skusobj = {};
					skusobj["skuId"] = this.dataList[index].skus[i].skuId;
					skusobj["selected"] = this.dataList[index].skus[i].selected
					shopCarts[0].skus.push(skusobj);
				}
				shopCarts[0].shopId = this.dataList[index].shopId

				this.updateSelected(shopCarts)
			},
			//选中商品
			updateSelected(shopCarts){
				this.updateMoneyAndNum()
				NET.request(API.SelectedCart, {
					shopCarts
				}, 'PUT').then(res => {
				}).catch(res => {

				})
			},
			updateCart(skuId,number) {
			    NET.request(API.UpdateNumberCart, {
					skuId: skuId,
					number: number
				}, 'PUT').then(res => {
					this.updateMoneyAndNum()
			    }).catch(res => {

			    })
			},
			cartItemSel(index,cIndex,type) {
				let shopCarts = [{
					shopId:0,
					skus:[]
				}]
			    this.dataList[index].skus[cIndex].selected = type
			    if(type == 1){
			      let len =  this.dataList[index].skus.length
			      let shopType = 1
			      for(let i = 0 ;i < len; i++){
			          if(this.dataList[index].skus[i].selected == 0){
			            shopType = 0
			            break
			          }
			      }
			      this.dataList[index].selected = shopType
			    }else{
					this.dataList[index].selected = type
			    }

				shopCarts[0].shopId = this.dataList[index].shopId
				var skusobj = {};
				skusobj["skuId"] = this.dataList[index].skus[cIndex].skuId;
				skusobj["selected"] = this.dataList[index].skus[cIndex].selected
				shopCarts[0].skus.push(skusobj);
			    this.updateSelected(shopCarts)
			},
			//全选
			allSel(type) {
			    this.updateAllSel(type)
			},
			updateAllSel(type) {
			    let len = this.dataList.length
			    for (let i = 0; i < len; i++) {
			      let len2 = this.dataList[i].skus.length
			      this.dataList[i].selected = type
			      for (let j = 0; j < len2; j++) {
			        this.dataList[i].skus[j].selected = type
			      }
			    }
				let shopCarts = []
			    this.updateSelected(shopCarts)
			},
			//点击删除
			cartDel() {
			    if (!this.checkNum) {
			      uni.showToast({
			        title: '请先选择对应商品',
			        icon: 'none'
			      })
			      return;
			    }
			    uni.showModal({
			      title: '温馨提示',
			      content: '您确定要删除所选中的商品吗？',
			      success: res => {
			        if (res.confirm) {
			          this.doDelete()
			        } else if (res.cancel) {
			          console.log('用户点击取消')
			        }
			      }
			    })
			},
			//删除购物车
			doDelete() {
			    let cartList = []
				let n = 0
				let skus = []
			    let len = this.dataList.length
			    for (let i = 0; i < len; i++) {
			      let item = {}
			      let len2 = this.dataList[i].skus.length

			      for (let j = 0; j < len2; j++) {
			        let itemGoods = this.dataList[i].skus[j]
			        if (itemGoods.selected == 1) {
						skus[n] = itemGoods.skuId
						n = n+1
			        }
			      }
			    }
			    NET.request(API.DeleteCart, {ids:skus}, 'DELETE').then(res => {
			      this.getDataList()

			    }).catch(res => {

			    })

			},
			//结算购物车
			settlementTap() {
				if (!this.checkNum) {
				  wx.showToast({
					title: '请先选择对应商品',
					icon: 'none'
				  })
				  return;
				}
				console.log(this.dataList,222)
				let addCart = []
				let len = this.dataList.length
				for (let i = 0; i < len; i++) {
					let shopObj = {}
					shopObj["shopId"] = this.dataList[i].shopId
					shopObj["skus"] = []
					let len2 = this.dataList[i].skus.length
					for (let j = 0; j < len2; j++) {
						let skusObj = {}
						skusObj["ifLogistics"] = this.dataList[i].skus[j].ifLogistics
						skusObj["number"] = this.dataList[i].skus[j].number
						skusObj["selected"] = this.dataList[i].skus[j].selected
						skusObj["skuId"] = this.dataList[i].skus[j].skuId
						shopObj.skus.push(skusObj)
					}
					addCart.push(shopObj)
				}
				let newArray = []
				addCart.forEach((item,index)=>{
				    newArray[index] = item
				    newArray[index].skus = item.skus.filter((item) => {
				        return item.selected == 1
				    })
					if(item.skus.length == 0){
						newArray.splice(index,1);
					}
				})
				newArray = newArray.filter(d=>d)
			    uni.setStorageSync('skuItemDTOList', newArray)
			    uni.navigateTo({
				  url:'../../../pages_category_page1/orderModule/orderConfirm?type=2'
			    })
			},
			//商品尺寸弹窗
			goosDetailshowClick(storeId,skuItemId){
				this.goosDetailshowFlag = true
				this.colorActiveClick(storeId,skuItemId)
			},
			//颜色选中事件
			colorActiveClick(storeId,attrItemId){
				this.colorActiveId = attrItemId
				NET.request(API.QueryProductSku, {
				      productId: storeId,
				      skuValueIdList: [attrItemId]
				    }, 'POST').then(res => {
				      if (res.code === 0) {
				          this.skuProdList = res.data
						  this.skuProdId = res.data.id
						  this.skuImg = res.data.skuImg
						  this.skuNameStr = res.data.skuNameStr
						  this.skuPrice = res.data.skuPrice
				      }

				    }).catch(res => {

				})
			},
		}
	}
</script>

<style lang="scss">
	page {
	  background: #f7f7f7;
	}
	.content {
		padding: 0 0 110upx;
		overflow: hidden;
		.cart-bg {
		  width: 100%;
		//   height: 230upx;
			position: relative;
		  	background: linear-gradient(135deg, #EC3A17 0%, #D50A2F 100%);
		  .cart-num-box {
		    display: flex;
		    flex-direction: row;
		    align-items: center;
		    justify-content: space-between;
			// .num-box {
			//   padding: 30upx 0 30upx 30upx;
			//   box-sizing: border-box;
			//   font-size: 30upx;
			//   color: #fff;
			// }
			.dizhi-box{
				width: 42rpx;
				height: 42rpx;
				padding-left: 60rpx;
			}
			.btn-box {
			  font-size: 27upx;
			  color: #fff;
			  padding: 30upx;
			  box-sizing: border-box;
			  display: inline-block;
			}
			.title_box{
				// position: absolute;
				// left: 50%;
				// top: 50%;
				// transform: translate(-50%,-50%);
				font-size: 32rpx;
				color: #fff;
			}
		  }
		}
		.cart-list-box {
		//   margin-top: -130upx;
		  padding: 0 30upx;
		  box-sizing: border-box;
		  .item {
		    background: #fff;
		    border-radius: 10upx;
		    margin-bottom: 20upx;
			.shop-box {
			  display: flex;
			  flex-direction: row;
			  align-items: center;
			  border-bottom: 1px solid #eee;
			  .cart-select-img {
			    width: 98upx;
			    height: 98upx;
			    padding: 30upx;
			    box-sizing: border-box;
			  }
			  .shop-name-box{
			    display: flex;
			    flex-direction: row;
			    align-items: center;
				.shop-img {
				  width: 36upx;
				  height: 36upx;
				  margin-right: 10upx;
				}
				.shop-name {
				  font-size: 30upx;
				  color: #333;
				  font-weight: bold;
				  display: inline-block;
				  margin-left: 10upx;
				}
				.arrow-right-img {
				  width: 30upx;
				  height: 30upx;
				  box-sizing: border-box;
				  margin-left: 30upx;
				}
			  }
			}
			.remarks{
				padding:0 0 20rpx 98rpx;
				display: flex;
				div{
					padding: 0 14rpx;
					height: 54rpx;
					background: #F5F5F5;
					border-radius: 4rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #888888;
					font-size: 24rpx;
				}
			}
			.product-list-box{
				.pro-item {
				  display: flex;
				  flex-direction: row;
				  align-items: center;
				  .cart-select-img {
				    width: 98upx;
				    height: 98upx;
				    padding: 30upx;
				    box-sizing: border-box;
				  }
				  .pro-r{
				    flex: 1;
				    border-bottom: 1px solid #eee;
				    display: flex;
				    flex-direction: row;
				    padding: 30upx 30upx 30upx 0;
				    box-sizing: border-box;
				    overflow: hidden;
					.pro-img {
					  width: 180upx;
					  height: 180upx;
					  border-radius: 10upx;
					  margin-right: 30upx;
					}
					.pro-r-r {
					  flex: 1;
					  font-size: 26upx;
					  color: #333;
					  overflow: hidden;
					  display: flex;
					  flex-direction: column;
					  justify-content: space-between;
					  .sku-img{
						  margin-top: 20rpx;
						image{
								width: 170rpx;
								height: 30rpx;
						}
					  }
					  .pro-name {
					    // height: 66upx;
					    line-height: 33upx;
					    display: -webkit-box;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    word-break: break-all;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 1;
					  }
					  .sku-box {
					    width: 100%;
					    height: 40upx;
					    background: #f0f0f0;
					    border-radius: 4upx;
					    display: flex;
					    flex-direction: row;
					    align-items: center;
					    justify-content: space-between;
					    padding: 0 0 0 10upx;
					    box-sizing: border-box;
					    font-size: 24upx;
					    color: #999;
						margin-top: 10rpx;
						.arrow-down-img {
						  width: 40upx;
						  height: 40upx;
						  padding: 10upx;
						  box-sizing: border-box;
						}
					  }
					  .pro-price-num-box {
					    display: flex;
					    flex-direction: row;
					    align-items: center;
					    justify-content: space-between;
						.pro-price-box {
						  font-size: 28upx;
						  color: #FB3F3D;
						  font-weight: 400;
						  
						}
						.pro-num-box{
						  width: 140upx;
						  height: 36upx;
						  border: 1px solid #ddd;
						  border-radius: 4upx;
						  display: flex;
						  flex-direction: row;
						  justify-content: space-between;
						  .num-btn{
						    font-size: 34upx;
						    color: #666;
						    display: inline-block;
						    width: 40upx;
						    text-align: center;
						    line-height: 32upx;
						  }
						  .num-btn.r {
						    border-right: 1px solid #ddd;
						  }
						  .num-btn.l {
						    border-left: 1px solid #ddd;
						  }
						  .num {
						    font-size: 26upx;
						    color: #333;
						  }
						}
					  }
					}
				  }
				}
				.pro-item:last-of-type .pro-r {
				  border-bottom: none;
				}
			}
		  }
		}
		.emptyCart-box{
			margin-top: 70upx;
			.emptyCart-img{
				width: 270upx;
				height: 270upx;
			}
		}
		.cart-bottom-box-h5{
			position: fixed;
			bottom: 100upx;
			width: 100%;
		}
		.cart-bottom-box-app{
			position: fixed;
			bottom: 0upx;
			width: 100%;
		}
			.cart-bottom{
				height: 110upx;
				background: #fff;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				border-top: 1upx solid #eee;
			}
			.left {
			  display: flex;
			  flex-direction: row;
			  align-items: center;
			  font-size: 28upx;
			  color: #666;
			  .cart-select-img {
			    width: 98upx;
			    height: 98upx;
			    padding: 30upx;
			    box-sizing: border-box;
			  }
			}
			.right {
			  display: flex;
			  height: 100%;
			  flex-direction: row;
			  align-items: center;
			//   padding: 0 30upx 0 0;
			  box-sizing: border-box;
			  .price-box {
			    font-size: 30upx;
			    color: #333;
				.price {
				  color: #FB3F3D;
				  font-weight: bold;
				}
			  }
			  .btn-confirm {
			    width: 215upx;
			    height: 100%;
			    background: #FB3F3D;
			    // border-radius: 40upx;
			    margin-left: 18upx;
			    display: flex;
				justify-content: center;
				align-items: center;
			    font-size: 28upx;
			    color: #fff;
			  }
			  .btn-delete {
			    width: 150upx;
			    height: 60upx;
			    line-height: 60upx;
			    text-align: center;
			    border: 1px solid #ff7911;
			    border-radius: 40upx;
			    font-size: 28upx;
			    color: #ff7911;
			  }
			}

		.goosDetailshow-box{
			.detailImg-box{
				margin-top: 30upx;
				margin-left: 30upx;
				border-radius: 10upx;
				border-bottom: 1upx solid #EDEDED;
				padding-bottom: 20upx;
				width: 690upx;
				.detailImg{
					width: 180upx;
					height: 180upx;
				}
			}
			.color-box{
				padding: 30upx 30upx;
				border-bottom: 1upx solid #EDEDED;
				width: 690upx;
				.colorName-box{
					display: flex;
					flex-wrap: wrap;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					margin-top: 30upx;
					margin-left: -30upx;
					.colorName-on{
						background-color: #FFE5D0;
						color: #FF7800;
						margin-left: 30upx;
						padding: 10upx 32upx;
						border-radius: 28upx;
						border: 1upx solid #FF7800;
						font-size: 26upx;
						text-align: center;
						z-index: 1;
					}
					.colorName{
						background-color: #F5F5F5;
						margin-left: 30upx;
						padding: 10upx 32upx;
						border-radius: 28upx;
						font-size: 26upx;
						z-index: 2;
					}
				}

			}
			.modelNum-box{
				padding: 30upx 30upx;
				border-bottom: 1upx solid #EDEDED;
				width: 690upx;
				.modelNumName-box{
					display: flex;
					flex-wrap: wrap;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					margin-top: 30upx;
					margin-left: -30upx;
					.modelNumName-on{
						background-color: #FFE4D0;
						color: #FF7800;
						margin-left: 30upx;
						padding: 10upx 32upx;
						border-radius: 28upx;
						border: 1upx solid #FF7800;
						font-size: 26upx;
						text-align: center;
					}
					.modelNumName{
						background-color: #F5F5F5;
						margin-left: 30upx;
						padding: 10upx 32upx;
						border-radius: 28upx;
						font-size: 26upx;
					}
				}
			}
			.goodsNum-box{
				padding: 30upx 30upx;
				width: 690upx;
				padding-bottom: 268upx;
				.goodsNumber{
					border: 1upx solid #999999;
					padding: 3upx 20upx;
				}
				.subtract{
					border: 1upx solid #999999;
					padding: 3upx 20upx;
					margin-right:-1rpx;
				}
				.add{
					border: 1upx solid #999999;
					padding: 3upx 20upx;
					margin-left:-1rpx;
				}
			}
			.goosDetailbut-box{
				.joinShopCartBut{
					width: 343upx;
					height: 80upx;
					border-radius: 40upx 0 0 40upx;
					background-color: #FFC300;
					color: #FFFEFE;
					font-size: 28upx;
					line-height: 80upx;
					text-align: center;
					margin-left: 30upx;
				}
				.buyNowBut{
					width: 343upx;
					height: 80upx;
					border-radius: 0 40upx 40upx 0;
					background-color: #FF6F00;
					color: #FFFEFE;
					font-size: 28upx;
					line-height: 80upx;
					text-align: center;
				}
			}
		}
		.car-popup{
			.car-popup-container{
				padding: 20rpx;
				.head{
					display: flex;
					align-items: center;
					justify-content: space-between;
					height: 118rpx;
					padding: 10rpx 0;
					border-bottom: 2rpx solid #D8D8D8;
					.head-left{
						width: 118rpx;
						border: 2prx solid #D8D8D8;
						image{
							width: 100%;
						}
					}
					.head-middle{
						flex: 1;
						margin-left: 20rpx;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.h-m-top{
							color: #FB3F3D;
							:nth-child(1){
								padding-right: 10rpx;
							}
							:nth-child(2){
								font-size: 38rpx;
							}
						}
						.h-m-bottom{
							color: #979797;
							font-size: 27rpx;
						}
					}
				}
				.content{
					margin-top: 15rpx;
					.content-scroll{
						height: 274rpx;
						width: 100%;
						display: flex;
						font-size: 26rpx;
						/deep/ .uni-scroll-view-content{
							display: flex;
							flex-wrap: wrap;
							.c-s-item{
								background: #F5F5F5;
								border-radius: 8rpx;
								padding: 15rpx;
								margin: 20rpx 20rpx 0 0;
								border: 2rpx solid #F5F5F5;
							}
							.active{
								background: #fff;
								color: #FB3F3D;
								border: 2rpx solid #FB3F3D;
							}
						}
					}
				}
				.foot{
					.foot-scroll{
						width: 100%;
						font-size: 26rpx;
						/deep/ .uni-scroll-view-content{
							display: flex;
							flex-wrap: nowrap;
							.f-item{
								background: #F5F5F5;
								border-radius: 8rpx;
								padding: 2rpx 30rpx;
								margin: 20rpx 20rpx 0 0;
								border: 2rpx solid #F5F5F5;
							}
							.active{
								background: #fff;
								color: #FB3F3D;
								border: 2rpx solid #FB3F3D;
							}
						}
					}
				}
				.btn{
					display: flex;
					margin-top: 90rpx;
					padding-bottom: calc(env(safe-area-inset-bottom) + 10rpx);
					div{
						width: 670rpx;
						height: 92rpx;
						background: #FB3F3D;
						border-radius: 50rpx;
						opacity: 0.9;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #fff;
						font-size: 32rpx;
					}
				}
			}
		}
		.remark-popup{
			.remark-container{
				width: 574rpx;
				.title{
					text-align: center;
					font-size: 32rpx;
					color: #333333;
					padding: 30rpx 30rpx 24rpx 30rpx;
				}
				.textarea{
					background: #E5E5E5;
					border-radius: 8rpx;
					height: 200rpx;
					margin: 0rpx 30rpx 0 30rpx;
					overflow: hidden;
					textarea{
						width: 95%;
						height: 100%;
						padding: 20rpx;
						font-size: 26rpx;
					}
				}
				.btn{
					display: flex;
					width: 100%;
					align-items: center;
					height: 96rpx;
					border-top: 2rpx solid #D8D8D8;
					margin-top: 25rpx;
					div{
						flex: .5;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 29rpx;
						color: #333333;
					}
					:nth-child(1){
						border-right: 2rpx solid #D8D8D8;
					}
					:nth-child(1):active{
						background: #d8d8d8ab;
					}
					:nth-child(2):active{
						background: cornflowerblue;
						color: #fff;
					}
				}
			}
		}
	}
</style>
