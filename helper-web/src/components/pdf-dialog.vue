<template>
    <el-dialog
      width="100vw"
      v-if="pdf.show"
      :visible.sync="pdf.show"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      @close="close"
    >
      <div slot="title" class="title">
        <i></i>
        <span>PDF详情</span>
        <el-button type="danger" @click="exportPdf()">重新生成</el-button>
        <el-button type="primary" @click="downloadPdf()">下载</el-button>
      </div>
    <div class="pdf-area">
      <div class="blank" v-show="!firstOpen && !pdfUrl">生成中......</div>
      <div class="error" v-show="hasError">未生成PDF</div>
      <pdf class="pdf" :src="firstOpen ? baseUrl + pdf.id + '.pdf' : pdfUrl" @error="error"></pdf>
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
      firstOpen: true,
      hasError: false,
      pdfUrl: null,
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
  },
  methods: {
    async exportPdf () {
      await this.writePdf().then(() => {
        this.firstOpen = false
        this.pdfUrl = null
        setTimeout(() => {
          this.pdfUrl = this.baseUrl + this.pdf.id + '.pdf'
        }, 1000)
      })
    },
    async writePdf () {
      this.hasError = false
      this.$api.exportPDF({
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          data: JSON.stringify(this.pdf.content)
        }
      })
      console.log('生成')
    },
    downloadPdf () {
      let a = document.createElement('a')
      a.href = this.baseUrl + this.pdf.id + '.pdf'
      a.click()
      // let a = document.createElement('a')
      // a.href = item.pdfUrl
      // a.click()
      // window.location.href = item.pdfUrl  本网页打开
      // window.open(item.pdfUrl, '_blank')
    },
    error () {
      this.hasError = true
    },
    close () {
      this.firstOpen = true
      this.hasError = false
      this.pdfUrl = null
    }
  }
}
</script>

<style lang="scss" scoped>
  .pdf-area {
    width: 100%;
    .error,
    .blank {
      text-align: center;
    }
    .pdf {
      height: 100%;
      width: 100%;
    }
  }
</style>
