<template>
  <div id="app">
    <router-view />
    <tabbar />
  </div>
</template>

<script>
import Tabbar from "@/views/Tabbar";
export default {
  name: "app",

  components: {
    Tabbar
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
