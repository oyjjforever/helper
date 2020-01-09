<template>
  <el-dialog
    v-dialog
    width="100vw"
    v-if="picture.picUpload"
    :visible.sync="picture.picUpload"
    :before-close="closeDailog"
    :modal-append-to-body="false"
    :close-on-click-modal="false"
  >
    <div slot="title" class="title">
      <i></i>
      <span>图片上传</span>
    </div>
    <el-upload
      class="avatar-uploader"
      :action="baseUrl"
      :data="{id: picture.picUploadId}"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="warningArea" v-show="upload.hasWarn">
      <i class="el-icon-circle-check"></i>
      <span>{{upload.warningMsg}}</span>
    </div>
    <div slot="footer">
      <el-button type="primary" @click="closeDailog" icon="fa fa-save">&nbsp;关闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'picture-upload',
  props: {
    picture: {
      picUploadId: null, // 图片对应的ID
      picUpload: null // 是否显示该对话框
    }
  },
  data () {
    return {
      imageUrl: '', // 图片url
      baseUrl: '',
      upload: {
        hasWarn: false,
        warningMsg: ''
      }
    }
  },
  created () {
    this.baseUrl = process.env.VUE_APP_FILE_BASE_URL + '/pictureUpload' // 后台接口url
    console.log(process.env)
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.upload.hasWarn = true
      this.upload.warningMsg = '上传成功'
    },
    beforeAvatarUpload (file) {
      return true
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2
      //
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
    },
    closeDailog () {
      this.picture.picUpload = false
      this.$emit('refreshOrder')
    }
  }
}
</script>

<style lang="scss" scoped>
  .warningArea {
    width: 100%;
    margin: 3px;
    color: #5daf34;
    span {
      margin: 0 5px;
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
