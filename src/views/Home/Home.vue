<template>
  <div class="home">
    <header>
      <ul>
        <li
          :style="value1 ? 'border-color: #fff' : 'border-color: #d50000'"
          @click="changeColor(0)"
        >
          <router-link to="/concern">关注</router-link>
        </li>
        <li
          :style="value1 ? 'border-color: #d50000' : 'border-color: #fff'"
          @click="changeColor(1)"
        >
          <router-link to="/find">发现</router-link>
        </li>
      </ul>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        shape="round"
      ></van-search>
    </header>
    <div class="layout-content">
       <!-- <van-loading v-if="loading" size="24px">加载中...</van-loading> -->
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {
      value: "",
      value1: true,
    };
  },
  mounted() {
    // console.log(this.$router)
  },
  methods: {
    changeColor(value) {
      if (value === 0) {
        this.value1 = false;
      } else {
        this.value1 = true;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background: #fff;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    margin: 0 auto;
    font-size: 16px;
    li {
      padding: 8px 0;
      border-bottom: 2px solid #fff;
    }
  }
}
.layout-content {
  margin-top: 88px;
  margin-bottom: 50px;
}
</style>
