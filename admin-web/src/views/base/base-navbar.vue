<template>
  <div class="base-navbar">
    <div class="function-area">
      <div class="nav-time" key="nav-time">
        <div class="sys-time">{{sysTime}}</div>
        <div class="sys-date">{{sysDate}}</div>
      </div>
      <div class="split-line"></div>
      <el-dropdown placement="bottom" @command="cmd => this[cmd]()">
        <span>
          <img class="func-img avatar" src="img/boy.png"/>
          <span class="username">您好，{{userInfo.userName}}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginOut">
            <i class="fa fa-sign-out" />退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  name: 'BaseNavbar',
  data () {
    return {
      sysTime: moment().format('HH:mm:ss'),
      sysDate: moment().format('YYYY/MM/DD dddd'),
      mode: process.env.NODE_ENV,
      fullscreen: false // 是否全屏
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo || {},
      hasNewError: state => state.error.hasNew,
      errorLog: state => state.error.errorLog
    })
  },
  created () {
    setInterval(() => {
      this.sysTime = moment().format('HH:mm:ss')
      this.sysDate = moment().format('YYYY/MM/DD dddd')
    }, 1000)
  },
  methods: {
    fullScreen () {
      this.fullscreen = !this.fullscreen
      this.$toggleFullScreen(window.document.documentElement)
    },
    showErrorLog () {
      this.$store.commit('error/setHasNew', false)
    },
    loginOut () {
      this.$confirm('您确定退出登录吗?', '确认退出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('user/loginOut').then(() => {
          this.$router.replace({ name: 'login' })
        })
      }).catch(() => { })
    }
  }
}
</script>

<style lang="scss" scoped>
.base-navbar {
  width: 100%;
  height: 100%;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  i {
    cursor: pointer;
    color: #4b5c76;
  }
  [class*="el-icon"] {
    font-size: 24px;
  }
  .function-area {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .split-line {
      height: 37px;
      margin: 0 10px 0 10px;
      border-right: 1px solid #ccc;
    }
    .nav-time {
      color: #606266;
      text-align: center;
      .sys-time {
        font-size: 24px;
        letter-spacing: 2px;
        position: relative;
        font-family: AdobeHeitiStd-Regular;
      }
      .sys-date {
        font-size: 12px;
      }
    }
  }
  .func-img {
    cursor: pointer;
    margin: 0 10px 0 0;
    outline: none;
    vertical-align: middle;
  }
  .todo {
    position: relative;
    left: -2px;
  }
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(2, 2, 2, 0.7);
  }
  .avatar {
    width: 28px;
    height: 28px;
  }
  .username {
    cursor: pointer;
    font-size: 12px;
  }
  .el-dropdown > span {
    outline: none;
  }
}
</style>
<style lang="scss">
.base-navbar {
  .error-log-table {
    .title {
      font-size: 16px;
      color: #333;
      font-weight: 700;
      display: inline-block;
      width: 55px;
    }
  }
}
</style>
