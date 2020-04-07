<template height="100%">
  <div class="introduction">
    <table class="introduction-box">
      <tr>
        <td class="topeasein">
          <el-avatar :size="120" :src="avatarUrl"></el-avatar>
        </td>
      </tr>
      <tr>
        <td class="easein">
          <h1>Zhang Liang</h1>
        </td>
      </tr>
      <tr>
        <td>
          <el-row>
            <el-col :span="11" class="lefteasein">
              <i class="el-icon-message"></i> 992532172@qq.com
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="11" class="righteasein">
              <i class="el-icon-message"></i> 992532172@qq.com
            </el-col>
          </el-row>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import avatar from "@/assets/avatar.jpg";
export default {
  data() {
    return {
      avatarUrl: avatar
    };
  }
};
</script>

<style lang="less" scoped>
.introduction {
  opacity: 0.7;
  text-align: center;
  margin-top: 10%;
  .introduction-box {
    // display: flex;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
    
    // background-color: white;
    color: grey;
    // > tr {
      // > td {
      //   border: solid 9px;
      // }
    // }
  }
}

// ul {
//   padding-inline-start: 0;
//   > li {
//     list-style: none;
//     > i {
//       font-size: 20px;
//       padding-right: 20px;
//     }
//   }
// }

.el-row {
  font-size: 20px;
  i {
    padding-right: 20px;
  }
}
</style>
