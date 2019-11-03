<!-- 分类页面 -->
<template>
  <div class="catalogue">
    <van-nav-bar class="header" title="分类" left-text="返回" left-arrow @click-left="goback" />
    <!-- <div class="cata-wrap"> -->
      <catalogue-nav class="nav" />
      <Content class="main-panel"></Content>
    <!-- </div> -->
  </div>
</template>

<script>
import CatalogueNav from './CatalogueNav'
import Content from './Content'
export default {
  components: {
    CatalogueNav,
    Content
  },
  data () {
    return {

    }
  },
  methods: {
    goback() {
      this.$router.push({
        path: '/goods'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.catalogue {
  height: 100vh;
  background: #cfd8dc;
  font-size: 14px;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
  }
    .nav {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 110px;
      margin-top: 50px;
      background: #fff;
    }
    .main-panel {
      float: right;
      width: calc(100% - 130px);
      height: 100vh;
      margin: 50px 10px 0 10px;
      background: #fff;
    }

  // }
}
</style>
