<template>
  <div class="indicator-block">
    <el-card class="indicator-card">
      <span>xxxx</span>
      <p class="num">
        <count-to :endVal="indicator.orderCount"></count-to>
      </p>
    </el-card>
    <el-card class="indicator-card">
      <span>xxxx</span>
      <p class="num">
        <count-to :endVal="indicator.goodsCount"></count-to>
      </p>
    </el-card>
    <el-card class="indicator-card">
      <span>xxxx</span>
      <p class="num">
        <count-to :endVal="indicator.amountCount"></count-to>
      </p>
    </el-card>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import moment from 'moment'
export default {
  name: 'indicator-block',
  components: {
    CountTo
  },
  data () {
    return {
      indicator: {}
    }
  },
  created () {
    this.featchData()
  },
  methods: {
    async featchData () {
      let { data } = await this.$api.queryData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryOrderThisMonth',
          month: moment().format('YYYY-MM')
        }
      })
      this.indicator = data.data[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.indicator-block {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  .indicator-card {
    flex: 1;
    margin: 3px 5px;
    position: relative;
    .num {
      font-size: 18px;
      font-weight: bold;
      position: absolute;
      right: 20%;
      bottom: 1px;
    }
  }
}
</style>
