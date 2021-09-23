<template>
    <div class="shop-item">
        <div class="left">
            <!-- <image mode="widthFix"></image> -->
        </div>
        <div class="right">
            <div class="r_title">
                <span>上新</span>
                <span>芬腾 | 芬腾 夏季女款芬腾 | 芬腾 夏季女款芬腾 | 芬腾 夏季女款</span>
            </div>
            <div class="r_info">
                <span>限时秒杀品牌钜惠</span>
                <span>已抢872件</span>
            </div>
            <div class="r_discount">
                <span>¥372</span>
                <span>1.1折</span>
            </div>
            <div class="r_price">
                <div class="rp_left">
                    <span>爆款价</span>
                    <span>¥</span>
                    <span>39.9</span>
                </div>
                <div class="rp_right">
                    <image mode="widthFix" :src="require('@/static/assets/index/shouye_zhuanfa_@2x.png')"></image>
                    <!-- <span>转发</span> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'shop-item',
    data(){
        return{}
    },
    prop:{

    }
}
</script>
<style lang="less" scoped>
.shop-item{
    display: flex;
    align-items: center;
    .left{
        width: 250rpx;
        height: 250rpx;
        background: chocolate;
        image{
            width: 100%;
            border-radius: 5rpx;
        }
    }
    .right{
        width: calc(100% - 250rpx);
        height: 250rpx;
        padding-left: 20rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .r_title{
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            :nth-child(1){
                background: #FFE8E8;
                font-size: 23rpx;
                color: #FB3F3D;
                padding: 6rpx;
            }
            :nth-child(2){
                padding-left: 14rpx;
            }
        }
        .r_info{
            font-size: 23rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #ABABAB;
            padding-top: 8rpx;
        }
        .r_discount{
            font-size: 23rpx;
            color: #ABABAB;
            :nth-child(1){
                text-decoration: line-through;
                padding-right: 20rpx;
            }
        }
        .r_price{
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            .rp_left{
                :nth-child(1){
                    font-size: 23rpx;
                    color: #FB3F3D;
                }
                :nth-child(2){
                    font-size: 23rpx;
                    color: #FB3F3D;
                }
                :nth-child(3){
                    font-size: 32rpx;
                    color: #FB3F3D;
                    font-weight: bold;
                }
            }
            .rp_right{
                display: flex;
                align-items: center;
                :nth-child(1){
                    width: 142rpx;
                    height: 50rpx;
                }
            }
        }
    }
}
</style>