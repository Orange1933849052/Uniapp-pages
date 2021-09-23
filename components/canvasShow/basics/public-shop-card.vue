<template>
    <div class="shop-card">
        <div class="top">
            <div class="t_left"></div>
            <div class="t_right">
                <div class="t_right_header">
                    <div class="trh_left">
                        <div>鸿星尔克</div>
                        <div>无忧</div>
                    </div>
                    <div class="trh_right">
                        <span>距结束还有</span>
                        <u-count-down
                            :timestamp="timestamp"
                            separator="colon"
                            font-size="24"
                            bg-color="#333333"
                            color="#fff"
                        ></u-count-down>
                    </div>
                </div>
                <div class="t_right_middle">
                    <div class="trm_left">
                        <div class="money">
                            <span>最高佣金</span>
                            <span>¥24/件</span>
                        </div>
                        <image :src="require('@/static/assets/index/shouye_quan_@2x.png')"></image>
                    </div>
                    <div class="trm_right">
                        <image 
                            style="width:174rpx;height:42rpx" 
                            :src="require('@/static/assets/index/shouye_zhuanqian_@2x.png')"
                        ></image>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <scroll-view :scroll-x="true">
                <div class="image_container">
                    <div class="image_item">
                        <div class="image_word">
                            <div>佣¥8</div>
                            <div>+2.1</div>
                        </div>
                        <image src="https://cereshop.oss-cn-shenzhen.aliyuncs.com/test/2021-03-17/018c7fb122794195af1a55699353dcb8%E6%8D%95%E8%8E%B743.PNG"></image>
                    </div>
                    <div class="image_item">
                        <div class="image_word">
                            <div>佣¥8</div>
                            <div>+2.1</div>
                        </div>
                        <image src="https://cereshop.oss-cn-shenzhen.aliyuncs.com/test/2021-03-17/018c7fb122794195af1a55699353dcb8%E6%8D%95%E8%8E%B743.PNG"></image>
                    </div>
                    <div class="image_item">
                        <div class="image_word">
                            <div>佣¥8</div>
                            <div>+2.1</div>
                        </div>
                        <image src="https://cereshop.oss-cn-shenzhen.aliyuncs.com/test/2021-03-17/018c7fb122794195af1a55699353dcb8%E6%8D%95%E8%8E%B743.PNG"></image>
                    </div>
                    <div class="image_item">
                        <div class="image_word">
                            <div>佣¥8</div>
                            <div>+2.1</div>
                        </div>
                        <image src="https://cereshop.oss-cn-shenzhen.aliyuncs.com/test/2021-03-17/018c7fb122794195af1a55699353dcb8%E6%8D%95%E8%8E%B743.PNG"></image>
                    </div>
                </div>
            </scroll-view>
        </div>
        <div class="fixed_info">
            <image :src="require('@/static/assets/index/shouye_shangbiao2_@2x.png')"></image> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'shop-item',
    data(){
        return{
            timestamp:82400
        }
    },
    prop:{

    }
}
</script>
<style lang="less" scoped>
.shop-card{
    padding: 56rpx 20rpx 20rpx 20rpx;
    position: relative;
    border-radius: 16rpx;
    .top{
        display: flex;
        .t_left{
            width: 120rpx;
            height: 120rpx;
            margin-right: 20rpx;
            background: rgb(100, 100, 94);
        }
        .t_right{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .t_right_header{
                display: flex;
                justify-content: space-between;
                .trh_left{
                    display: flex;
                    align-items: center;
                    :nth-child(1){
                        font-size: 28rpx;
                    }
                    :nth-child(2){
                        margin-left: 20rpx;
                        background: #FB3F3D;
                        color: #fff;
                        font-size: 25rpx;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 4rpx 10rpx;
                    }
                }
                .trh_right{
                    display: flex;
                    align-items: center;
                    flex: 1;
                    justify-content: flex-end;
                    :nth-child(1){
                        color: #888888;
                    }
                    /deep/ .u-countdown{
                        margin-left: 20rpx;
                        .u-countdown-item{
                            padding: 8rpx;
                        }
                    }
                }
            }
            .t_right_middle{
                display: flex;
                justify-content: space-between;
                .trm_left{
                    display: flex;
                    align-items: center;
                    .money{
                        display: flex;
                        align-items: center;
                        border: 2rpx solid #FB3F3D;
                        :nth-child(1){
                            background: #FB3F3D;
                            color: #fff;
                            font-size: 27rpx;
                            padding: 5rpx 10rpx;
                        }
                        :nth-child(2){
                            color: #FB3F3D;
                            font-size: 24rpx;
                            padding: 5rpx 10rpx;
                        }
                    }
                    image{
                        width: 50rpx;
                        height: 32rpx;
                        margin-left: 20rpx;
                    }
                }
            }
        }
    }
    .bottom{
        width: 100%;
        height: 240rpx;
        margin-top: 20rpx;
        .image_container{
            // width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            word-break: keep-all;
            // image{
            //     width: 240rpx;
            //     height: 240rpx;
            // }
            .image_item{
                flex-shrink:0;
                width: 260rpx;
                height: 260rpx;
                margin-right: 10rpx;
                position: relative;
                .image_word{
                    position: absolute;
                    left: 10rpx;
                    bottom: 10rpx;
                    z-index: 100;
                    display: flex;
                    align-items: center;
                    background: #FB3F3D;
                    padding: 0 30rpx 0 0;
                    border-top-left-radius: 50rpx;
                    border-top-right-radius: 50rpx;
                    border-bottom-right-radius: 50rpx;
                    :nth-child(1){
                        background: #F6EBF1;
                        color: #FB3F3D;
                        font-size: 16rpx;
                        height: 100%;
                        padding: 5rpx 20rpx;
                        border-radius: 50rpx;
                        border-bottom-left-radius: 0rpx;
                    }
                    :nth-child(2){
                        color: #fff;
                        padding-left: 20rpx;
                        font-size: 16rpx;
                    }
                }
                image{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .fixed_info{
        position: absolute;
        left: 0;
        top: 0;
        image{
            width: 158rpx;
            height: 42rpx;
        }
    }
}
</style>