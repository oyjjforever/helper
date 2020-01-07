<template>
  <div class="content">
    <orderMain
      @queryOrderDetail="row => $refs['orderDetail'].featchData(row.id)"
    ></orderMain>
    <orderDetail
      ref="orderDetail"
    ></orderDetail>
  </div>
</template>

<script>
import orderMain from './order-main'
import orderDetail from './order-detail'
export default {
  name: 'index',
  components: {
    orderMain,
    orderDetail
  }
}
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
