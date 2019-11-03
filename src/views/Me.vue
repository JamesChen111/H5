<!-- 我的组件 -->
<template>
  <div class="me">
    <div class="navbar">
      <div>
        <van-icon name="chat" info="3" />
      </div>
      <div>
        <van-icon name="setting-o" />
      </div>
      
    </div>
    <!-- <van-divider /> -->
    <div class="intro">
      <van-image 
      round 
      width="60px" 
      height="60px" 
      src="https://img.yzcdn.cn/vant/cat.jpeg" 
      />
      <div class="intro-content">
        <div class="name">
          <span>奥黛丽.赫本</span>
        </div>
        <div class="concern">
          <span>关注&nbsp;2</span>
          <span>|</span>
          <span>被关注&nbsp;4</span>
        </div>
      </div>
    </div>
    <!-- <van-divider />   -->
    <div class="main">
      <div class="mine">
        <van-cell class="mine-item" icon="fire-o" title="我的发布" is-link to="#" />
      </div>
       <div class="mine">
        <van-cell class="mine-item" icon="like" title="我的笔记" is-link to="#" />
      </div>
       <div class="mine">
        <van-cell class="mine-item" icon="clock-o" title="我的" is-link to="#" />
      </div>
       <div class="mine">
        <van-cell class="mine-item" icon="more-o" title="我的笔记" is-link to="#" />
      </div>
       <div class="mine">
        <van-cell class="mine-item" icon="medel-o" title="我的笔记" is-link to="#" />
      </div>
       <div class="mine">
        <van-cell class="mine-item" icon="like" title="我的笔记" is-link to="#" />
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  box-sizing: border-box;
  padding: 10px;
}
.intro {
  display: flex;
  margin-left: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  .intro-content {
    padding-left: 10px;
    .name {
      padding-bottom: 20px;
    }
    .concern {
      span:nth-child(2) {
        padding: 0 10px;
      }
    }
  }
}
.main {
  background: #ccc;
  overflow: hidden;
  .mine {
    margin: 15px;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
