<template>
    <el-dialog
      v-dialog
      width="100vw"
      v-if="picture.picShow"
      :visible.sync="picture.picShow"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <div slot="title" class="title">
        <i></i>
        <span>图片详情</span>
      </div>
    <div>
      <img class="picture" :src="picture.picUrl" alt="未上传">
    </div>
    </el-dialog>
</template>

<script>
export default {
  name: 'picture-show',
  props: {
    picture: {
      picUrl: null,
      picShow: null
    }
  }
}
</script>

<style lang="scss" scoped>
.picture {
  height: 100%;
  width: 100%;
}
</style>
