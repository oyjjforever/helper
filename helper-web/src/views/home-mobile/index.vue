<template>
  <div class="home-index">
    <div class="header">
      <indicator-block></indicator-block>
    </div>
    <div class="content">
      <div class="main-container">
        <todo-block></todo-block>
      </div>
    </div>
  </div>
</template>

<script>
import indicatorBlock from './indicator-block'
import todoBlock from './todo-block'
export default {
  name: 'home-index',
  components: {
    indicatorBlock,
    todoBlock
  }
}
</script>

<style lang="scss" scoped>
.home-index {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 100px;
    width: 100%;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
