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
      <img class="picture" :src="picShow.baseUrl + pic.id + '.jpg'" alt="未上传">
    </div>
    <div v-if="model === 'upload'">
      <el-upload
        class="avatar-uploader"
        :action="picUpload.baseUrl"
        :data="{id: pic.id}"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="picUpload.imageUrl" :src="picUpload.imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="warningArea" v-show="picUpload.hasWarn">
        <i class="el-icon-circle-check"></i>
        <span>{{picUpload.warningMsg}}</span>
      </div>
    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'picture-dialog',
  data () {
    return {
      model: 'show',
      picUpload: {
        baseUrl: null,
        imageUrl: '', // 图片url
        hasWarn: false,
        warningMsg: ''
      },
      picShow: {
        baseUrl: null
      }
    }
  },
  props: {
    pic: {}
  },
  created () {
    this.picUpload.baseUrl = process.env.VUE_APP_FILE_BASE_URL + '/pictureUpload' // 后台接口url
    this.picShow.baseUrl = process.env.VUE_APP_FILE_BASE_URL + '/pictures/'
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.picUpload.imageUrl = URL.createObjectURL(file.raw)
      this.picUpload.hasWarn = true
      this.picUpload.warningMsg = '上传成功'
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
