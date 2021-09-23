<template>
    <div class="classify_list">
        <swiper
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
                    <div class="shop_item" v-for="(shop, sIndex) in 10" :key="sIndex">
                        <div class="image_box"></div>
                        <div>休闲鞋</div>
                    </div>
                    <!-- <image
                        :src=""
                        class="swiper-item_img"
                        mode="aspectFill"
                        @click="swiperClick(item)"
                    /> -->

                </view>
            </swiper-item>
        </swiper>
        <div class="dot">
            <div v-for="(item, index) in page"
                :style="index === currentIndex ? 'background:#FB3F3D':''"
                :key="index"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'classifyList',
    data(){
        return{
            // img: require('@/static/assets/index/'),
            list:[],
            page: 0,
            currentIndex: 0
        }
    },
    created() {
        this.list.length = 12;
        this.page = Math.ceil(this.list.length/10);
        console.log(this.page);
    },
    methods:{
        swiperChange(e){
            this.currentIndex = e.detail.current
            // console.log(e.detail.current);
        }
    }
}
</script>
<style lang="less" scoped>
.classify_list{
    height: auto;
    position: relative;
    .swiper-box{
        padding: 0 30rpx;
        height: 380rpx;
        .swiper-item{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .shop_item{
                width: 116rpx;
                margin-right: 23rpx;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-top: 46rpx;
                .image_box{
                    width: 100%;
                    height: 88upx;
                    background: chartreuse;
                    border-radius: 49%;
                }
            }
        }
    }
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