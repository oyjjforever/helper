<template>
  <div>
    <picture-upload></picture-upload>
    <div>
      <picture-show fileName="illust_21315033_20171126_185315"></picture-show>
    </div>
  </div>
</template>

<script>
import pictureUpload from '@/components/picture-upload'
import PictureShow from '../components/picture-show'
export default {
  name: 'test',
  components: {
    PictureShow,
    pictureUpload
  }
}
</script>

<style scoped>

</style>
