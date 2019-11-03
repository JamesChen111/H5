<!-- 发布组件 -->
<template>
  <div class="upload">
    <div class="navbar">
      <div class="blank"></div>
      <span class="title">新动态</span>
      <van-button type="primary" size="small" round>发布</van-button>
    </div>
    <div class="add-img">
      <van-uploader v-model="fileList" multiple /><br />
      <input class="input" type="text" placeholder="填写标题..."><hr />
      <textarea class="textarea" placeholder="分享你的心得吧"></textarea>
      <hr>
      <div class="spot">
        <div class="icon-left">
          <van-icon name="map-marked" /><span>添加地点</span>
        </div>
        <div class="icon-right">
          <van-icon name="arrow" />
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.upload {
  margin: 10px 10px 50px;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    margin-bottom: 10px;
    .blank {
      width: 10px;
    }
    .title {
      font-size: 16px;
      margin-right: 20px;
    }
  }
  .add-img {
    .input {
      width: 100%;
      border: 0;
      font-size: 14px;
    }
    .textarea {
      width: 100%;
      height: 200px;
      resize: none;
      border: 0;
      font-size: 14px;
    }
  }
  .spot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    font-size: 16px;
    span {
      padding-left: 5px;
      font-size: 14px;
    }
  }
  .submit {
    margin-top: 50px;
    text-align: center;
  }
}
</style>
