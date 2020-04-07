<template>
  <div class="menu-container">
    <el-menu class="el-menu"
    default-active="1"
      mode="horizontal"
      background-color="#545c64"
      text-color="grey"
      active-text-color="#fff"
      border="none"
    >
      <el-menu-item index="-1" class="logo-container" disabled><i class="el-icon-user"></i> Lzhang</el-menu-item>
      
      <el-menu-item index="1" >个人简介</el-menu-item>
      <!-- <el-menu-item index="2">处理中心</el-menu-item>
      <el-menu-item index="3">处理中心</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>

.menu-container {
  width: 100%;
  height: 60px;
  z-index: 100;
  .el-menu {
    border-bottom: 0;
    background: none !important;
    .el-menu-item {
        font-size: 20px;
        background: none !important;
    }
  }
}

.logo-container {
  cursor: default !important;
  opacity: 1 !important;
  > i {
    color: grey
  }
}


</style>