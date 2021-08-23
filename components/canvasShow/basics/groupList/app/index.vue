<template>
  <div class="hom-pro-list" v-if="productData.length !== 0">
    <div class="title">
      <label>{{componentContent.title}}</label>
      <a class="btn-all a-link" @click="goGroupWorks(shopId!==0 && {shopId:shopId,id:componentContent.shopGroupWorkId})">查看全部<i class="iconfont icon-arrow-right"></i></a>
    </div>
    <div class="pro-box" >
      <div class="pro-item" v-for="(item,index) in productData" :key="index" @click="goGoods(item)">
        <div class="pro-item-img">
          <img v-show="item.image" class="img" :src="item.image">
        </div>
        <div class="pro-item-info">
          <label class="name">{{item.productName}}</label>
          <div class="price">
            <label class="unit">¥ </label>
            <label class="val"> {{item.price}}</label>
          </div>
          <label class="buyCount" v-if="item.workUsers">{{item.workUsers?item.workUsers:0}}人已拼</label>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  const NET = require('@/utils/request')
  const API = require('@/config/api')
  import {funMixin} from '../../../config/mixin'
  import store from '../../../config/mixin/store'
  export default {
    name: 'imageTextList',
    mixins: [funMixin],
    props: {
      terminal: {
        type: Number,
        default: 4
      },
      typeId: {
        type: Number,
        default: 1
      },
      shopId: {
        type: Number,
        default: 0
      },
      componentContent: {
        type: Object
      }
    },
    data () {
      return {
        productData:[],
      }
    },
    // watch: {
    //   'componentContent': {
    //     handler(newVal, oldVal) {
    //       this.getData()
    //     },
    //     deep: true
    //   }
    // },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        const _ = this
        if(this.typeId === 1){
          // 平台端
          // uni.showLoading({
          //   title: '加载中...'
          // })
          let _url = `${API.getProducts}?page=1&pageSize=99&type=1&ids=${_.componentContent.productData.productIdList}`
          NET.request1(_url, null, 'GET').then(res => {
            store.commit("loadNumReduce");
            _.productData  = res.data.list
          }).catch(res => {
            store.commit("loadNumReduce");
          })
        } else if(this.typeId === 3) {
          // 商家端
          if(_.componentContent.shopGroupWorkId){
            // uni.showLoading({
            //   title: '加载中...'
            // })
            let _url = `${API.getGroupWorks}?shopId=${_.shopId}&ids=${_.componentContent.shopGroupWorkId}`
            NET.request1(_url, null, 'GET').then(res => {
			  if(res.data && res.data.length > 0){
				_.productData = res.data[0].products
			  }
			  store.commit("loadNumReduce");
            }).catch(res => {
              store.commit("loadNumReduce");
            })
          } else {
            _.productData = []
			store.commit("loadNumReduce");
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .hom-pro-list{
    padding: 20upx 0;
    .title{
      display: flex;
      align-items:center;
      position: relative;
      margin: 0 30upx 20upx;
      label{
        font-size: 30upx;
        font-weight: bold;
      }
      .btn-all{
        position: absolute;
        right: 0;
        top: 10upx;
        line-height: 22upx;
        padding-right: 20upx;
        font-size: 24upx;
        color: #999;
        .iconfont{
          content: '';
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    .pro-box{
      padding-left: 15upx;
      .pro-item{
        width: 220upx;
        padding-bottom: 10upx;
        background: #FFFFFF;
        box-shadow: 0px 2upx 9upx 0px rgba(51, 51, 51, 0.1);
        border-radius: 10upx;
        margin:0 0 15upx 15upx;
        display: inline-block;
        .pro-item-img{
          .img{
            width: 220upx;
            height: 220upx;
            border-radius: 10upx 10upx 0upx 0upx
          }
        }
        .pro-item-info{
          text-align: center;
          .name{
            font-size: 24upx;
            font-weight: normal;
            line-height: 36upx;
          }
          .price{
            color: #FF7800;
            .unit{
              font-size: 22upx;
            }
            .val{
              font-size: 26upx;
            }
          }
          .buyCount{
            font-size: 20upx;
            color: #999;
            font-weight: normal;
          }
        }
      }
    }
  }
</style>
