<!-- 朋友圈组件 -->
<template>
  <div class="msg">
   <van-nav-bar
  title="消息"
  left-text=""
  @click-left="onClickLeft"
/>
<div class="layout">
<van-grid :border="false">
  <van-grid-item icon="like" text="粉丝" />
  <van-grid-item icon="thumb-circle" text="赞" />
  <van-grid-item icon="smile" text="@我的" />
  <van-grid-item icon="comment-circle" text="评论" />
</van-grid>
<van-divider />
<van-cell  title="通知" icon="comment-circle" is-link>
</van-cell>
<van-divider style="border-style:none" />
<van-cell  title="好友请求" icon="comment-circle" is-link>
</van-cell>
<!-- <van-divider /> -->
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.msg{
  .title {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 500px;
  }
  .layout {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>
