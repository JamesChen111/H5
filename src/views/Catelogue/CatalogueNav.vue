<!-- 分类页大类分类 -->
<template>
  <div class="slide-bar">
    <ul>
      <router-link
        v-for="(item,index) in link"
        :key="index"
        :to="{name: `${item.to}`}"
        tag="li"
        @click.native="changeBg"
      >{{item.title}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: [
        { to: "skin-care", title: "护肤" },
        { to: "shoe", title: "鞋靴" },
        { to: "personal-care", title: "个人护理" },
        { to: "healthy", title: "保健" },
      ]
    };
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    changeBg() {
      console.log("ok");
      console.log("methods", this.$route);
    }
  }
};
</script>

<style lang='scss' scoped>
ul {
  background: #fff;
  // padding-left: 10px;
  li {
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
  }
}
.router-link-active {
  background: #cfd8dc;
}
</style>
