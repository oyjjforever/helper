<template>
  <div>
    <el-dialog
      v-dialog
      width="100vw"
      v-if="pic.show"
      :visible.sync="pic.show"
      @close="model = 'show'"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <div slot="title" class="title">
        <i></i>
        <span>图片详情</span>
        <el-button class="title-button" v-show="model === 'show'" type="primary" @click="model = 'upload'">上传</el-button>
        <el-button class="title-button" v-show="model === 'upload'" type="primary" @click="model = 'show'">返回</el-button>
      </div>
    <div v-if="model === 'show'">
      <img class="picture" :src="showPic.baseUrl + pic.id + '.jpg'" alt="未上传">
    </div>
    <div v-if="model === 'upload'">
      <el-upload
        class="avatar-uploader"
        :action="uploadPic.baseUrl"
        :data="{id: pic.id}"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="uploadPic.imageUrl" :src="uploadPic.imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="warningArea" v-show="uploadPic.hasWarn">
        <i class="el-icon-circle-check"></i>
        <span>{{uploadPic.warningMsg}}</span>
      </div>
    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'picture-show',
  data () {
    return {
      model: 'show',
      uploadPic: {
        baseUrl: null,
        imageUrl: '', // 图片url
        hasWarn: false,
        warningMsg: ''
      },
      showPic: {
        baseUrl: null
      }
    }
  },
  props: {
    pic: {}
  },
  created () {
    this.uploadPic.baseUrl = process.env.VUE_APP_FILE_BASE_URL + '/pictureUpload' // 后台接口url
    this.showPic.baseUrl = process.env.VUE_APP_FILE_BASE_URL + '/pictures/'
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.uploadPic.imageUrl = URL.createObjectURL(file.raw)
      this.uploadPic.hasWarn = true
      this.uploadPic.warningMsg = '上传成功'
    }
  }
}
</script>

<style lang="scss" scoped>
.picture {
  height: 100%;
  width: 100%;
}
.title {
  display: flex;
  .title-button {
    margin-left: 50%;
  }
}
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
