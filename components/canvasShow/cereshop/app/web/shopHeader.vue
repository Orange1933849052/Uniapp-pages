<template>
  <div class="header-warp">
    <image class="top-bg" src="../../../../../static/assets/img/top-bg.png" mode="widthFix">
    <div class="page-content">
      <cere-header @tabChange='tabChange' ref="header" :componentContent="componentContent"></cere-header>
      <cere-banner :componentContent="componentContent" v-if="bannerVisible"></cere-banner>
	  <Notice v-if="noticeList.length>0 && bannerVisible" :list="noticeList"></Notice>
    </div>
  </div>
</template>

<script>
  import CereBanner from './banner'
  import CereHeader from './header'
  import Notice from '../../../../notice/notice.vue'
  export default {
    name: 'shopHeader',
    components: { CereHeader, CereBanner, Notice },
    props: {
      terminal: {
        type: Number,
        default: 4
      },
      componentContent: {
        type: Object
      },
	  noticeList: {
		  type: Array
	  }
    },
    data () {
      return {
        bannerVisible: true
      }
    },
	methods: {
	  tabChange (index, id) {
		  this.bannerVisible = index === 0
	    this.$emit('tabChange', index, id)
	  }
	}
  }
</script>

<style lang="scss" scoped>
  .header-warp{
    width: 100%;
    display: flex;
    flex-direction: column;
    .top-bg {
      width: 100%;
    }
    .page-content{
      width: 100%;
      display: flex;
      flex-direction: column;
      z-index: 10;
      margin-top: -300upx;
    }
  }
</style>
