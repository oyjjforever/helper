<template>
  <div class="base-layout">
    <div class="top-container" :class="{'collapse': leftPanelCollapse}" :style="sideBarStyle">
      <div class="logo-container" :style="logoContainerStyle">
        <slot name="logo-container" />
      </div>
      <div class="menu-panel">
        <slot name="menu-panel" />
      </div>
      <div class="navbar-container" :style="navBarStyle">
        <slot name="navbar-container" />
      </div>
    </div>
    <div class="main-container" :style="mainContainerStyle">
      <div class="app-main">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cachedViews">
            <router-view :key="$route.path" />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseLayout',
  props: {
    cachedViews: {
      type: Array,
      default: () => []
    },
    // 头部
    navBarStyle: {
      type: Object,
      default () {
        return { height: '0px' }
      }
    },
    // 左侧面板
    sideBarStyle: {
      type: Object,
      default () {
        return {
          width: '100%'
          // backgroundColor: ' #4B5C76'
        }
      }
    },
    logoContainerStyle: {
      type: Object,
      default () {
        return {
          height: '60px',
          width: '70%'
        }
      }
    },
    leftPanelCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mainContainerStyle () {
      return { height: `calc(100% - 150px` }
    }
  }
}
</script>
<style lang="scss" scoped>
.base-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#fefefe, #fafafa);
  .top-container {
    height: 120px;
    width: 100%;
    user-select: none;
    transition: width 0.25s cubic-bezier(0, 0, 0.2, 1);
    &.collapse {
      width: 80px !important;
    }
    .logo-container {
      box-sizing: border-box;
      border-bottom: 1px solid rgba(248, 248, 248, 0.1);
    }
    .menu-panel {
      height: 60px;
      overflow: auto;
    }
  }
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    .app-main {
      flex: 1;
      margin: 10px;
      overflow-y: auto;
      overflow-x: hidden;
      border-radius: 3px;
    }
  }
}
</style>
