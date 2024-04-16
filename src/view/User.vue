<template>
    <div style="height: 100%;">
    <el-container >
    <el-header>系统首页</el-header>
    </el-container>
    <el-container style="height: 100%;">
    <el-aside width="200px"  text-color="#fff"> 
      <el-menu router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-home"></i>旅游景点</template>
          <el-menu-item index="/user/placelist">景点列表</el-menu-item>
          <el-menu-item index="/user/placerank">景点热度榜</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>旅游路线</template>
        <el-menu-item index="1-1">路线分类</el-menu-item>
          <el-menu-item index="1-2">路线排行</el-menu-item>
          <el-menu-item index="2-3">我的收藏</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>路线定制</template>
        <el-menu-item index="3-1">大模型</el-menu-item>
          <el-menu-item index="3-2">我的路线</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>攻略社区</template>
        <el-menu-item index="4-1">广场</el-menu-item>
          <el-menu-item index="4-2">我的创作</el-menu-item>
          <el-menu-item index="4-3">我的收藏</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>个人中心</template>
        <el-menu-item index="5-1">个人信息</el-menu-item>
          <el-menu-item index="5-2">通知</el-menu-item>
          <el-menu-item index="5-3">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
    </div>
</template>

<script>
export default{
    name: "User",
    data(){
        return{

        }
    },
    created(){

    },
    methods:{}
}
</script>

<style>
  .el-header, .el-footer {
    /* background-color: #95e395; */
    color: whitesmoke;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .el-menu,.el-menu-item {
    /* background-color: #95e395; */
    color: rgb(0, 0, 0);
    text-align: center;
    line-height: 60px;
    border-top: 1px;
  }
  
  .el-aside {
    /* background-color: #c8edd3; */
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
</style>