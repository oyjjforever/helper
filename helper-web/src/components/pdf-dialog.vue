<template>
    <el-dialog
      v-dialog
      width="100vw"
      v-if="pdf.show"
      :visible.sync="pdf.show"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <div slot="title" class="title">
        <i></i>
        <span>PDF详情</span>
        <el-button type="danger" @click="exportPdf()">导出PDF</el-button>
        <el-button type="danger" @click="downloadPdf()">下载PDF</el-button>
      </div>
    <div>
      <pdf class="pdf" :src="baseUrl+ pdf.id + '.pdf'"></pdf>
    </div>
    </el-dialog>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'pdf-show',
  components: {
    pdf
  },
  data () {
    return {
      baseUrl: null
    }
  },
  props: {
    pdf: {
      id: null,
      show: null,
      content: {}
    }
  },
  created () {
    this.baseUrl = process.env.VUE_APP_FILE_BASE_URL + '/pdfs/'
    console.log(this.pdf)
  },
  methods: {
    async exportPdf () {
      // console.log(item)
      await this.$api.exportPDF({
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          data: JSON.stringify(this.pdf.content)
        }
      })
    },
    downloadPdf () {
      let a = document.createElement('a')
      a.href = this.baseUrl
      a.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.pdf {
  height: 100%;
  width: 100%;
}
</style>
