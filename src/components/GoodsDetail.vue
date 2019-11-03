<template>
  <div class="goods-detail">
    <van-nav-bar
  title="详情页"
  left-text="返回"
  left-arrow
  @click-left="goback"
  class="nav-bar"
/>
    <van-loading 
    v-if="loading" 
    class="loading" 
    size="35px" 
    color="#1989fa"
    >加载中...
    </van-loading>
    <div class="imgText">
      <img :src="res.img" alt />
      <p class="title">{{ res.title }}</p>
      <p class="content">{{ res.title2 }}</p>
    </div>
    <div class="comment-container">
      <p style="text-align:center;font-size:14px;margin-bottom:10px">1条评论</p>
      <div class="input-box">
        <input class="text" type="text" v-model="value" placeholder="说点什么吧..." />
      </div>
      <div class="comment">
        <div class="profile-pic">
          <van-image
            round
            width="35px"
            height="35px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="comment-content">
          <p class="name">{{ res.name }}</p>
          <p>{{ res.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: [],
      value: "",
      loading: true
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    let id = this.$route.params.id;
    this.$axios
      .post("/api/detail", {
        params: {
          id: id
        }
      })
      .then(res => {
        // console.log(res.data.data[id]);
        this.res = res.data.data[id];
        this.loading = false;
      })
      .catch(error => {
        this.loading = true;
        console.log(error);
      });
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-detail {
  position: relative;
  margin-bottom: 50px;
  margin-top: 93px;
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.imgText {
  margin: 0 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  img {
    width: 100%;
    height: 300px;
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
    text-align: center;
  }
  .content {
    font-size: 14px;
    line-height: 20px;
  }
}
.comment-container {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  .input-box {
    margin: 0 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    .text {
    width: 90%;
    height: 30px;
    border: 0;
    font-size: 14px;
  }
  }
  .comment {
    display: flex;
    margin: 10px;
    .comment-content {
      flex: 1;
      padding-left: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      p {
        text-align: left;
        font-size: 16px;
      }
      .name {
        padding-bottom: 10px;
        color: grey;
      }
    }
  }
}
</style>
