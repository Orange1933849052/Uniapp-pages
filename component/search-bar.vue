<template>
    <div class="search_bar">
        <div class="left">
            <image mode="widthFix" :src="require('@/static/assets/classify/ppfl_fanhui_@2x.png')"></image>
        </div>
        <div class="middle">
            <div class="left-icon">
                <image :src="require('@/static/assets/classify/391631095071_.pic.jpg')"></image>
            </div>
            <div class="input_box">
                <input type="text" placeholder="请输入品牌活动名称">
            </div>
            <div class="right-icon">
                <image :src="require('@/static/assets/classify/ppfl_xiangji_@2x.png')"></image>
            </div>
        </div>
        <div class="foot">
            搜索
        </div>
    </div>
</template>
<script>
export default {
    name: 'search-bar',
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.search_bar{
    // width: 100%;
    height: 120rpx;
    display: flex;
    align-items: center;
    padding: 0 35rpx;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 4rpx 16rpx 0 #dbdbdb;
    .left{
        width: 52rpx;
        margin-right: 30rpx;
        image{
            width: 100%;
        }
    }
    .middle{
        flex: 1;
        font-size: 25rpx;
        height: 64rpx;
        background: #FAFAFA;
        border-radius: 32rpx;
        border: 2rpx solid #FB3F3D;
        position: relative;
        .input_box{
            height: 100%;
            padding-left: 80rpx;
            display: flex;
            input{
                font-size: 25rpx;
                height: 100%;
                line-height: 64rpx;
                vertical-align: middle;
                color: #C6C6C6;
            }
            input::-webkit-input-placeholder{
                color:#C6C6C6;
            }
        　　 input::-moz-placeholder{
                color:#C6C6C6;
            }
        　　 input:-ms-input-placeholder{
                color:#C6C6C6;
            }
        　　 input::-webkit-input-placeholder{
                color:#C6C6C6;
            }
        　　 input::placeholder{
                color:#C6C6C6;
            }
        }
        .left-icon{
            position: absolute;
            left: 28rpx;
            top: 50%;
            transform: translate(0,-50%);
            width: 36rpx;
            height: 36rpx;
            image{
                width: 100%;
                height: 100%;
            }
        }
        .right-icon{
            position: absolute;
            right: 28rpx;
            top: 50%;
            transform: translate(0,-50%);
            width: 33.75rpx;
            height: 29.25rpx;
            image{
                width: 100%;
                height: 100%;
            }
        }
    }
    .foot{
        width: 112rpx;
        height: 52rpx;
        font-size: 26rpx;
        background: linear-gradient(135deg, #EC6C17 0%, #F60D37 100%);
        border-radius: 32rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        // line-height: calc(height);
        color: #fff;
        vertical-align: middle;
        margin-left: 30rpx;
    }
}
</style>