<template>
  <div class="picture-group">
    <div class="left-container">
      <el-menu
        default-active="2"
        :collapse="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="group-split-line"></div>
    <div class="main-container" :style="mainContainerStyle">
      <el-row v-for="item in 2" :key="item">
        <el-col :span="3" v-for="(item, index) in 5" :key="item" :offset="index > 0 ? 1 : 0">
          <el-card class="card-item hvr-forward"
             :body-style="{ padding: '0px', height: '30px'}"
             shadow="hover"
          >
<!--            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
            <div class="image"></div>
            <div style="padding: 14px;">
              <span>。。。。。。</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="translate">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'picture-group',
  data () {
    return {
      currentDate: new Date()
    }
  },
  computed: {
    mainContainerStyle () {
      return { width: `calc(100% - 80px` }
    }
  },
  methods: {
    translate () {
      // router.push({ name: 'picturesDetail' })
    }
  }
}
</script>

<style lang="scss" scoped>
.picture-group {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  .group-split-line {
    height: 100%;
    margin: 10px 8px;
    border-right: 1px solid #4b5c76;
  }
  .left-container {
    width: 80px;
    height: 100%;
  }
  .main-container {
    padding: 10px;
    height: 100%;

    /*.card-item {*/
    /*  transition: width 1s;*/
    /*}*/
    /*.card-item:hover {*/
    /*  width: 300px;*/
    /*}*/
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }
  }
}
</style>
