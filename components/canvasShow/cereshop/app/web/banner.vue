<template>
  <swiper class="banner" autoplay='true' :circular="true">
    <swiper-item class="banner-item" v-for="(item,index) in bannerList" v-bind:key="index">
      <!--<router-link :to="getLink(item.linkObj)">-->
        <image @click="getLink(item.linkObj)" class="img" :src="item.bannerUrl" v-show="item.bannerUrl">
      <!--</router-link>-->
    </swiper-item>
  </swiper>
</template>

<script>
  // import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  // import 'swiper/css/swiper.css'
  import {funMixin} from '../../../config/mixin'
  export default {
    name: 'cereBanner',
    mixins: [funMixin],
    props: {
      componentContent: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    computed: {
      bannerList: function () {
        return this.componentContent.bannerData.filter(function (item) {
          return item.bannerUrl
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    margin-left: 30upx;
    margin-top: 10upx;
  }

  .banner,
  .banner-item {
    width: 690upx;
    height: 280upx;
    border-radius: 25upx;
    overflow: hidden;
  }

  .banner-item .img {
    width: 690upx;
    height: 280upx;
  }
</style>
