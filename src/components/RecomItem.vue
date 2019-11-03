<!-- 推荐页 -->
<template>
  <div class="recommendation">
    <ul class="items items-left" ref="left">
      <li v-for="(item, index) in leftItem" :key="index">
        <img :src="item.img" alt />
        <p class="title1">{{ item.title1 }}</p>
        <p class="sale-price">
          <span>&yen;&nbsp;{{ item.number2 }}</span
          ><span>&yen;&nbsp;{{ item.number2 }}</span>
        </p>
      </li>
    </ul>
    <ul class="items items-right" ref="right">
      <li v-for="(item, index) in rightItem" :key="index">
        <img :src="item.img" alt />
        <p class="title1">{{ item.title1 }}</p>
        <p class="sale-price">
          <span>&yen;&nbsp;{{ item.number2 }}</span
          ><span>&yen;&nbsp;{{ item.number2 }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      leftItem: [],
      rightItem: []
    };
  },
  mounted() {
    this.$axios
      .get("/api/data")
      .then(res => {
        // console.log(res)
        this.data = res.data.data;
        this.waterFall();
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    waterFall() {
      const leftItemHeight = this.$refs.left.offsetHeight;
      const rightItemHeight = this.$refs.right.offsetHeight;
      let item = this.data.shift();
      if (item == null) {
        return;
      }
      if (leftItemHeight <= rightItemHeight) {
        this.leftItem.push(item);
      } else {
        this.rightItem.push(item);
      }
      this.$nextTick(function() {
        this.waterFall();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.recommendation {
  clear: both;
  overflow: hidden;
  padding: 5px 10px 0;
  background: #eee;
}
.items-left {
  float: left;
  width: 48%;
}
.items-right {
  float: right;
  width: 48%;
}
.items {
  li {
    width: 100%;
    background-color: #fff;
    margin-bottom: 5px;
    border-radius: 5px 5px 0 0;
    img {
      width: 100%;
      border-radius: 5px 5px 0 0;
    }
    .title1 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      letter-spacing: 1px;
      margin: 5px;
    }
    .sale-price {
      padding: 0 0 7px 7px;
      span:first-child {
        font-size: 14px;
        color: #d50000;
      }
      span:last-child {
        font-size: 12px;
        color: #9e9e9e;
        padding-left: 8px;
        text-decoration: line-through;
      }
    }
  }
}
</style>
