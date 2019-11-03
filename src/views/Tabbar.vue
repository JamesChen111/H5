<!-- 底部导航栏 -->
<template>
  <div class="tabbar">
    <van-tabbar route v-model="active">
      <van-tabbar-item name="home" replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="goods" replace to="/goods" icon="shopping-cart-o">尤物</van-tabbar-item>
      <div class="publish">
        <div class="add">
          <van-icon name="plus" v-on:click="popup" />
        </div>
      </div>
      <van-tabbar-item name="friends" replace to="/friends" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item name="me" replace to="/me" icon="user-o">我</van-tabbar-item>
    </van-tabbar>
    <van-popup
      v-model="show"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '100%' }"
    ><upload /></van-popup>
  </div>
</template>

<script>
import Upload from './Upload';
export default {
  components: {
    Upload,
  },
  data() {
    return {
      active: "home",
      show: false
    };
  },
  methods: {
    popup() {
      console.log("ok");
      this.show = !this.show;
    },
  }
};
</script>

<style lang="scss" scoped>
.publish {
  display: flex;
  justify-content: center;
  align-items: center;
  .add {
    border-radius: 50%;
    padding: 8px;
    background: #f55a4e;
    color: #fff;
  }
}
</style>
