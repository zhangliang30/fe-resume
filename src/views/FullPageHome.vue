<template>
  <el-carousel direction="vertical" :autoplay="false" ref="fullPageRef">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 class="medium">aaaaa</h3>
    </el-carousel-item>
  </el-carousel>
</template>
 
<script>
export default {
  mounted() {
    window.addEventListener("mousewheel", this.handleScroll, false)||
    window.addEventListener("DOMMouseScroll",this.handleScroll,false);
  },
  handleScroll(e) {
    // 该语句可以用来判断滚轮是向上滑动还是向下
    console.log('wheel');
    
    var direction = e.deltaY > 0 ? "down" : "up";
      //此处决定无论一次滚轮滚动的距离是多少，此事件都得等上次滚动结束，才会执行本次
      if (up) {
          console.log('up');
          this.$refs['#fullPageRef'].prev()
      } else {
          console.log('down');
          this.$refs['#fullPageRef'].next()
      }
    }
};
</script>
 
<style lang="less" scoped>
.el-carousel {
  height: 800px;
  .el-carousel__item {
    height: 800px;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>