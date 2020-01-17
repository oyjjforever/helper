<template>
  <div class="order-mobile-index">
    <div class="content-area" @touchmove="touchmove" @touchend="touchend">
      <div :style="buttonStyle" style=" position:static; z-index: -1">
        <span class="el-icon-picture" style="background-color: #3a8ee6; width: 50px"></span>
        <span class="el-icon-s-order" style="background-color: #e4474d; width: 50px"></span>
      </div>
      <div :style="contentStyle" style=" position:static; z-index: 1">
        主要内容
      </div>
    </div>
    <el-button @click="changeTouch">a</el-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      touch: {
        start: 0,
        move: 0
      }
    }
  },
  computed: {
    contentStyle () {
      // return { marginLeft: `calc(${this.touch.move} - ${this.touch.start})` }
      if (this.touch.move === '0px' || this.touch.move === this.touch.start) {
        return {
          display: 'inline-block',
          backgroundColor: '#4b5c76',
          width: '500px'
        }
      }
      let start = this.touch.start + 'px'
      let move = this.touch.move + 'px'
      return {
        display: 'inline-block',
        backgroundColor: '#4b5c76',
        marginLeft: `calc( -100px + (${move} - ${start}) / 3)`,
        width: '500px'
      }
    },
    buttonStyle () {
      console.log('move:' + this.touch.move + 'start:' + this.touch.start)
      if (this.touch.move === 0 || this.touch.move === this.touch.start) {
        return { display: 'none' }
      }
      return { display: 'inline-block', backgroundCcolor: '#e4474d', width: '100px' }
    }
  },
  methods: {
    touchmove (e) {
      if (this.touch.move === 0) {
        this.touch.start = e.targetTouches[0].pageX
      }
      this.touch.move = e.targetTouches[0].pageX
    },
    touchend (e) {
      if (this.touch.move - this.touch.start < 300) {
        this.touch.start = 0
        this.touch.move = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .order-mobile-index {
    width: 100%;
    height: 100%;
    .content-area {
      width: 100%;
      .button-area {
        i {
          font-size: 25px;
          margin: 0 5px;
        }
      }
    }
  }
</style>
