<template>
    <div class="discount-card" :style="{backgroundImage:`url(${require('@/static/assets/index/shouye_huodong_@2x.png')})`}">
        <div class="card-item" v-for="(item,index) in 4" :key="index">
            <div class="card-item-head">
                <!-- <div>限时快抢</div> -->
                <image mode="widthFix" :src="require('@/static/assets/index/shouye_xianshi_@2x.png')"></image>
            </div>
            <div class="card-item-foot">
                <div class="cif-left">
                    <image mode="widthFix" src="https://cereshop.oss-cn-shenzhen.aliyuncs.com/test/2021-03-17/945c1e5cb4ec4ae5894fede3267cab23%E6%8D%95%E8%8E%B770.PNG"></image>
                </div>
                <div class="cif-right">
                    <image mode="widthFix" src="https://cereshop.oss-cn-shenzhen.aliyuncs.com/test/2021-03-17/945c1e5cb4ec4ae5894fede3267cab23%E6%8D%95%E8%8E%B770.PNG"></image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'discount-card',
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.discount-card{
    background: gray;
    display: flex;
    padding: 10rpx 12rpx;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-position: center;
    background-size: cover;
    .card-item{
        width: calc((100%/2) - 8rpx);
        // background: rgb(162, 202, 162);
        .card-item-head{
            :nth-child(1){
                color: #fff;
                font-size: 40rpx;
                letter-spacing: 6rpx;
                text-shadow: 6rpx 6rpx 0 rgba(168, 168, 168, 0.5);
            }
            image{
                width: 264rpx;
                // height: 44rpx;
            }
        }
        .card-item-foot{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10rpx 0 0 0;
            width: 100%;
            background: #fff;
            .cif-left{
                width: calc(49% - 10rpx);
                image{
                    width: 100%;
                }
            }
            .cif-right{
                width: calc(49% - 10rpx);
                image{
                    width: 100%;
                }
            }
        }
    }
}
</style>