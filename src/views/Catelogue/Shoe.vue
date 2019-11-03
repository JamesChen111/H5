<!-- 鞋靴 -->
<template>
  <div class="shoe">
    <van-loading 
    v-if="loading"
    class="loading" 
    size="35px" 
    color="#1989fa" 
    >
    加载中...
    </van-loading>
    <ul class="skin-wrap">
      <li v-for="(item,index) in data" :key="index">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      loading: true,
    }
  },
  mounted() {
    this.$axios.get("/shoe").then(res => {
      this.data = res.data.shoe;
      this.loading = false;
    })
    .catch(error => {
      this.loading = true;
    })
  }
}
</script>

<style lang='scss' scoped>
.shoe {
  position: relative;
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.skin-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  li {
    margin: 10px;
    flex: 1;
    text-align: center;
    p {
      padding-top: 10px;
      font-size: 14px;
      text-align: center
    }
  }
}
</style>
