<template>
  <view class="header">
    <image class="logo" src="../../../../../static/assets/img/logo.png" mode="widthFix">
    <view class="search-btn" @click="searchPro">
      <image class="search-icon" src="../../../../../static/img/searchImg.png" mode="widthFix">
      <view class="search-word">请输入您想要的宝贝</view>
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
      width: 690upx;
      height: 66upx;
      background: rgba(255, 255, 255, 1);
      border-radius: 33upx;
      margin-top: 29upx;
      display: flex;
      margin-left: 30upx;
      flex-direction: row;
      align-items: center;

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
	}
    .tabs-nav{
      .ul{
        display: flex;
        .li{
          flex: 1 0 auto;
          margin-left: 36upx;
          font-size: 30upx;
          color: #fff;
          position: relative;
          padding-bottom: 18upx;
          &:first-child{
            margin-left: 0;
          }
          &.on{
            &:after{
              content: '';
              width: 100%;
              height: 8upx;
              background: url("../../../../../static/assets/img/xian.png") no-repeat center / 100% 100%;
              position: absolute;
              left: 0;
              bottom: 0;
            }
            font-weight:bold;
          }
        }
      }
    }
  }
</style>
