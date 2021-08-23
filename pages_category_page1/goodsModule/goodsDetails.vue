<template>
  <view class="container">
    <!-- 商品详情 -->
    <view>
      <swiper class="goodsImgswiper-box" :indicator-dots="true" :autoplay="true">
        <swiper-item v-for="(imgItem, index) in detailList.images" :key="index">
          <image class="goodsImg" :src='imgItem'></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="goodgDes-box flex-start flex-column">
      <view v-if="detailList.activityType == 0" class="priceBuyNum-box flex-display flex-sp-between mar-left-30">
        <view>
          <label class="fs26 font-color-FF7800">¥</label>
          <label class="fs36 fs-bold font-color-FF7800 mar-left-10">{{skuPrice}}</label>
          <label class="fs24 font-color-999 discountsPriceLine mar-left-20">¥ {{detailList.originalPrice}}</label>
        </view>
        <label class="fs24 font-color-999">{{detailList.users}}人付款</label>
      </view>
      <view v-else class="seckill-box">
        <view class="flex-display flex-sp-between flex-row font-color-FFF">
          <view class="flex-column-plus">
            <image v-if="detailList.activityType == 2" class="seckill-icon" src="../../static/images/seckill-icon.png" mode=""></image>
            <image v-if="detailList.activityType == 3" class="discount-icon" src="../../static/images/discount-icon.png" mode=""></image>
            <image v-if="detailList.activityType == 1" class="spell-icon" src="../../static/images/spell-icon.png" mode=""></image>
            <view class="flex-row-plus flex-items-plus mar-left-30">
              <label class="28">¥</label>
              <label class="fs42 mar-left-5">{{skuPrice}}</label>
              <label class="fs28 mar-left-10 discountsPriceLine">¥ {{detailList.originalPrice}}</label>
            </view>
          </view>
          <view v-if="detailList.activityType == 3 || detailList.activityType == 2 || detailList.activityType == 1" class="countdown flex-column-plus">
            <view v-if="timeActivetype" class="flex-column-plus mar-right-20">
              <label class="fs28">距结束还剩：</label>
              <view class="flex-row-plus fs34 flex-items-plus">
                <view class="countdown-box flex-items-plus">{{hou}}</view>:
                <view class="countdown-box flex-items-plus">{{min}}</view>:
                <view class="countdown-box flex-items-plus">{{sec}}</view>
              </view>
            </view>
            <view v-else>
              <label class="fs28 mar-right-20">即将开始：{{detailList.startTime}}</label>
<!--              <view class="fs28 mar-right-20 mar-top-20">{{detailList.startTime}}</view>-->
            </view>
          </view>
        </view>
      </view>
      <view class="goodsName-box overflowNoDot mar-top-30 mar-left-30">
        <label class="goodsName fs26 mar-left-20">{{detailList.productName}}</label>
      </view>
      <view v-if="markTools.length>0 || shopMarkTools.length>0" class="activity-box mar-top-10" @click="couponShowClick" >
        <label class="fs24 font-color-999">优惠</label>
        <view class="activity-content mar-left-30 flex-items flex-sp-between flex-row">
          <view class="fs20 overflow" style="width: 500rpx;">
            {{detailList.couponSplicing}}
          </view>
          <view class="flex-items">
            <label class="fs24 font-color-FF7700">领券</label>
            <image class="coupon-arrow" src="../../static/img/user/arrow.png"></image>
          </view>
        </view>
      </view>
      <view v-else class="activity-box mar-top-10">
        <label class="fs24 font-color-999">优惠</label>
        <view class="activity-content mar-left-30 flex-items flex-sp-between flex-row">
          <view class="fs20">
            无
          </view>
          <view class="flex-items">
            <label class="fs24 font-color-FF7700">领券</label>
            <image class="coupon-arrow" src="../../static/img/user/arrow.png"></image>
          </view>
        </view>
      </view>
    </view>
    <view class="express-box flex-items flex-row fs24">
      <label class="mar-left-30">快递：¥ {{detailList.logisticsPrice}}</label>
    </view>
    <view class="fs24 chooseSize-box flex-start" @click="goosDetailshowClick">
      <view class="chooseSize-content flex-items flex-row flex-sp-between">
        <view class="flex-row-plus">
          <label class="mar-left-30 font-color-999">选择</label>
        </view>
        <image class="arrow-icon" src="../../static/img/user/arrow.png"></image>
      </view>
    </view>
    <view v-if="detailList.activityType == 1" class="borRig-line-20"></view>
    <view v-if="detailList.activityType == 1" class="goodsDiscount">
      <view class="questionTit mar-left-30 flex-items flex-row flex-sp-between">
        <label class="">这些人正在拼单</label>
        <view class="allMoreBox">
          <view v-if="threecollageOrders.length>0" class="allMore" @click="openAllBuy">查看全部</view>
          <view v-else class="allMore" @click="openAllBuyTwo">查看全部</view>
          <image class="evaluateAllArrow-icon mar-left-10" src="../../static/img/user/arrow.png"></image>
        </view>
      </view>
      <view class="groupBuy" v-for="(Gitem,index) in threecollageOrders" :key="index">
        <view class="groupBuyList">
          <view class="groupBuyItem">
            <view class="leftAvatar">
              <img :src="Gitem.headImage" alt="">
              <span>{{Gitem.name}}</span>
            </view>
            <view class="rightInfo">
              <view class="groupBuyTime" style="width: 70%;">
                <view class="needPeople flex-row-plus">还差<b>{{Gitem.person}}人</b>拼成</view>
                <view class="endDate">剩余{{timeChange(Gitem.time)}}</view>
              </view>
              <view style="width: 30%;" class="groupBuyBtn" @click="getGroupShow(Gitem.collageId)">和Ta拼</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="borRig-line-20"></view>
    <view class="evaluate-box flex-start flex-column">
      <view class="evaluate mar-left-30 flex-items flex-row flex-sp-between">
        <label class="fs-bold fs30">宝贝评价 ({{commentListLength}})</label>
        <view v-if="commentListLength>0" @click="commentAll">
          <label class="font-color-999 fs24">查看全部</label>
          <image class="evaluateAllArrow-icon mar-left-10" src="../../static/img/user/arrow.png"></image>
        </view>
      </view>
      <view class="evaluateTag-box" v-if="commentListLength>0">
        <view class="evaluateTag-text">
          全部({{commentListLength}})
        </view>
      </view>
      <view class="evaluate-contentbox mar-top-30" v-for="(commentItem, index) in commentList" :key="index">
        <view class="evaluate-content flex-items flex-row flex-sp-between">
          <view class="flex-items">
            <image class="user-headSmallImg" :src="commentItem.headImage"></image>
            <label class="fs28 mar-left-20">{{commentItem.name}}</label>
          </view>
          <label class="font-color-999 fs22">{{commentItem.createTime}}</label>
        </view>
        <view class="evaluateDes-box">
          <label class="evaluateDes">{{commentItem.comment}}</label>
        </view>
        <view class="item-image-box" v-if="commentItem.image">
          <view v-for="(ItemImg, cindex) in commentImgData(commentItem.image)" :key="cindex">
            <image @click='previewImg(index,cindex)' class="img-item" :src="ItemImg"></image>
          </view>
        </view>
        <view class="item-line"></view>
        <view class="item-like-box">
          <view class="addEvaluate">
            <view>追加评价：{{commentItem.addComment}}</view>
            <view class="item-image-box" v-if="commentItem.addImages">
              <view v-for="(itemAddImg, imgIndex) in commentItem.addImages" :key="imgIndex">
                <image @click='previewAddImg(index,imgIndex)' class="img-item" :src="itemAddImg"></image>
              </view>
            </view>
          </view>
        </view>
        <view class="like-box">
          <image class="like-img" @click="zanTap(index, commentItem.commentId,0)" src="../../static/images/praiseActive-icon.png"
                 v-if="commentItem.ifLike == 1"></image>
          <image class="like-img" @click="zanTap(index, commentItem.commentId,1)" src="../../static/images/praise-icon.png" v-else></image>
          <view class="like-num">{{commentItem.likes}}</view>
        </view>
      </view>
    </view>
    <!--    评价END-->
    <!--    问答-->
    <view class="borRig-line-20"></view>
    <view class="questions">
      <view class="questionTit mar-left-30 flex-items flex-row flex-sp-between">
        <label class="">商品问答（{{problemsListLength}}）</label>
        <view class="allMoreBox">
          <view class="allMore" @click="seeAllQa">查看全部</view>
          <image class="evaluateAllArrow-icon mar-left-10" src="../../static/img/user/arrow.png"></image>
        </view>
      </view>
      <view class="questionInfo flex-items flex-row flex-sp-between">
        <view class="infoTit">宝贝好不好，问问已买过的人</view>
        <view class="putQuestion" @click="goToQuestions">去提问</view>
      </view>
      <view class="listBox">
        <view class="itemBox" v-for="(pitem,index) in getProblemsList" :key="index">
          <view class="itemAsk">
            <i>问</i><span>{{pitem.problem}}</span>
          </view>
          <view v-if="pitem.answers.length>0">
            <view class="answer" v-for="(witem,index) in twonumansers(pitem.answers)" :key="index">
              <view class="answerBox">
                <i>答</i><span>{{witem.answer}}</span>
              </view>
              <view class="answerBtn" v-if="pitem.ifAnswer==1" @click="seeAllFn(pitem.problemId)">立即回答</view>
            </view>
          </view>
          <view v-else>
            <view class="answer">
              <view class="answerBox">
                <i>答</i><span>暂无答复</span>
              </view>
              <view class="answerBtn" v-if="pitem.ifAnswer==1" @click="seeAllFn(pitem.problemId)">立即回答</view>
            </view>
          </view>
          <view v-if="pitem.answers.length>1" class="seeAll" @click="seeAllFn(pitem.problemId)">查看全部答复</view>
        </view>
      </view>
    </view>
    <view class="inStore-box flex-items flex-row flex-sp-between">
      <view class="flex-display flex-row">
        <view>
          <image @click="goStore" class="inStore-logo" :src="detailList.shopLogo"></image>
        </view>
        <view class="flex-display flex-column mar-left-20">
          <label @click="goStore">{{detailList.shopName}}</label>
          <view class="flex-display flex-row fs24 font-color-999 mar-top-5">
            <label>商品总类：{{detailList.classifyNumber}}</label>
            <label class="mar-left-30">已售：{{detailList.number}}件</label>
          </view>
        </view>
      </view>
      <view class="inStore-but" @click="goStore">去逛逛</view>
    </view>
    <view class="goodsDetails-box">
      <view class="goodsDetails-title">
        <view class="goodsDetails-Line"></view>
        <label class="goodsDetails-text">宝贝详情</label>
        <view class="goodsDetails-Line"></view>
      </view>
      <view class="goodsDetailsimg-box">
        <view class="">
          <rich-text :nodes="sellDescList"></rich-text>
        </view>
      </view>
    </view>
    <view class="buygoods-box">
      <view class="buygoodsBut-box flex-row-plus" :style="{'height':(isIphone==true? 160:130)+'rpx'}">
        <view class="flex-column-plus" @click="goStore">
          <image class="store-icon" src="../../static/images/store-icon.png"></image>
          <label class="fs22">店铺</label>
        </view>
        <view class="flex-column-plus mar-left-30 flex-items" @click="goshopCart">
          <image class="store-icon" src="../../static/images/gouwuche.png"></image>
          <label class="fs22">购物车</label>
        </view>
        <view class="flex-column-plus mar-left-30" @click="collectProduct">
          <image v-if="detailList.ifCollect == 0" class="store-icon" src="../../static/images/shoucang@2x.png"></image>
          <image v-else class="store-icon" src="../../static/images/shoucang-active.png"></image>
          <label class="fs22">收藏</label>
        </view>
        <view class="flex-row-plus offShelf" v-if="detailList.shelveState == 0">
          商品已下架
        </view>
        <view class="flex-row-plus" v-else-if="detailList.activityType == 1">
          <view class="joinShopCartBut" @click="goosDetailshowClick(2, '0')">单独购买</view>
          <view class="buyNowBut" @click="goosDetailshowClick(2, 'groupBuy')">我要开团</view>
        </view>
        <view class="flex-row-plus" v-else>
          <view class="joinShopCartBut" @click="goosDetailshowClick(1)">加入购物车</view>
          <view class="buyNowBut" @click="goosDetailshowClick(2)">立即购买</view>
        </view>
      </view>
    </view>
    <view class="returnTopService-box" :style="{'display':(returnTopFalg===true? 'block':'none')}">
      <view class="returnTop-box flex-items-plus flex-column" @click="top">
        <image class="returnTopImg" src="../../static/images/returnTopImg.png"></image>
        <label class="fs22">顶部</label>
      </view>
      <view class="serviceImg-box flex-items-plus flex-column mar-top-20">
        <image class="serviceImg" src="../../static/images/serviceImg.png"></image>
        <label class="fs22">客服</label>
      </view>
    </view>
    <!-- 商品详情 -->
    <u-popup class="goosDetailshow-box" v-model="goosDetailshowFlag" mode="bottom" border-radius="14">
      <view>
        <view class="detailImg-box flex-row-plus">
          <image class="detailImg" :src="skuImg"></image>
          <view class="flex-column-plus mar-left-40">
            <view class="font-color-FF7800">
              <label class="fs24">¥</label>
              <label class="fs36 mar-left-10" v-text="detailList.activityType == 1 && btnType == 1 ? skuOriginalPrice : skuPrice"></label>
            </view>
            <label class="fs24 font-color-999 mar-top-20">库存 {{stockNumber}} 件</label>
            <label class="fs24 mar-top-20">已选</label>
          </view>
        </view>
        <view class="color-box flex-column-plus">
          <view v-for="(attritem,index) in skuProdList.names" :key="index">
            <label class="fs24 font-color-999">{{attritem.skuName}}</label>
            <view class="colorName-box">
              <view class="pad-bot-30" v-for="(attrRes, resIndex) in attritem.values" :key="resIndex">
                <label class="colorName" :class="{'colorName-on' :subIndex[index] == resIndex}" @click="colorActiveClick(attrRes,index,resIndex)">{{attrRes.skuValue}}</label>
              </view>
            </view>
          </view>
        </view>
        <view class="goodsNum-box flex-row-plus flex-sp-between">
          <label class="font-color-999 fs24">数量</label>
          <view class="goodsNum">
            <label class="subtract" @click="numSub">-</label>
            <label class="goodsNumber" v-model="buyNum">{{buyNum}}</label>
            <label class="add" @click="numAdd">+</label>
          </view>
        </view>
        <view v-if="detailList.activityType == 1 && collageId != 0" class="goosDetailbut-box flex-items-plus" :style="{'padding-bottom':(isIphone==true? 60:20)+'rpx'}">
          <view class="joinbuyBut" @click="getGroupSettlement(2)">确定</view>
        </view>
        <view v-else-if="detailList.activityType == 1 && ifGroupBuy" class="goosDetailbut-box flex-row-plus" :style="{'padding-bottom':(isIphone==true? 60:20)+'rpx'}">
          <view v-if="!ifGroupPro" class="buyNowBut" @click="addFast(1)">单独购买</view>
          <view v-else class="buyNowBut" @click="getGroupSettlement(1)">去拼团</view>
        </view>
        <view v-else class="goosDetailbut-box flex-row-plus" :style="{'padding-bottom':(isIphone==true? 60:20)+'rpx'}">
          <view v-if="btnType === 1" class="buyNowBut" @click="addCart">确认</view>
          <view v-else class="buyNowBut" @click="addFast(2)">确认</view>
        </view>
      </view>
    </u-popup>
    <!-- 优惠券弹框 -->
    <u-popup class="couponShow-box" v-model="showActivity" mode="bottom" border-radius="14" close-icon-pos="top-right"
             close-icon-size="20">
      <view class="tabsbox">
        <u-tabs :list="activeTypeList" bar-width="60" :bold="false" active-color="#FF7800" inactive-color="#999999"
                :is-scroll="false" :current="activeTypeFlag" @change="activeTypeActive"></u-tabs>
      </view>
      <view v-if="activeTypeFlag == 0" class="couponShow">
        <view class="title-box">
          <image class="close-btn" @click="onActivityClose" src="../../static/images/close.png"></image>
        </view>
        <view class="activity-coupon-box">
          <view class="content-box">
            <!-- <view class="tag-box">{{markTools[0].activityName}}</view> -->
            <view class="coupon-item" v-for="(mItem, index) in markTools">
              <view class="money-box">￥{{mItem.reduceMoney}}</view>
              <view class="info-box">
                <view class="info mar-top-10">满{{mItem.fullMoney}}元可用</view>
                <view class="date fs18 mar-top-20">{{getDate(mItem.startTime)}}至{{getDate(mItem.endTime)}}</view>
              </view>
              <view class="receive-btn" @click="receiveTap(mItem,0)" v-if="mItem.state==3">立即领取</view>
              <view class="receive-btn received" v-if="mItem.state==0">已领取</view>
            </view>
          </view>
        </view>
      </view>
      <view v-if="activeTypeFlag == 1" class="couponShow">
        <view class="title-box">
          <image class="close-btn" @click="onActivityClose" src="../../static/images/close.png"></image>
        </view>
        <view class="activity-coupon-box">
          <view class="content-box">
            <!-- <view class="tag-box">{{detailList.activityName}}</view> -->
            <view class="coupon-item" v-for="(cpItem, index) in shopMarkTools">
              <view class="money-box" v-if="cpItem.couponType == 1">￥{{cpItem.reduceMoney}}</view>
              <view class="money-box" v-else>{{cpItem.reduceMoney}}折券</view>
              <view class="info-box">
                <view class="info mar-top-10">满{{cpItem.fullMoney}}元可用</view>
                <view class="date fs18 mar-top-20">{{getDate(cpItem.startTime)}}至{{getDate(cpItem.endTime)}}</view>
              </view>
              <view class="receive-btn" @click="receiveTap(cpItem,1)" v-if="cpItem.state==3">立即领取</view>
              <view class="receive-btn received" v-if="cpItem.state==0">已领取</view>
            </view>
          </view>
        </view>
      </view>
      <view class="receive-success" v-if="isShowSuccess">
        <view class="success-box">
          <image class="success-img" src="../../static/images/success_tu.png"></image>
          <view class="text">领取成功</view>
        </view>
      </view>
    </u-popup>
    <u-popup class="popupDiscount" v-model="showGroupBuyList" mode="center" border-radius="14" close-icon-pos="top-right" close-icon-size="20">
      <view class="popupDiscountTit">这些人正在拼单</view>
      <view class="groupBuy">
        <view class="groupBuyList">
          <scroll-view style="height: 480upx;" scroll-y>
            <view class="groupBuyItem1" v-for="aitem in detailList.collageOrders">
              <view class="leftAvatar">
                <img :src="aitem.headImage" alt="">
                <view class="groupBuyTime">
                  <view class="needPeople"><span>{{aitem.name}}</span>还差{{aitem.person}}人</view>
                  <view class="endDate">剩余{{timeChange(aitem.time)}}</view>
                </view>
              </view>
              <view class="rightInfo">
                <view class="groupBuyBtn" @click="getGroupShow(aitem.collageId)">去抢购</view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
const NET = require('../../utils/request')
const API = require('../../config/api')
export default {
  data() {
    return {
      screenHeight: 0,
      isIphone: "",
      returnTopFalg: false,
      goosDetailshowFlag: false,
      colorActiveId: 1,
      modelNumActiveId: 1,
      parameterShowFlag: false,
      couponShowFalg: false,
      couponActiveFlag: 1,
      succeedShowFlag: false,
      goodsId: '',
      productId:'',
      skuId:'',
      detailList: [],
      skuPrice: 0,
      skuOriginalPrice:0,
      productCommentTotal: 0,
      commentKeywordVOList: [],
      skuVOList: [],
      attrList: [],
      buyNum: 1,
      storeDTO: {}, //店铺信息
      storeId: '',
      id: '',
      storeName: '',
      skuProdId: '',
      productName: '',
      skuImg: '',
      skuNameStr: '',
      attrValueList: [],
      skuProdList: {},
      commentList: [],
      commentListLength: 0,
      sellDescList: '',
      couponListLength: 0,
      showActivity: false,
      promotionType: 1,
      commentImgList: [],
      showVOList: [],
      promotionIds: '',
      couponList: [],
      isShowSuccess: false,
      productSkuVOList: [],
      selectArr: [], // 存放被选中的值
      subIndex: [], // 是否选中 因为不确定是多规格还是单规格，所以这里定义数组来判断
      attrItemIdArr: [], //存放被选中的id
      stockNumber:0,
      showGroupBuyList: false,
      threecollageOrders:{},//拼单数据
      getProblemsList:[],//商品问答数据
      problemsPage:1,
      problemsPageSize:2,
      timeActivetype:true,
      hou: "00",
      min: "00",
      sec: "00",
      timeOut:undefined,
      funtimeOut:undefined,
      collageId:0,
      problemsListLength:0,
      markTools:[],//平台优惠券
      shopMarkTools:[],//店铺优惠券
      activeTypeList: [{
        name: '平台活动'
      }, {
        name: '店铺活动'
      }],
      activeTypeFlag: 0,
      shopGroupWorkId:0,
      ticker:null,
      ifWork:0,//是否拼团商品单独购买
      shopDiscountId:0,
      shopSeckillId:0,
      ifEnable:0,
      btnType: 1,
      ifGroupBuy: false,
      ifGroupPro: false
    }
  },
  onLoad(options) {
    this.isIphone = getApp().globalData.isIphone;
    this.shopId = options.shopId
    this.productId = options.productId
    this.skuId = options.skuId
    this.skuProdId = options.skuId
    this.queryProductDetail()
    this.bindSalesCustomer(options.salesId,options.storeId)
    this.getProductSku()
    this.getProblems()
  },
  onUnload() {
    if(this.timeOut){
      clearTimeout(this.timeOut)
    }
    if(this.funtimeOut){
      clearTimeout(this.funtimeOut)
    }
  },
  onShow() {

  },
  created(){
    if (this.ticker) { //这一段是防止进入页面出去后再进来计时器重复启动
      clearInterval(this.ticker);
    }
  },
  methods: {
    previewImg(index,cindex){
      let img =  this.commentList[index].images[cindex]
      wx.previewImage({
        current: img, // 当前显示图片的http链接
        urls: [img] // 需要预览的图片http链接列表
      })
    },
    previewAddImg(index,cindex){
      let img =  this.commentList[index].images[cindex]
      wx.previewImage({
        current: img, // 当前显示图片的http链接
        urls: [img] // 需要预览的图片http链接列表 previewAddImg
      })
    },
    activeTypeActive(index){
      this.activeTypeFlag = index
    },
    //收藏
    collectProduct(){
      if(this.detailList.ifCollect == 0){
        this.collectPro()
      }else{
        this.cancelCollectPro()
      }
    },
    //收藏
    collectPro(){
      NET.request(API.collect, {
        productId:parseInt(this.productId)
      },'POST').then(res => {
        this.detailList.ifCollect = 1
        uni.showToast({
          title:'收藏成功',
          icon:"success"
        })
      }).catch(res => {
        uni.showToast({
          title:'失败',
          icon:"none"
        })
      })
    },
    //取消收藏
    cancelCollectPro(){
      NET.request(API.cancelCollect, {
        ids:[this.productId]
      },'PUT').then(res => {
        this.detailList.ifCollect = 0
        uni.showToast({
          title:'取消收藏成功',
          icon:"success"
        })
      }).catch(res => {
        uni.showToast({
          title:'失败',
          icon:"none"
        })
      })
    },
    //去拼单
    getGroupShow(collageId){
      this.goosDetailshowFlag = true
      this.collageId = collageId
    },
    //拼团下单
    getGroupSettlement(type){
      //判断是否登录
      let item = {}
      if(uni.getStorageSync('storage_key')){
        item = uni.getStorageSync('storage_key');
      }
      if(JSON.stringify(item) == '{}'){
        uni.navigateTo({
          url:'../../pages_category_page2/userModule/login'
        })
      } else if(this.stockNumber<1){
        uni.showToast({
          title:'库存不足',
          icon:"none"
        })
      }else{
        let data={}
        if(type == 1){
          data= {
            number:this.buyNum,
            productId:this.productId,
            shopId:this.shopId,
            skuId:this.skuProdId,
            shopGroupWorkId:this.shopGroupWorkId,
            type:type
          }
        }else{
          data= {
            collageId:this.collageId,
            number:this.buyNum,
            productId:this.productId,
            shopId:this.shopId,
            skuId:this.skuProdId,
            shopGroupWorkId:this.shopGroupWorkId,
            type:type
          }
        }
        uni.removeStorageSync("skuItemDTOList")
        uni.setStorageSync('skuItemList',data)
        console.log(uni.getStorageSync("skuItemList"),44444)
        this.goosDetailshowFlag = false
        this.buyNum = 1
        uni.navigateTo({
          url: '../orderModule/orderConfirm?type=1',
        })
      }
    },
    beginTimer() { //这个计时器是每秒减去数组中指定字段的时间
      this.ticker = setInterval(() => {
        for (let i = 0,len = this.detailList.collageOrders.length; i < len; i++) {
          const item = this.threecollageOrders[i];
          if (item.time > 0) {
            item.time = item.time - 1;
          }
        }
      }, 1000);
    },
    timeChange(countDown) {
      var $that = this;
      if (countDown < 0) {
        clearInterval(setInterval(this.timeChange(countDown), 1000)); //当无剩余时间了，就停止执行timeChange函数
      }
      //求天时分秒 leftDate是毫秒
      let leftSecond = $that.fillNumber(countDown % 60);
      let leftMinute = $that.fillNumber((countDown / 60) % 60);
      let leftHours = $that.fillNumber((countDown / (60 * 60)) % 24);
      let leftDay = $that.fillNumber(countDown / (60 * 60) / 24);
      if (leftHours == "00" && leftMinute == "00" && leftSecond == "-1") {
        clearTimeout(this.ticker)
        this.queryProductDetail()
      }
      return leftHours+":"+leftMinute+":"+leftSecond;
    },
    fillNumber(num) {
      let number = Math.floor(num); //向下取整
      return number > 9 ? number : "0" + number;
    },
    getfuntime(micro_second){
      // 总秒数
      let second = Math.floor(micro_second / 1000);
      // 天数
      let day = Math.floor(second / 3600 / 24);
      // 小时
      let hr = Math.floor(second / 3600 % 24);
      // 分钟
      let min = Math.floor(second / 60 % 60);
      // 秒
      let sec = Math.floor(second % 60);
      let outtime = ""
      outtime = hr +':'+ min + ':'+ sec
      return outtime
    },
    //时分秒换算
    dateformat(micro_second) {
      // 总秒数
      let second = Math.floor(micro_second / 1000);
      // 天数
      let day = Math.floor(second / 3600 / 24);
      // 小时
      let hr = Math.floor(second / 3600 % 24);
      // 分钟
      let min = Math.floor(second / 60 % 60);
      // 秒
      let sec = Math.floor(second % 60);
      this.hou = hr+day*24
      this.min = min
      this.sec = sec
    },
    countDown(){
      let timeOut = setTimeout(() => {
        let hou = parseInt(this.hou);
        let min = parseInt(this.min);
        let sec = parseInt(this.sec);

        let netxSec = sec - 1;
        let netxMin = min
        let netxHou = hou;
        if (netxHou == 0 && netxMin == 0 && netxSec == -1) {
          clearTimeout(timeOut)
          uni.switchTab({
            url:'../../pages/tabbar/index/index'
          })
          uni.showToast({
            title:"活动结束",
            duration:2000,
            icon:'none'
          })
        } else {
          if (netxSec == -1) {
            netxSec = 59
            netxMin = netxMin - 1;
          }
          if (netxMin == -1) {
            netxMin = 59
            netxHou = netxHou - 1
          }
          // if (netxHou == -1) {
          //   netxHou = 23
          // }

          this.hou = this.timeFormat(netxHou),
              this.min = this.timeFormat(netxMin),
              this.sec = this.timeFormat(netxSec),
              this.timeOut = timeOut
          this.countDown();
        }
      }, 1000)
    },
    timeFormat(param) { //小于10的格式化函数
      return param < 10 ? '0' + param : param;
    },
    goshopCart(){
      uni.switchTab({
        url:'../../pages/tabbar/cart/index'
      })
    },
    twonumansers(answers){
      let data = answers.slice(0,1)
      return data
    },
    //商品问答数据
    getProblems(){
      NET.request(API.getProblems, {
        productId:this.productId,
        page:this.problemsPage,
        pageSize:this.problemsPageSize
      },'GET').then(res => {
        this.getProblemsList = res.data.list
        this.problemsListLength = res.data.list.length
      }).catch(res => {
        uni.showToast({
          title:'失败',
          icon:"none"
        })
      })
    },
    moveHandle () {
      return
    },
    //查看所有评论
    commentAll() {
      uni.navigateTo({
        url: 'evaluateList?commentList=' + JSON.stringify(this.commentList)
      })
    },
    commentImgData(imgData) {
      let imgDataResult = []
      imgDataResult = imgData.split(",");
      return imgDataResult
    },
    top() { //回到顶部
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    //商品尺寸弹窗
    goosDetailshowClick(type, ifGroup) {
      this.btnType = type
      this.collageId = 0
      if (ifGroup === 'groupBuy') {
        this.ifGroupBuy = true
      } else {
        this.ifGroupBuy = false
      }
      this.goosDetailshowFlag = true
    },
    //商品参数弹窗
    parameterTruebut() {
      this.parameterShowFlag = false
    },
    parameterShowClick() {
      this.parameterShowFlag = true
    },
    //优惠券
    couponActive(type) {
      this.couponActiveFlag = type
    },
    //优惠券弹窗
    couponShowClick() {
      this.showActivity = true
    },
    //领取成功
    succeedShowClick() {
      this.succeedShowFlag = true
      if (this.succeedShowFlag == true) {
        setTimeout(() => {
          this.succeedShowFlag = false
        }, 1500);
      }
    },
    //颜色选中事件
    colorActiveClick(res, index, resIndex) {
      let t = this;
      t.selectArr[index] = res;
      t.subIndex[index] = resIndex;
      t.attrItemIdArr[index] = res.valueCode
      console.log(t.attrItemIdArr, 'attrItemIdArr')
      t.checkItem();
      t.checkItemDataClick(t.attrItemIdArr)
    },
    checkItem() {
      var self = this;
      var option = self.attrList;
      var result = []; // 定义数组存储被选中的值
      for (let i in option) {
        result[i] = self.selectArr[i] ? self.selectArr[i] : "";
        if (!self.subIndex[i]) {
          self.subIndex[i] = 0
        }
        if (!self.attrItemIdArr[i]) {
          self.attrItemIdArr[i] = option[i].values[0].valueCode
        }
      }
      for (let i in option) {
        var last = result[i]; // 把选中的值存放到字符串last去
        for (let k in option[i].item) {
          result[i] = option[i].item[k].name; // 赋值，存在直接覆盖，不存在往里面添加name值
        }
        result[i] = last; // 还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
      }
      self.$forceUpdate(); // 重绘
    },
    checkItemDataClick(attrItemIdArr) {
      let attrkey = ''
      for(let i =0;i<attrItemIdArr.length;i++){
        attrkey += attrItemIdArr[i]+','
      }
      attrkey = attrkey.substring(0,attrkey.length - 1)
      let mapinfo = this.skuProdList.map
      for (var key in mapinfo){
        if(attrkey == key){
          this.skuProdId = mapinfo[key].skuId
          this.skuImg = mapinfo[key].skuImg
          this.skuPrice = mapinfo[key].price
          this.skuOriginalPrice = mapinfo[key].originalPrice
          console.log(this.skuOriginalPrice,1111)
          this.stockNumber = mapinfo[key].stockNumber
        }
      }
      console.log(attrItemIdArr.length, 'num')
      var currentCode = ''
      for (var i=0; i<attrItemIdArr.length; i++) {
        if (i === 1 && attrItemIdArr.length > 1) {
          currentCode += ','+attrItemIdArr[i]
        } else {
          currentCode += attrItemIdArr[i]
        }
      }
      for (let key in this.skuProdList.map) {
        if (key == currentCode) {
          this.skuImg = this.skuProdList.map[key].image
          if (this.skuProdList.map[key].activityType == 1) {
            this.ifGroupPro = true
            return false
          } else {
            this.ifGroupPro = false
          }
        }
      }
      console.log(this.skuProdList, 'list')
    },
    getProductSku(){
      NET.request(API.QueryProductSku, {
        skuId:this.skuId,
        productId:this.productId
      }, 'GET').then(res => {
        this.skuProdList = res.data
        this.attrList = res.data.names
        this.attrValueList = res.data.names[0].values
        //渲染商详之后，默认先选中第一个规格
        this.colorActiveClick(this.attrValueList[0],0,0)
        this.skuProdId = this.skuId
        this.skuImg = res.data.image
        this.skuPrice = res.data.price
        this.skuOriginalPrice = res.data.originalPrice
        // console.log(this.skuOriginalPrice,333)
        this.stockNumber = res.data.stockNumber
      }).catch(res => {

      })

    },
    //大小尺寸选中事件
    modelNumActiveClick(type) {
      this.modelNumActiveId = type
    },
    //获取商品详情
    queryProductDetail() {
      uni.showLoading({
        title: '加载中...'
      })
      NET.request(API.QueryProductDetail,
          {
            shopId:this.shopId,
            productId:this.productId,
            skuId:this.skuId,
            terminal:1
          },
          "GET").then(res => {
        uni.hideLoading()
        this.detailList = res.data
        this.markTools = res.data.markTools//平台优惠券
        this.shopMarkTools = res.data.shopMarkTools//店铺优惠券
        if(this.detailList.activityType == 1 && this.detailList.ifEnable == 0){
          this.threecollageOrders = res.data.collageOrders.slice(0,2)
          this.dateformat(res.data.time)
          this.countDown();
        }else if(this.detailList.activityType == 3 && this.detailList.ifEnable == 0){
          this.dateformat(res.data.time)
          this.countDown();
        }else if(this.detailList.activityType == 2 && this.detailList.ifEnable == 0){
          this.dateformat(res.data.time)
          this.countDown();
        }
        //评价
        this.ifEnable = res.data.ifEnable
        if(this.ifEnable == 0){
          this.timeActivetype = true
        }else{
          this.timeActivetype = false
        }
        this.commentList = res.data.comments
        this.commentListLength = this.commentList.length
        this.sellDescList = res.data.text.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
        this.couponListLength = res.data.couponImages.length
        this.showVOList = res.data.couponImages
        this.couponList = res.data.markTools
        this.skuPrice = res.data.price
        this.skuOriginalPrice = res.data.originalPrice
        console.log(this.skuOriginalPrice,4444)
        this.shopGroupWorkId = res.data.shopGroupWorkId
        this.shopDiscountId = res.data.shopDiscountId
        this.shopSeckillId = res.data.shopSeckillId
        for (let i = 0; i < res.data.attrList.length; i++) {
          this.subIndex[i] = 0
        }
        this.attrItemIdArr[0] = res.data.attrList[0].attrValueList[0].id

        this.beginTimer();
      }).catch(res => {
        uni.hideLoading()
      })

    },
    // 查看全部问答
    seeAllFn (problemId) {
      let data = {
        productId:this.productId,
        img:this.detailList.images[0],
        productName:this.detailList.productName,
        questionlength:this.problemsListLength,
        problemId:problemId
      }
      uni.setStorageSync("seeAllFnData",data)
      uni.navigateTo({
        url: 'qADetail'
      })
    },
    // 查看当前全部回答
    seeAllQa () {
      uni.navigateTo({
        url: 'answerList?productId='+this.productId+"&img="+this.detailList.images[0]+'&productName='+this.detailList.productName
      })
    },
    // 提问
    goToQuestions () {
      let data={
        productId:this.productId,
        images:this.detailList.images[0],
        productName:this.detailList.productName,
        questionNumber:this.getProblemsList.length
      }
      uni.navigateTo({
        url: 'putQuestions?data='+JSON.stringify(data)
      })
    },
    // 数量减
    numSub() {
      if (this.buyNum > 1) {
        this.buyNum = this.buyNum - 1
      } else {
        uni.showToast({
          title: '亲！至少一件哦！',
          icon: "none"
        })
      }
    },
    // 数量加
    numAdd() {
      if(this.buyNum < this.stockNumber){
        this.buyNum = this.buyNum + 1
      }else{
        uni.showToast({
          title: '库存不足！',
          icon: "none"
        })
      }
    },
    //加入购物车
    addCart() {
      //判断是否登录
      let item = {}
      if(uni.getStorageSync('storage_key')){
        item = uni.getStorageSync('storage_key');
      }
      if(JSON.stringify(item) == '{}'){
        uni.navigateTo({
          url:'../../pages_category_page2/userModule/login'
        })
      }else{
        if(this.stockNumber<1){
          uni.showToast({
            title:'库存不足',
            icon:"none"
          })
        }else{
          wx.showLoading({
            title: '添加中...',
          })
          NET.request(API.ShoppingaddCart, {
            skuId: this.skuProdId,
            number: this.buyNum,
          }, 'POST').then(res => {
            uni.hideLoading()
            uni.showToast({
              title: '添加成功',
              icon: 'none'
            })
            setTimeout(() => {
              this.goosDetailshowFlag = false
            }, 1500);
            this.buyNum = 1
          }).catch(res => {
            uni.hideLoading()
            if (res.data.code == 40005) {
              uni.navigateTo({
                url: '../../pages_category_page2/userModule/login'
              })
            }
          })
        }
      }
    },
    //逛店铺
    goStore() {
      uni.navigateTo({
        url: '../store/index?storeId=' + this.skuProdList.shopId
      })
    },
    //点赞
    zanTap(index, likeId, actionType) {
      uni.showLoading({
        title: '提交中...',
      })
      NET.request(API.LikeOrUnLikeComment, {
        commentId: likeId,
        ifLike: actionType
      }, 'POST').then(res => {
        uni.hideLoading()
        // this.commentVOList[index].ifLike = !this.commentVOList[index].ifLike
        // this.commentVOList[index].likes = this.commentVOList[index].ifLike ? this.commentVOList[index].likes + 1 :
        //     this.commentVOList[index].likes - 1
        if (this.commentList[index].ifLike == 1) {
          this.commentList[index].ifLike = 0
          this.commentList[index].likes = this.commentList[index].likes - 1
        } else {
          uni.showToast({
            title: "点赞成功",
            icon: 'none'
          })
          this.commentList[index].likes = this.commentList[index].likes + 1
          console.log(this.commentList[index].likes, 'num')
          this.commentList[index].ifLike = 1
        }
      }).catch(res => {
        uni.hideLoading()
      })
    },
    //关闭优惠券弹窗
    onActivityClose() {
      this.showActivity = false
    },
    getDate(time) {
      if (!time) return '';
      return time.split(' ')[0]
    },
    receiveTap(couponItemInfo,type) {
      uni.showLoading({
        title: '领取中...',
      })
      let ReceiveCoupon
      if(type == 0){
        ReceiveCoupon = {
          couponId: couponItemInfo.couponId
        }
      }else{
        ReceiveCoupon = {
          shopCouponId: couponItemInfo.shopCouponId
        }
      }
      NET.request(API.ReceiveCoupon, ReceiveCoupon, 'POST').then(res => {
        uni.hideLoading()
        this.queryProductDetail()
        this.isShowSuccess = true
        setTimeout(() => {
          this.isShowSuccess = false
        }, 1500);
        setTimeout(() => {
          this.showActivity = false
        }, 3000);
      }).catch(res => {
        uni.hideLoading()
        uni.showToast({
          title: res.msg,
          icon: 'none'
        })
      })
    },
    //立即购买
    addFast(type) {
      //判断是否登录
      let item = {}
      if (uni.getStorageSync('storage_key')) {
        item = uni.getStorageSync('storage_key');
      }
      if (JSON.stringify(item) == '{}') {
        uni.navigateTo({
          url: '../../pages_category_page2/userModule/login'
        })
      } else {
        if(type == 1){
          this.ifWork = 1
        }else{
          this.ifWork = 0
        }
        if(this.stockNumber<1){
          uni.showToast({
            title:'库存不足',
            icon:"none"
          })
        } else if(this.buyNum > this.detailList.users && this.detailList.users != 0) {
            uni.showToast({
              title:'已超出最大数量限制',
              icon:"none"
            })
          } else {
          let list = [{
            ifWork:this.ifWork,
            shopId:'',
            shopName:'',
            shopDiscountId:null,
            shopSeckillId:null,
            skus:[//商品明细
              {
                productId:0,
                skuId:0,
                productName:"",
                image:"",
                price:0,
                weight:0,
                number:0,
                SKU:"",
                total:0,
                ifLogistics:1
              }
            ]
          }]
          list[0].shopId = this.detailList.shopId
          list[0].shopName = this.detailList.shopName
          list[0].skus[0].productId = this.skuProdList.productId
          list[0].skus[0].skuId = this.skuProdId
          list[0].skus[0].productName = this.skuProdList.productName
          list[0].skus[0].image = this.skuImg
          list[0].skus[0].weight = this.skuProdList.weight
          list[0].skus[0].number = this.buyNum
          list[0].skus[0].SKU = this.skuProdList.SKU
          console.log(type,this.skuOriginalPrice,9999)
          if(type == 1){
            list[0].skus[0].price = this.skuOriginalPrice
            list[0].skus[0].total = this.skuOriginalPrice * this.buyNum
          }else{
            list[0].skus[0].price = this.skuPrice
            list[0].skus[0].total = this.skuPrice * this.buyNum
          }

          list[0].skus[0].ifLogistics = this.skuProdList.ifLogistics
          if(this.shopSeckillId>0){
            list[0].shopSeckillId = this.shopSeckillId
          }
          console.log(this.shopDiscountId,555)
          if(this.shopDiscountId>0){
            list[0].shopDiscountId = this.shopDiscountId
          }
          uni.setStorageSync('skuItemDTOList',list)
          this.goosDetailshowFlag = false
          uni.navigateTo({
            url: '../orderModule/orderConfirm?type=1',
          })
          this.buyNum = 1
        }
      }
    },
    bindSalesCustomer(salesId,storeId) {
      if (salesId) {
        //如果已登录，静默绑定客户关系，否则跳转到登录页面
        if (uni.getStorageSync('storage_key')) {
          NET.request(API.BindSalesCustomer, {
            shopId:storeId,
            distributorId: salesId
          }, 'POST').then(res => {
            uni.showToast({
              title: "绑定成功",
              icon: "none"
            })
          }).catch(res => {
            uni.showToast({
              title: res.data.msg,
              icon: "none"
            })
          })
        } else {
          uni.setStorageSync('salesId', salesId)
          uni.setStorageSync("shopId",storeId)
          uni.navigateTo({
            url: '../../pages_category_page2/userModule/login'
          })
        }
      }
    },
    openAllBuy () {
      this.showGroupBuyList = true
    },
    openAllBuyTwo(){
      uni.showToast({
        title: "还没有人拼单，快去拼单吧！",
        icon: "none"
      })
    }
  },
  mounted() {
    // 获取手机的屏幕高度
    uni.getSystemInfo({
      success: (res) => {
        this.screenHeight = res.screenHeight
      }
    })
  },
  onPageScroll: function(e) {
    if (e.scrollTop > 600) {
      this.returnTopFalg = true
    } else {
      this.returnTopFalg = false
    }
  },
}
</script>

<style lang="scss">
.page {
  background-color: #F7F7F7;
}
.couponItemimg{
  width: 150upx;
  height: 60upx;
}
.tabsbox{
  width: 100%;
  margin-top: 20rpx;
  background-color: #FFFFFF;
}
.joinbuyBut{
  width: 690upx;
  height: 80upx;
  border-radius: 40upx 40upx;
  background-image: linear-gradient(135deg, #FFA100 10%, #FF7911 100%);
  color: #FFFEFE;
  font-size: 28upx;
  line-height: 80upx;
  text-align: center;
}
.checkimg{
  width: 40upx;
  height: 40upx;
  margin-right: 30upx;
}
.container {
  padding-bottom: 180upx;
  .arrow-icon {
    width: 24upx;
    height: 24upx;
  }

  .goodsImgswiper-box {
    width: 750upx;
    height: 750upx;

    .goodsImg {
      width: 750upx;
      height: 750upx;
    }
  }

  .share-box {
    width: 200upx;
    height: 60upx;
    background-color: #FFFFFF;
    border-radius: 30upx 0 0 30upx;
    position: absolute;
    top: 30upx;
    right: 0;

    .share-img {
      width: 36upx;
      height: 36upx;
    }
  }

  .goodgDes-box {
    background-color: #FFFFFF;
    width: 100%;
    padding-bottom: 25upx;

    .priceBuyNum-box {
      width: 677upx;
      margin-top: 30upx;
    }

    .goodsName-box {
      width: 677upx;
      height: 85upx;
      .img618-cion {
        width: 70upx;
        height: 36upx;
      }
    }

    .discounts-box {
      margin-top: 20upx;

      .discounts-text {
        margin-left: 10upx;
        color: #FF7800;
        background-color: #FFE4CC;
        padding: 6upx 12upx;
        border-radius: 4upx;
      }
    }

    .activity-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      .activity-content {
        border-top: 1upx solid #EDEDED;
        width: 614upx;
        padding-top: 20upx;

        .activity-text {
          color: #FF7700;
          border: 1upx solid #FF7700;
          padding: 6upx 23upx;
        }

        .coupon-arrow {
          width: 24upx;
          height: 24upx;
          margin-left: 15upx;
        }
      }
    }
  }

  .express-box {
    height: 90upx;
    background-color: #FFFFFF;
    .expressSite-icon {
      width: 30upx;
      height: 30upx;
    }
  }

  .chooseSize-box {
    height: 90upx;
    background-color: #FFFFFF;

    .chooseSize-content {
      width: 720upx;
    }
  }

  .evaluate-box {
    background-color: #FFFFFF;
    margin-top: 20upx;

    .evaluate {
      width: 690upx;
      padding: 20upx 0;
      border-bottom: 1upx solid #EDEDED;
    }

    .evaluateTitle-box {
      width: 690upx;
      border-bottom: 1upx solid #EDEDED;
      padding-bottom: 20upx;
    }

    .evaluateAllArrow-icon {
      width: 24upx;
      height: 24upx;
    }

    .evaluateTag-box {
      margin-top: 10upx;
      margin-left: 10upx;
      padding-bottom: 10upx;
      display: flex;
      flex-wrap: wrap;

      .evaluateTag-text {
        background-color: #FFE4CC;
        border-radius: 6upx;
        padding: 16upx 14upx;
        color: #656565;
        margin-left: 20upx;
        margin-top: 20upx;
      }
    }

    .evaluate-contentbox {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 30upx;
      // border-bottom: 1upx solid #EDEDED;
      padding-bottom: 50upx;

      .evaluate-content {
        width: 670upx;
        display: flex;
        justify-content: space-between;

        .user-headSmallImg {
          width: 46upx;
          height: 46upx;
          border-radius: 50%;
        }
      }

      .evaluateDes-box {
        width: 670upx;
        margin-top: 30upx;

        .evaluateDes {
          width: 670upx;
        }
      }
      .addEvaluate {
        padding-top: 30upx;
      }
    }
  }
  .questions {
    .questionInfo {
      padding: 0 30upx;
      height: 90upx;
      margin-bottom: 50upx;
      .infoTit {
        font-size: 28upx;
      }
      .putQuestion {
        width: 110upx;
        height: 44upx;
        background: #FFFFFF;
        border: 1px solid #FF7800;
        border-radius: 22upx;
        text-align: center;
        line-height: 44upx;
        font-size: 24upx;
        color: #FF7800;
      }
    }
    .listBox {
      padding: 0 30upx;
      border-bottom: 20upx solid #EEEEEE;
      .itemBox {
        padding-bottom: 30upx;
        border-bottom: 1upx solid #EEEEEE;
        margin-bottom: 30upx;
        &:last-child {
          border-bottom: none;
        }
        .itemAsk {
          display: flex;
          align-items: center;
          margin-bottom: 42upx;
          i {
            font-style: normal;
            width: 38upx;
            height: 38upx;
            line-height: 38upx;
            background: linear-gradient(0deg, #FF7800 0%, #F79D4D 100%);
            border-radius: 4upx;
            display: block;
            margin-right: 30upx;
            font-size: 28upx;
            color: #FFFFFF;
            text-align: center;
          }
          span {
            font-size: 28upx;
            color: #333333;
          }
        }
        .answer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30upx;
          .answerBox {
            display: flex;
            align-items: center;
            i {
              font-style: normal;
              width: 38upx;
              height: 38upx;
              line-height: 38upx;
              background: linear-gradient(0deg, #2DB76F 0%, #67C192 100%);
              border-radius: 4upx;
              display: block;
              text-align: center;
              margin-right: 30upx;
              color: #FFFFFF;
            }
            span {
              font-size: 26upx;
              color: #666666;
            }
          }
          .answerBtn {
            width: 130upx;
            height: 44upx;
            line-height: 44upx;
            background: #FFFFFF;
            border: 1px solid #FF7800;
            border-radius: 22upx;
            text-align: center;
            color: #FF7800;
            font-size: 24upx;
          }
        }
        .seeAll {
          margin-left: 68upx;
          font-size: 28upx;
          color: #FF7800;
        }
      }
    }
  }
  .questionTit {
    height: 90upx;
    border-bottom: 1upx solid #EEEEEE;
    margin-right: 35upx;
    color: #333333;
    font-size: 30upx;
    .allMoreBox {
      display: flex;
      align-items: center;
      color: #999999;
      font-size: 24upx;
      .evaluateAllArrow-icon {
        width: 24upx;
        height: 24upx;
      }
    }
  }
  .shopEvaList {
    display: flex;
    padding: 30upx;
    flex-wrap: wrap;
    border-bottom: 20upx solid #EEEEEE;
    .shopEvaItem {
      padding: 0 14upx;
      height: 60upx;
      background: #ffe4cc;
      border-radius: 6upx;
      line-height: 60upx;
      text-align: center;
      font-size: 28upx;
      color: #666666;
      margin: 0 20upx 20upx 0;
    }
  }
  .storeEvaluate-box {
    background-color: #FFFFFF;
    margin-top: 20upx;

    .storeEvaluate {
      width: 690upx;
      padding: 20upx 0;
      border-bottom: 1upx solid #EDEDED;
    }

    .storeEvaluateTag-box {
      margin-top: 10upx;
      margin-left: 10upx;
      padding-bottom: 30upx;
      display: flex;
      flex-wrap: wrap;

      .storeEvaluateTag-text {
        background-color: #FFE4CC;
        border-radius: 6upx;
        padding: 16upx 14upx;
        color: #656565;
        margin-left: 20upx;
        margin-top: 20upx;
      }
    }
  }

  .inStore-box {
    background-color: #FFFFFF;
    margin-top: 20upx;
    padding: 20upx 30upx;

    .inStore-logo {
      width: 70upx;
      height: 70upx;
    }

    .inStore-but {
      border: 1upx solid #999999;
      border-radius: 22upx;
      width: 110upx;
      height: 44upx;
      line-height: 44upx;
      text-align: center;
      font-size: 24upx;
      color: #999999;
    }
  }

  .goodsDetails-box {
    background-color: #FFFFFF;
    margin-top: 20upx;
    padding: 20upx 30upx;

    .goodsDetails-title {
      display: flex;
      flex-direction: row;
      align-items: center;

      .goodsDetails-Line {
        width: 265upx;
        border-bottom: 1upx solid #EDEDED;
      }

      .goodsDetails-text {
        padding: 0 22upx;
      }
    }

    .goodsDetailsimg-box {}
  }

  .priceExplain-box {
    background-color: #FFFFFF;
    margin-top: 20upx;
    padding: 20upx 30upx;

    .priceExplain-title {
      display: flex;
      flex-direction: row;
      align-items: center;

      .priceExplain-Line {
        width: 265upx;
        border-bottom: 1upx solid #EDEDED;
      }

      .priceExplain-text {
        padding: 0 22upx;
      }
    }

    .priceExplain-dot {
      width: 9upx;
      height: 9upx;
      border: 1upx solid #FF7700;
      border-radius: 50%;
      background-color: #FF7700;
    }
  }

  .buygoods-box {
    position: fixed;
    bottom: 0upx;
    box-sizing: border-box;

    .buygoodsBut-box {
      background-color: #FFFFFF;
      width: 750upx;
      padding: 20upx 32upx;
      box-shadow: 0upx 0upx 10upx 1upx #EDEDED;
      box-sizing: border-box;

      .store-icon {
        width: 48upx;
        height: 48upx;
      }

      .joinShopCartBut {
        width: 214upx;
        height: 80upx;
        border-radius: 40upx 0 0 40upx;
        background-color: #FFC300;
        color: #FFFEFE;
        font-size: 28upx;
        line-height: 80upx;
        text-align: center;
        margin-left: 30upx;
        box-sizing: border-box;
      }

      .buyNowBut {
        width: 214upx;
        height: 80upx;
        border-radius: 0 40upx 40upx 0;
        background-image: linear-gradient(135deg, #FFA100 10%, #FF7911 100%);
        color: #FFFEFE;
        font-size: 28upx;
        line-height: 80upx;
        text-align: center;
      }
      .offShelf {
        background: #b7b7b7;
        border-radius: 50upx;
        width: 360upx;
        margin-left: 50upx;
        line-height: 80upx;
        height: 80upx;
        justify-content: center;
        color: #333333;
      }
    }
  }

  .returnTopService-box {
    position: fixed;
    bottom: 160upx;
    right: 30upx;
    display: none;

    .returnTop-box {
      width: 90upx;
      height: 90upx;
      border-radius: 50%;
      background-color: #FFFFFF;
      box-shadow: 0upx 0upx 5upx 3upx #999999;

      .returnTopImg {
        width: 36upx;
        height: 36upx;
      }
    }

    .serviceImg-box {
      width: 90upx;
      height: 90upx;
      border-radius: 50%;
      background-color: #FFFFFF;
      box-shadow: 0upx 0upx 5upx 3upx #999999;

      .serviceImg {
        width: 36upx;
        height: 36upx;
      }
    }
  }

  .goosDetailshow-box {
    .detailImg-box {
      margin-top: 30upx;
      margin-left: 30upx;
      border-radius: 10upx;
      border-bottom: 1upx solid #EDEDED;
      padding-bottom: 20upx;
      width: 690upx;

      .detailImg {
        width: 180upx;
        height: 180upx;
      }
    }

    .color-box {
      padding: 30upx 30upx;
      border-bottom: 1upx solid #EDEDED;
      width: 690upx;

      .colorName-box {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 30upx;
        margin-left: -30upx;

        .colorName-on {
          background-color: #FFE5D0;
          color: #FF7800;
          margin-left: 30upx;
          padding: 10upx 32upx;
          border-radius: 28upx;
          border: 1upx solid #FF7800;
          font-size: 26upx;
          text-align: center;
          z-index: 1;
        }

        .colorName {
          background-color: #F5F5F5;
          margin-left: 30upx;
          padding: 10upx 32upx;
          border-radius: 28upx;
          font-size: 26upx;
          z-index: 2;
        }
      }

    }

    .modelNum-box {
      padding: 30upx 30upx;
      border-bottom: 1upx solid #EDEDED;
      width: 690upx;

      .modelNumName-box {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 30upx;
        margin-left: -30upx;

        .modelNumName-on {
          background-color: #FFE4D0;
          color: #FF7800;
          margin-left: 30upx;
          padding: 10upx 32upx;
          border-radius: 28upx;
          border: 1upx solid #FF7800;
          font-size: 26upx;
          text-align: center;
        }

        .modelNumName {
          background-color: #F5F5F5;
          margin-left: 30upx;
          padding: 10upx 32upx;
          border-radius: 28upx;
          font-size: 26upx;
        }
      }
    }

    .goodsNum-box {
      padding: 30upx 30upx;
      width: 690upx;
      padding-bottom: 268upx;

      .goodsNumber {
        border: 1upx solid #999999;
        padding: 3upx 20upx;
      }

      .subtract {
        border: 1upx solid #999999;
        padding: 3upx 20upx;
        margin-right: -1upx;
      }

      .add {
        border: 1upx solid #999999;
        padding: 3upx 20upx;
        margin-left: -1upx;
      }
    }

    .goosDetailbut-box {
      justify-content: center;
      .joinShopCartBut {
        width: 343upx;
        height: 80upx;
        border-radius: 40upx 0 0 40upx;
        background-color: #FFC300;
        color: #FFFEFE;
        font-size: 28upx;
        line-height: 80upx;
        text-align: center;
        margin-left: 30upx;
      }

      .buyNowBut {
        width: 343upx;
        height: 80upx;
        border-radius: 40upx;
        background-color: #FF6F00;
        color: #FFFEFE;
        font-size: 28upx;
        line-height: 80upx;
        text-align: center;
      }
    }
  }

  .parameterShow-box {
    .parameter-title {
      width: 100%;
      text-align: center;
      padding-bottom: 36upx;
    }

    .parameter-modle {
      width: 690upx;
      padding-bottom: 36upx;
      font-size: 26upx;
    }

    .parameterTruebut-box {
      background-color: #FFFFFF;
      padding: 20upx 0;

      .parameterTruebut {
        width: 690upx;
        height: 80upx;
        background-image: linear-gradient(135deg, #FFA100 10%, #FF7911 100%);
        color: #FFFFFF;
        border-radius: 40upx;
        line-height: 80upx;
        text-align: center;
        font-size: 26upx;
      }
    }
  }

  .couponShow-box {

    .couponShow {
      z-index: 333;
      height: 1000upx;

      .couponTitle-box {
        width: 100%;
      }

      .coupon-title-active {
        color: #FF7700;
        border-bottom: 2upx solid #FF7700;
        padding-bottom: 30upx;
      }

      .usableCoupon-content {
        padding: 30upx 0;

        .usableCoupon-box {
          width: 690upx;
          height: 140upx;
          border-radius: 10upx;
          background-color: #FFE9D8;

          .immediateUse-but {
            color: #FF7800;
            border-radius: 30upx;
            padding: 0 40upx;
            border-left: 3upx solid #EBD7C7;
            height: 140upx;
            border-radius: 60upx;
            line-height: 140upx;
            font-weight: bold;
          }
        }
      }
    }

  }

  .succeedShow-box {
    position: absolute;
    top: 220upx;
    left: 185upx;

    .succeedShow {
      background-color: #7F7F7F;
      width: 380upx;
      height: 280upx;
      border-radius: 10upx;
      opacity: 0.8;

      .couponSucceedImg {
        width: 200upx;
        height: 130upx;
      }
    }
  }
}

.activity-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.activity-box .title-box {
  width: 100%;
  height: 100upx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: solid 1px #EEEEEE;
}

.activity-coupon-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  flex: 1;
}

.title-box .close-btn {
  width: 100upx;
  height: 100upx;
  box-sizing: border-box;
  padding: 30upx;
  position: absolute;
  top: 0;
  right: 0;
}

.content-box {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30upx;
}

.tag-box {
  width: 100%;
  box-sizing: border-box;
  height: 80upx;
  line-height: 80upx;
  font-size: 28upx;
  font-weight: 500;
  color: #FF7911;
}

.label-lingqu {
  width: 100%;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}

.coupon-item {
  width: 690upx;
  height: 120upx;
  border-radius: 10upx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20upx;
  flex-shrink: 0;
  background-color: #FFE9D8;
}

.money-box {
  width: 160upx;
  box-sizing: border-box;
  padding-left: 30upx;
  font-weight: 500;
  color:#FF7911;
}

.info-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgba(255, 121, 17, 1);
}

.receive-btn {
  width: 200upx;
  height: 120upx;
  background: rgba(255, 233, 216, 1);
  box-shadow: 0px 0px 5upx 0px rgba(102, 102, 102, 0.35);
  line-height: 120upx;
  text-align: center;
  font-size: 28upx;
  font-weight: bold;
  color: rgba(255, 121, 17, 1);
  border-bottom-right-radius: 10upx;
  border-top-right-radius: 10upx;
  border-top-left-radius: 120upx;
  border-bottom-left-radius: 120upx;
}

.received {
  background: #f1f1f1;
  color: #999;
}

.receive-success {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 8888;
}

.item-image-box {
  width: 700upx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.img-item {
  width: 223upx;
  height: 223upx;
  border-radius: 10upx;
  margin-right: 10upx;
  margin-top: 10upx;
}

.item-line {
  width: 690upx;
  height: 1px;
  background: rgba(238, 238, 238, 1);
  margin-top: 20upx;
}

.item-like-box {
  display: flex;
  flex-direction: row;
  width: 690upx;
  align-items: center;
  justify-content: space-between;
}

.like-box {
  display: flex;
  flex-direction: row;
  padding-top: 30upx;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50upx;
}

.like-img {
  width: 36upx;
  height: 36upx;
}

.like-num {
  font-size: 28upx;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-left: 30upx;
}

.success-box {
  width: 380upx;
  height: 280upx;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10upx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.success-box .success-img {
  width: 200upx;
  height: 130upx;
}

.success-box .text {
  font-size: 28upx;
  margin-top: 50upx;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.seckill-box{
  width: 100%;
  height: 138rpx;
  background-repeat:no-repeat;
  background-image: url('data:image/png;base64,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');
  background-size: 100% 138rpx;
  .seckill-icon{
    width: 174rpx;
    height: 64rpx;
  }
  .discount-icon{
    width: 224rpx;
    height: 64rpx;
  }
  .spell-icon{
    width: 196rpx;
    height: 64rpx;
  }
  .countdown{
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .countdown-box{
    padding: 0 8rpx;
    height: 48rpx;
    color: #F8282B;
    background-color: #FFFFFF;
    margin: 10rpx 10rpx;
  }
}
.goodsDiscount {
  .groupBuy {
    .groupBuyList {
      .groupBuyItem {
        padding: 0 30upx;
        height: 116upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1upx solid #EEEEEE;
        .leftAvatar {
          display: flex;
          align-items: center;
          width: 50%;
          img {
            width: 72upx;
            height: 72upx;
            margin-right: 10upx;
            border-radius: 50%;
          }
        }
        .rightInfo {
          display: flex;
          align-items: center;
          width: 50%;
          .groupBuyTime {
            .needPeople {
              font-size: 26upx;
              color: #333333;
              margin-bottom: 10upx;
              b {
                color: #FF7800;
              }
            }
            .endDate {
              color: #666666;
            }
          }
          .groupBuyBtn {
            width: 140upx;
            height: 60upx;
            line-height: 60upx;
            background: linear-gradient(247deg, #F71622, #FE6F52);
            border: 1upx solid #FF736C;
            border-radius: 8upx;
            text-align: center;
            color: #FFFFFF;
          }
        }
      }
    }
  }
}
.popupDiscount {
  padding-bottom: 70upx;
  .popupDiscountTit {
    font-size: 36upx;
    color: #333333;
    height: 105upx;
    line-height: 105upx;
    text-align: center;
    border-bottom: 1upx solid #EEEEEE;
  }
  .groupBuy {
    padding-bottom: 80upx;
    .groupBuyList {
      .groupBuyItem1 {
        padding: 0 30upx;
        height: 116upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1upx solid #EEEEEE;
        .leftAvatar {
          display: flex;
          align-items: center;
          img {
            width: 72upx;
            height: 72upx;
            margin-right: 10upx;
            border-radius: 50%;
          }
          .groupBuyTime {
            margin-right: 80upx;
            margin-bottom: 10upx;
            width: 320upx;
            .needPeople {
              font-size: 26upx;
              color: #666666;
              span {
                color: #333333;
                padding-right: 10upx;
              }
            }
            .endDate {
              color: #666666;
            }
          }
        }
        .rightInfo {
          display: flex;
          align-items: center;
          .groupBuyBtn {
            width: 140upx;
            height: 60upx;
            line-height: 60upx;
            background: linear-gradient(247deg, #F71622, #FE6F52);
            border: 1upx solid #FF736C;
            border-radius: 8upx;
            text-align: center;
            color: #FFFFFF;
          }
        }
      }
    }
  }
}
</style>
