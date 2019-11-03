<template>
  <div class="about">
    <div class="content-wrap">
      <div class="header-wrap">
        <div class="header">
          <i class="iconfont iconmenu" @click="popup"></i>
          <van-search
            class="search-box"
            placeholder="请输入搜索关键词"
            shape="round"
          />
          <i class="iconfont iconall" @click="go"></i>
        </div>
      </div>
      <div class="swipe-wrap">
        <van-swipe :autoplay="3000" indicator-color="white" :height="120">
          <van-swipe-item class="swipe-item">1</van-swipe-item>
          <van-swipe-item class="swipe-item">2</van-swipe-item>
          <van-swipe-item class="swipe-item">3</van-swipe-item>
          <van-swipe-item class="swipe-item">4</van-swipe-item>
        </van-swipe>
      </div>

      <div class="limited">
        <span class="title">限时购</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span
            >: <span class="item">{{ timeData.minutes }}</span
            >:
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        <p class="subtitle">好物提前抢</p>
      </div>
      <ul class="lightning">
        <li v-for="(item, index) in data.slice(0, 4)" :key="index">
          <img :src="item.smallImg" />
          <div class="price">
            <span class="current">&yen;349</span>
            <span class="original">&yen;&nbsp;399</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 商品展示页 -->
    <van-tabs v-model="active">
      <van-tab title="推荐">
        <recom-item />
      </van-tab>
      <van-tab title="彩妆">内容 3</van-tab>
      <van-tab title="个护">内容 4</van-tab>
      <van-tab title="鞋靴">内容 4</van-tab>
    </van-tabs>
     <van-popup
      v-model="show"
      close-icon-position="top-left"
      position="left"
      :style="{ height: '100%',width: '30%' }"
    ><more /></van-popup>
  </div>
</template>

<script>
import RecomItem from "../components/RecomItem";
import More from "./More"
export default {
  components: {
    RecomItem,
    More
  },
  data() {
    return {
      time: 12 * 60 * 60 * 1000,
      data: [],
      active: 0,
      show: false
    };
  },
  mounted() {
    this.$axios
      .get("/api/data")
      .then(res => {
        // console.log(res.data.data);
        this.data = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    popup() {
      this.show = !this.show
    },
    go() {
      this.$router.push({
        name: "catalogue"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  .header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: #fff;
    width: 100%;

    .header {
      display: -webkit-flex;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 10px;
      .search-box {
        flex: 1;
      }
    }
  }
  .swipe-wrap {
    margin-top: 54px;
    border-radius: 5px;
    .swipe-item {
      line-height: 120px;
      text-align: center;
      background-color: #66c6f2;
    }
  }
  .limited {
    display: flex;
    align-items: center;
    padding-top: 10px;
    background: #fff;
    .title {
      font-size: 15px;
      padding-right: 7px;
    }
    .subtitle {
      font-size: 20px;
      letter-spacing: 3px;
      transform: scale(0.5);
      color: #ccc;
    }
    .item {
      display: inline-block;
      width: 22px;
      margin-right: 5px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      border-radius: 4px;
      background-color: #333;
    }
  }
  // 秒杀
  .lightning {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    background: #fff;
    li {
      text-align: center;
      img {
        border-radius: 5px;
      }
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 7px;
      .current {
        font-size: 12px;
      }
      .original {
        font-size: 20px;
        color: #ccc;
        text-decoration: line-through;
        display: inline-block;
        transform: scale(0.5);
      }
    }
  }
  .content-wrap {
    // width: 100%;
    margin: 0 10px;
    background: #fff;
  }
}
</style>
