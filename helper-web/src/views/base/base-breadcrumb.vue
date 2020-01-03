<template>
  <div class="base-breadcrumb">
    <el-breadcrumb>
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in ($route.meta.menu || {}).siteMap" :key="item">{{item}}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BaseBreadcrumb',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-breadcrumb {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

</style>
