<template>
  <view class="category-list warp" :class="'terminal' + terminal">
    <h2 class="hom-title" :style="{textAlign:componentContent.textAlign}">{{componentContent.title}}</h2>
    <view class="content-warp">
      <view class="ul clearfix" :class="{number5: componentContent.categoryData.length === 5}">
        <view class="li" v-for="(item) of componentContent.categoryData" :key="item.id">
            <view class="item" @click="goCategory(item)">
            <view class="imgBox">
              <image ref="getHeight" :src="item.img" v-show="item.img" :alt="item.name">
            </view>
            </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'categoryList',
    props: {
      terminal: {
        type: Number,
        default: 4
      },
      componentContent: {
        type: Object
      }
    }
  }
</script>
<style lang="scss" scoped>
  .category-list{
    padding: 20upx 0;
    .hom-title{
      font-size: 36upx;
      color: #333;
      line-height: 1em;
      margin-bottom: 23upx;
      font-weight: bold;
      text-align: center;
    }
    .content-warp{
      display: flex;
      .ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .li{
          flex: 1;
          padding: 10upx 0 0 10upx;
          .item{
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .imgBox {
              background-color: #cacaca;
              position: relative;
            }
          }
        }
      }
      .number5 {
        display: block;
        li {
          width: 25%;
          float: left;
        }
        li:nth-child(1) {
          width: 50%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .brand-list {
    }
  }
  .device-xiaochengxu,.device-h5,.device-phone{
    &.brand-list{
    }
  }
</style>
