<!-- 发现页面 -->
<template>
  <div class="found">
    <div class="loading">
    <van-loading v-if="loading" size="35px" color="#1989fa">加载中...</van-loading>
    </div>
    <ul class="layout layout-left" ref="left">
      <li v-for="(item, index) in itemLeft" :key="index">
        <router-link :to="{ name: 'details', params: { id: item.id } }">
          <img :src="item.img" alt="" />
          <p>{{ item.title }}</p>
          <div class="layout-bottom">
            <div class="layout-bottom-left">
              <van-image
                round
                width="20"
                height="20"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <span class="nickname">{{ item.name }}</span>
            </div>
            <div class="layout-bottom-right">
              <i class="iconfont iconpinglun"
                ><span>{{ item.number1 }}</span></i
              >
              <i class="iconfont iconxihuan"
                ><span>{{ item.number2 }}</span></i
              >
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <ul class="layout layout-right" ref="right">
      <li v-for="(item, index) in itemRight" :key="index">
        <router-link :to="{ name: 'details', params: { id: item.id } }">
          <img :src="item.img" alt="" />
          <p>{{ item.title }}</p>
          <div class="layout-bottom">
            <div class="layout-bottom-left">
              <van-image
                round
                width="20"
                height="20"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <span class="nickname">{{ item.name }}</span>
            </div>
            <div class="layout-bottom-right">
              <i class="iconfont iconpinglun"
                ><span>{{ item.number1 }}</span></i
              >
              <i class="iconfont iconxihuan"
                ><span>{{ item.number2 }}</span></i
              >
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      itemLeft: [],
      itemRight: [],
      loading: true,
    };
  },
  mounted() {
    this.$axios.get("/api/data").then(res => {
      // console.log(res.data)
      this.data = res.data.data;
      this.loading = false;
      this.wallFall();
    })
    .catch(error => {
      console.log(error);
      this.loading = true;
    });
  },
  methods: {
    wallFall() {
      const itemLeftHeight = this.$refs.left.offsetHeight;
      const itemRightHeight = this.$refs.right.offsetHeight;
      let singleValue = this.data.shift();
      if (singleValue == null) {
        return;
      }
      if (itemLeftHeight <= itemRightHeight) {
        this.itemLeft.push(singleValue);
      } else {
        this.itemRight.push(singleValue);
        // console.log(this.itemRight)
      }
      this.$nextTick(function() {
        this.wallFall();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.found {
  content: "";
  clear: both;
  overflow: hidden;
  .loading {
    text-align: center;
  }
  .layout {
    background: #ccc;
    width: 46%;
    i {
      padding-right: 8px;
      span {
        font-size: 12px;
      }
    }
    li {
      background-color: #fff;
      img {
        width: 100%;
        border-radius: 4px;
      }
      p {
        margin-top: 5px;
        padding-left: 10px;
        font-size: 14px;
      }
      .layout-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 0;
        .layout-bottom-left {
          display: flex;
          align-items: center;
          .profile-photo {
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
          .nickname {
            padding-left: 5px;
            font-size: 12px;
          }
        }
        .layout-bottom-right {
          display: flex;
          align-items: center;
        }
        .nickname {
          font-size: 12px;
        }
      }
    }
  }
  .layout-left {
    float: left;
    margin-left: 10px;
  }
  .layout-right {
    float: right;
    margin-right: 10px;
  }
}
</style>
