<template>
  <div class="pictures-show-index">
    <carouselBlock></carouselBlock>
    <pictreGroup></pictreGroup>
  </div>
</template>

<script>
import carouselBlock from './carousel-block'
import pictreGroup from './picture-group'
export default {
  name: 'index',
  components: {
    carouselBlock,
    pictreGroup
  }
}
</script>

<style lang="scss" scoped>
.pictures-show-index {
  height: 100%;
  width: 100%;
  .carousel-block {
    height: 500px;
    margin: 5px 0;
  }
  .picture-group {
    height: 500px;
    margin: 5px 0;
  }
}
</style>
