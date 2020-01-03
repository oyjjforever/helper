<template>
  <div class="order-timeLine">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'order-timeLine',
  props: {
    mainId: String
  },
  data () {
    return {
      activities: []
    }
  },
  created () {
    this.featchData()
  },
  methods: {
    async featchData () {
      let { data } = await this.$api.queryData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryTimeLine',
          mainId: this.mainId
        }
      })
      this.activities = data.data
    },
    async save (mainId, content) {
      await this.$api.add({
        data: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.insertTimeLine',
          mainId: mainId,
          timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
          content: content
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order-timeLine {
  width: 100%;
  height: 100%;
}
</style>
