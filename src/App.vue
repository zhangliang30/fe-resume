<template>
  <div id="app">
    <el-container>
      <el-header class="header-container"><top-bar></top-bar></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TopBar from '@/components/commen/TopBar'
export default {
  components: {
    TopBar
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-main {
    height: 100%;
    padding: 10px 0 0 10px;
  }
  .el-header {
    padding: 10px 0 0 10px;
  }
}

</style>>