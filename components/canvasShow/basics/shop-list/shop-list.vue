<template>
    <div class="shop_list">
        <div class="header">
            <div class="head_item" @click="cellClick(index)" v-for="(item, index) in list" :key="index">
                <div :style="index === currentIndex ? activeStyle0: ''">热销</div>
                <div :style="index === currentIndex ? activeStyle1: ''">今日爆款</div>
            </div>
        </div>
        <div class="content">
            <swiper
                class="swiper-box"
                :autoplay="false"
                :current="currentIndex"
                indicator-active-color="#fcf6f3"
                @change="swiperChange"
                :disable-touch="false"
            >
                <swiper-item
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <view class="swiper-item">
                        <shopItem></shopItem>
                    </view>
                </swiper-item>
            </swiper>
        </div>
        <div class="footer"></div>
        <!-- <swiper
            class="swiper-box"
            :autoplay="false"
            indicator-active-color="#fcf6f3"
            @change="swiperChange"
        >
            <swiper-item
                v-for="(item, index) in page"
                :key="index"
            >
                <view class="swiper-item">
                   
                </view>
            </swiper-item>
        </swiper> -->
        <!-- <div class="dot">
            <div v-for="(item, index) in page"
                :style="index === currentIndex ? 'background:#FB3F3D':''"
                :key="index"></div>
        </div> -->
    </div>
</template>
<script>
import shopItem from '@/components/canvasShow/basics/shop-list/shop-item'
export default {
    name: 'shopList',
    data(){
        return{
            // img: require('@/static/assets/index/'),
            list:[],
            currentIndex: 3,
            activeStyle0: 'color:#FB3F3D;font-weight:bold',
            activeStyle1: 'color:#FFFFFF;background:#FB3F3D'
        }
    },
    components:{
        shopItem
    },
    created() {
        this.list.length = 4;
    },
    methods:{
        cellClick(index){
            this.currentIndex = index;
        },
        swiperChange(e) {
            this.currentIndex = e.detail.current;
        }
    }
}
</script>
<style lang="less" scoped>
.shop_list{
    height: auto;
    position: relative;
    width: calc(100% - 40rpx);
    margin: 0 auto;
    background: #fff;
    .header{
        display: flex;
        .head_item{
            flex: 1;
            text-align: center;
            padding: 30rpx;
            :nth-child(1){
                color: #333333;
                font-size: 32rpx;
            }
            :nth-child(2){
                width: 100%;
                color: #979797;
                font-size: 24rpx;
                border-radius: 50rpx;
            }
        }
    }
    .content{
        padding: 0 30rpx;
        .swiper-box{
            height: calc(350rpx);
        }
        // height: 380rpx;
    }
    // .swiper-box{
    //     padding: 0 20rpx;
    //     .swiper-item{
    //         display: flex;
    //         flex-wrap: wrap;
    //         align-items: center;
    //         .shop_item{
    //             width: 116rpx;
    //             margin-right: 23rpx;
    //             display: flex;
    //             flex-direction: column;
    //             align-items: center;
    //             justify-content: center;
    //             padding-top: 46rpx;
    //             .image_box{
    //                 width: 100%;
    //                 height: 88upx;
    //                 background: chartreuse;
    //                 border-radius: 49%;
    //             }
    //         }
    //     }
    // }
    .dot{
        position: absolute;
        width: 16%;
        left: 50%;
        bottom: 0;
        transform: translate(-50%,0);
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            height: 8rpx;
            flex: 1;
            background: #D8D8D8;
        }
    }
}
</style>