<template>
  <section>
    <el-container class="container">
      <!--左边-->
      <el-aside :width="'200px'">
        <el-container>
          <el-header>
            <img src="../assets/logo.png" class="logoImg">
          </el-header>
          <el-main>
            <el-menu :collapse="collapsed" router="true">
              <el-submenu index="1">
                <template slot="title">
                  <i class="fa fa-coffee"></i>
                  <span>菜单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="one"><i class="el-icon-monitor" ></i>爬取数据</el-menu-item>
                  <el-menu-item index="table"><i class="el-icon-search"></i>查看数据</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-main>
        </el-container>
      </el-aside>
      <!--内容-->
      <el-container>
        <!--页眉-->
        <el-header class="header">
          <el-row>
            <el-col :span="20" class="header-title">
              <span class="system-name">{{systemName}}</span>

            </el-col>
            <el-col :span="2"><span class="el-dropdown-link userinfo-inner">你好：{{userName}}</span></el-col>
            <el-col :span="1"><span class="el-dropdown-link userinfo-inner">|</span></el-col>
            <el-col :span="1"><span class="el-dropdown-link userinfo-inner">退出</span></el-col>
          </el-row>
        </el-header>
        <!--中间-->
        <el-main class="main">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
  let data = () => {
    return {
      collapsed: false,
      systemName: '保险信息展示',
      userName: 'admin'
    }
  }

  export default {
    data: data,
    methods: {

    },
    mounted: function() {
    }
  }
</script>

<style scoped="scoped" lang="scss">
  $width: 100%;
  $height: 100%;
  $background-color: rgba(9, 42, 75, 0.91);
  $header-color: #fff;
  $header-height: 60px;

  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .el-aside {
      .el-header {
        line-height: $header-height;
        background-color: $background-color;
        color: $header-color;
        text-align: center;
      }
      .el-container {
        height: $height;
        .el-main {
          padding: 0;
        }
      }
    }

    .main {
      width: $width;
      height: $height;
    }

    .menu-button {
      width: 14px;
      cursor: pointer;
    }

    .userinfo-inner {
      cursor: pointer;
    }

    .el-menu {
      height: $height;
    }

    .header {
      background-color: $background-color;
      color: $header-color;
      text-align: center;
      line-height: $header-height;
      padding: 0;

      .header-title {
        text-align: left;
        span {
          padding: 0 20px;
        }
      }
    }

    .system-name {
      font-size: large;
      font-weight: bold;
    }
  }
  .logoImg{
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-top: 5px;
  }
</style>
