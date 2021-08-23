<template>
  <view class="hom-pro-list">
      <view v-if="componentContent.arrangeType == '横向滑动'">
        <view class="title">
          <!--<img class="weekStore-titleImg" src="./assets/img/index/weekStore_titleImg.png">-->
          <label>{{componentContent.title}}</label>
        </view>
        <swiper class="weekStore-swiper" indicator-dots='true'>
          <swiper-item class="item" v-for="(item,index) in componentContent.productData.imgTextData" :key="index" @click="goGoods(item)">
			  <view class="store-box-warp">
			  <view class="store-box">
				 <view class="store-backImg">
					 <view class="img-box">
						 <image class="img" :src="item.image">
					 </view>
				   <view class="pad-top-20">
				     <view class="store-namebox flex-items-plus">
				       <label class="store-name fs22">{{item.shopName}}</label>
				       <!--<img class="store-logo mar-left-20" :src="item.storeDTO.logo">-->
				     </view>
				   </view>
				 </view>
				 <view class="storeDetail-box">
				   <view class="pad-top-30">
				     <view class="shop-title fs30 mar-left-20">{{item.productName}}</view>
				   </view>
				   <view class="storePrice-box flex-start flex-row">
				     <view class="flex-items-plus flex-row price-box">
				       <view class="font-color-FF7800">
				         <label class="fs24">¥ </label>
				         <label class="fs30">{{item.price}}</label>
				       </view>
				       <view class="fs24 font-color-999 discountsPrice mar-left-20">
				         <label>¥ </label>
				         <label class="fs24 ">{{item.originalPrice}}</label>
				       </view>
				     </view>
				     <view class="inStoreshop" @click.stop="goStore({shopId:item.shopId})">进店逛逛</view>
				   </view>
				 </view>
			  </view>
			  </view>
          </swiper-item>
        </swiper>
       <!-- <div class="swiper-pagination"></div> -->
      </view>
    <view v-if="componentContent.arrangeType == '一行两个'" class="goodRecommend mar-left-10">
      <view class="title">
        <!--<img class="goodRecommend-titleImg" src="./assets/img/index/goodRecommend_titleImg.png">-->
        <label>{{componentContent.title}}</label>
      </view>
      <view class="goos-box" >
        <view class="goodRecommend-box mar-left-20 mar-top-30 flex-display flex-column" v-for="(item,index) in componentContent.productData.imgTextData" :key="index" @click="goGoods(item)">
          <view class="goodsImg-box">
            <img v-show="item.image" class="img" :src="item.image">
          </view>
          <view class="goodRecommendDetail-box">
            <label class="productName">{{item.productName}}</label>
            <label class="buyCount">{{item.users}}人付款</label>
            <view class="priceBox">
              <view class="price">
                <label class="unit">¥ </label>
                <label class="val"> {{item.price}}</label>
              </view>
              <view class="originalPrice">
                <label class="unit">¥ </label>
                <label class="val"> {{item.originalPrice}}</label>
              </view>
            </view>
            <view class="shopName" @click.stop="goStore(item)">
              <label>{{item.shopName}}</label>
              <!--<img class="storeArrow-icon pad-right-20" src="./assets/images/arrow-right.png">-->
            </view>
          </view>
        </view>
      </view>
    </view>
    </view>
</template>

<script>
  import {funMixin} from '../../../config/mixin'
  export default {
    name: 'imageTextList',
    mixins: [funMixin],
    props: {
      terminal: {
        type: Number,
        default: 4
      },
      componentContent: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .hom-pro-list{
    padding: 30upx 0 42upx;
    .title{
      display: flex;
      align-items:center;
      margin-left: 20upx;
      label{
        font-size: 30upx;
        font-weight: bold;
      }
    }
    .weekStore-swiper {
		margin-top: 30upx;
      padding-left: 30upx;
	  height: 630upx;
	  .store-box-warp{
		  padding-top: 5upx;
		 padding-left: 5upx;
	  }
      .store-box {
        width: 680upx;
        height: 570upx;
		position: relative;
        // border:1px solid #ccc;
        box-shadow: 0px 0px 15upx 0px rgba(52, 52, 52, 0.15);
        border-radius: 10upx;
        overflow: hidden;
        .store-backImg {
          width: 680upx;
          height: 414upx;
          background-repeat: no-repeat;
          position: relative;
          background-color: #f5f5f5;
          .img-box {
            width: 680upx;
            height: 414upx;
			.img{
				width: 100%;
				height: 100%;
			}
          }
        }

        .store-namebox {
          display: inline-block;
          padding:0 50upx 0 10upx;
          height: 40upx;
          line-height: 40upx;
          background-color: #FFFFFF;
          border-radius: 0 20upx 20upx 0;
          position: absolute;
		  top: 20upx;
		  left: 0;
          z-index: 2;
          .store-name {
            padding: 0upx;
          }

          .store-logo {
            width: 38upx;
            height: 38upx;
          }
        }

        .storeDetail-box {
          background-color: #FFFFFF;

          .discountsPrice {
            text-decoration: line-through;
          }

          .price-box {
            padding: 20upx 24upx;
          }

          .inStoreshop {
            position: absolute;
            right: 50upx;
            color: #FFFFFF;
            background-color: #FF7700;
            border-radius: 24upx;
            font-size: 24upx;
            padding: 12upx 24upx;
          }

          .shop-title {
            overflow: hidden;
            text-overflow: ellipsis;
            -ms-text-overflow: ellipsis;
            display: box;
            display: -webkit-box;
            line-clamp: 1;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        }
      }

	  /deep/ .uni-swiper-dots{
	      width: 100%;
	      display: flex;
	      justify-content: center;
	      bottom: 0;
	      .uni-swiper-dot{
	        width: 10upx;
	        height: 10upx;
	        background: #333333;
	        opacity: 0.3;
	        border-radius: 5upx;
	        margin: 0 5upx;
	      }
	      .uni-swiper-dot-active{
	        width: 20upx;
	        height: 10upx;
	        opacity: 1;
	      }
	    }
    }
  }
  /****/
  .goodRecommend {
    .goos-box {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }

    .goodRecommend-titleImg {
      width: 44upx;
      height: 44upx;
    }

    .goodsImg-box {
      width: 336upx;
      height: 336upx;
      background-color: #f5f5f5;
      border-radius: 10upx 10upx 0 0;
      .img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .storeArrow-icon {
      width: 20upx;
      height: 20upx;
    }

    .recommendGoods-title {
      width: 295upx;
      display: block;
      word-break: keep-all;
      /* 不换行 */
      white-space: nowrap;
      /* 不换行 */
      overflow: hidden;
      /* 内容超出宽度时隐藏超出部分的内容 */
    }

    .goodRecommend-box {
      width: 336upx;

      .goodRecommendDetail-box {
        background-color: #FFFFFF;
        box-shadow: 0px 0px 15upx 0px rgba(52, 52, 52, 0.15);
        border-radius: 0 0 10upx 10upx;
        padding: 20upx;
        label{
          font-weight: normal;
        }
        .productName{
          font-size: 28upx;
          color: #333;
          display: block;
          margin-bottom: 18upx;
          height: 40px;
          overflow: hidden;
        }
        .buyCount{
          color: #999;
          font-size: 24upx;
          margin-bottom: 10upx;
          display: block;
        }
        .priceBox{
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 10upx;
          .price{
            color: #FF7800;
            .unit{
              font-size: 24upx;
            }
            .val{
              font-size: 36upx;
            }
          }
          .originalPrice{
            font-size: 24upx;
            color: #999;
            text-decoration: line-through;
          }
        }
        .shopName{
          display: flex;
          justify-content: space-between;
          font-size: 22upx;
          color: #999;
          label{
            color: #999;
          }
        }
      }

      .recommendGoodsDes {
        width: 295px;
      }
    }
  }

  .pad-top-20{padding-top: 20upx;}
  .pad-top-30{padding-top: 30upx;}
  .mar-left-10{margin-left: 10upx;}
  .mar-left-20{margin-left: 20upx;}
  .mar-top-30{margin-top: 30upx;}
  .fs22{font-size: 22upx;}
  .fs24{font-size: 24upx;}
  .fs28{font-size: 28upx;}
  .fs30{font-size: 30upx;}
  .font-color-999{color: #999999;}
  .font-color-FF7800{color: #FF7800;}
  .flex-items-plus{display: flex;justify-content: center;align-items:center;}
  .flex-start{display: flex;justify-content: flex-start;}
  .flex-row{flex-direction: row}
  .align-end{display: flex;align-items:flex-end;}
</style>
