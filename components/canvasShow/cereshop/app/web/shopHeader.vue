<template>
  <view class="header">
    <!-- <image class="logo" src="../../../../../static/assets/img/logo.png" mode="widthFix"> -->
    <view class="search-btn">
      <u-avatar></u-avatar>
      <div class="brand_box">
        <image mode="widthFix" :src="require('@/static/assets/index/shouye_pinpai@2x.png')"></image>
      </div>
      <div class="search_input_box">
        <div class="search_magnifier">
          <image mode="widthFix" :src="require('@/static/assets/index/shouye_sousuo@2x.png')"></image>
        </div>
        <input type="text" placeholder="搜索商品/关键字">
        <div class="search_camera">
          <image mode="widthFix" :src="require('@/static/assets/index/shouye_xiangji@2x.png')"></image>
        </div>
      </div>
      <div class="search_service">
          <image mode="widthFix" :src="require('@/static/assets/index/shouye_kefu@2x.png')"></image>
          <div>客服</div>
      </div>
      <!-- <image class="search-icon" src="@/static/img/searchImg.png" mode="widthFix">
      <view class="search-word">请输入您想要的宝贝</view> -->
    </view>
    <view class="tabs-nav-warp">
      <scroll-view class="tabs-nav" scroll-x="true" v-if="componentContent.category && componentContent.category.length !==0">
        <view class="ul">
          <view class="li" :class="{'on':activeTab===0}" @click="tabChange(0)">首页</view>
          <view class="li" :class="{'on':activeTab===index+1}" v-for="(item,index) in componentContent.category" :key="index" @click="tabChange(index+1,item.id)">
            <!--<router-link :to="{name:'category',params:{classifyData:item}}">-->
              {{item.categoryName}}
            <!--</router-link>-->
          </view>
        </view>
      </scroll-view>
      <div class="arrow_box">
        <u-icon name="arrow-down" size="30" color="#505050"></u-icon>
      </div>
    </view>
  </view>
</template>

<script>
  import {funMixin} from '../../../config/mixin'
  export default {
    name: 'cereHeader',
    mixins: [funMixin],
    props: {
      componentContent: {
        type: Object
      }
    },
    data () {
      return {
        activeTab: 0
      }
    },
    methods: {
      tabChange (index, id) {
        this.activeTab = index
        this.$emit('tabChange', index, id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header{
    .logo {
      width: 190upx;
      height: 30upx;
      margin-left: 30upx;
    }

    .search-btn {
      // width: 690upx;
      height: 66upx;
      // background: rgba(255, 255, 255, 1);
      border-radius: 33upx;
      margin-top: 29upx;
      display: flex;
      padding: 30upx;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .brand_box{
        width: 120upx;
        display: flex;
        align-items: center;
        image{
          width: 100%;
        }
      }
      .search_input_box{
        flex: .8;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border: 3upx solid #ff2724;
        border-radius: 40rpx;
        padding: 15upx;
        input{
          flex: 1;
          padding: 0 55upx;
          font-size: 24upx;
        }
        image{
          width: 100%;
        }
        .search_magnifier{
          position: absolute;
          width: 40upx;
          left: 20upx;
          top: 50%;
          transform: translate(0,-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .search_camera{
          position: absolute;
          width: 40upx;
          right: 20upx;
          top: 50%;
          transform: translate(0,-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .search_service{
        // width: 40rpx;
        text-align: center;
        image{
          width: 40rpx;
        }
      }
      .search-icon {
        width: 36upx;
        height: 36upx;
        margin-left: 33upx;
      }

      .search-word {
        font-size: 26upx;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-left: 10upx;
      }
    }
	.tabs-nav-warp{
	    margin-top: 20upx;
      padding:0 30upx;
      display: flex;
      justify-content: space-between;
      .arrow_box{
        padding: 5upx 0 0 26upx;
        box-shadow: -5upx 0 3upx -2upx #ccc;
      }
      // align-items: center;
	}
    .tabs-nav{
      width: calc(100% - 52upx);
      .ul{
        display: flex;
        .li{
          flex: 1 0 auto;
          margin-left: 36upx;
          font-size: 30upx;
          color: #505050;
          position: relative;
          padding-bottom: 12upx;
          &:first-child{
            margin-left: 0;
          }
          &.on{
            &:after{
              content: '';
              width: 100%;
              height: 4upx;
              background: #FB3F3D;
              // background: url("../../../../../static/assets/img/xian.png") no-repeat center / 100% 100%;
              position: absolute;
              left: 0;
              bottom: 0;
            }
            font-weight:bold;
            color: #FB3F3D;
          }
        }
      }
    }
  }
</style>
