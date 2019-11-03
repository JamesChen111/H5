<template>
  <div class="hello"></div>
</template>

<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  },
  name: "HelloWorld",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
