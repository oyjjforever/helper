<template>
    <el-dialog
      v-dialog
      width="100vw"
      v-if="pdf.pdfShow"
      :visible.sync="pdf.pdfShow"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <div slot="title" class="title">
        <i></i>
        <span>PDF详情</span>
      </div>
    <div>
      <pdf class="pdf" :src="pdf.pdfUrl"></pdf>
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
  props: {
    pdf: {
      pdfUrl: null,
      pdfShow: null
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
