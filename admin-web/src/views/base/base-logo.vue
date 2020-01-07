<template>
  <div class="system-logo">
    <img v-if="collapse" src="img/system-logo.png">
    <span v-else class="title-container">
      <span class="title">{{appTitle}}</span>
      <h6 class="sub-title">{{appSubTitle}}</h6>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseLogo',
  data () {
    return {
      appTitle: null,
      appSubTitle: null
    }
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.appTitle = process.env.VUE_APP_TITLE
    this.appSubTitle = process.env.VUE_APP_SUBTITLE
  }
}
</script>

<style lang="scss" scoped>
.system-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
  .title-container {
    color: #000000;
    margin-left: 10px;
    .title {
      letter-spacing: 4px;
      font-size: 25px;
      font-weight: bold;
      word-break: keep-all;
    }
    .sub-title {
      margin: 0;
      font-size: 12px;
      letter-spacing: -1px;
      font-weight: normal;
    }
  }
}
</style>
