<!-- 商品页左上角弹出层 -->
<template>
  <div class="more">
    <ul>
      <li>
        <van-icon class="icon" name="friends-o" />
        <span class="title" >我的好友</span>
      </li>
      <li>
         <van-icon class="icon" name="shopping-cart-o" />
        <span class="title">我的购物车</span>
      </li>
      <van-divider />
       <li>
        <van-icon class="icon" name="friends-o" />
        <span class="title" >我的收藏</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.more {
  margin: 10px 8px 0;
.icon {
  font-size: 18px;
}
.title {
  font-size: 14px;
  padding-left: 5px;
}
}
li {
  margin-top: 20px;
}
</style>
