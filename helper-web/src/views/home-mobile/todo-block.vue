<template>
  <div class="todo-block">
    <el-card class="box-card" v-for="(item, index) in content" :key="index" @click.native="jumpToOrder(item)">
      <span class="item-num">{{ item.num }}</span>
      <span class="item-content">{{ item.type }}</span>
    </el-card>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'todo-block',
  data () {
    return {
      content: []
    }
  },
  created () {
    this.featchData()
  },
  methods: {
    async featchData () {
      let { data } = await this.$api.queryData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryOrder'
        }
      })
      let tmp = [-99, 0, 0, 0]
      let type = ['已完成', '待付款', '待尾款', '待送货']
      data.data.forEach(item => {
        tmp[Number(item.status)] += 1
      })
      tmp.forEach((item, index) => {
        if (item > 0) {
          this.content.push({
            type: type[index],
            num: item,
            status: index
          })
        }
      })
    },
    jumpToOrder (item) {
      console.log('123')
      router.push({ path: '/order', query: { status: item.status } })
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-block {
  height: 100%;
  width: 100%;
  .box-card {
    margin: 3px 5px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    .item-num {
      flex: 1;
      text-align: center;
      padding: 5px;
      background-color: #4b5c76;
      color: white;
    }
    .item-content {
      flex: 10;
      margin: 0 10px;
      padding: 5px;
    }
  }
}
</style>
