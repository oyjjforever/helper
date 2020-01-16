<template>
  <div class="order-mobile-index">
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in orders" :key="index">
        <template slot="title">
          <div class="item-title" @click="toggleCollapse(item)">
            <div class="content-area">
              <span style="margin-right: 10px">
                <el-tag v-if="item.main.status === '0'" type="success">已完成</el-tag>
                <el-tag v-else-if="item.main.status === '1'" type="danger">待付款</el-tag>
                <el-tag v-else-if="item.main.status === '2'" type="danger">待尾款</el-tag>
                <el-tag v-else-if="item.main.status === '3'" type="danger">待送货</el-tag>
              </span>
              {{item.main.name + ' - ' + item.main.address}}
            </div>
            <span class="button-area">
              <transition name="el-zoom-in-top">
                <i v-show="item.show" class="el-icon-picture" @click.stop="showPicture(item)"></i>
              </transition>
              <transition name="el-zoom-in-bottom">
                <i v-show="item.show" class="el-icon-s-order" @click.stop="showPdf(item)"></i>
              </transition>
            </span>
          </div>
        </template>
        <div>联系方式：{{item.main.phone}}</div>
        <div>订单时间：{{item.main.orderDate}}</div>
        <div>送货时间：{{item.main.sendDate}}</div>
        <div>总金额：{{item.main.amount}}</div>
        <div>备注：{{item.main.remark}}</div>
        <el-table
          border
          stripe
          ref="table"
          :data="item.details"
          highlight-current-row
        >
          <el-table-column prop="model" label="型号" align="left" show-overflow-tooltip></el-table-column>
          <el-table-column prop="color" label="颜色" align="left" show-overflow-tooltip></el-table-column>、
          <el-table-column prop="format" label="规格" align="left" show-overflow-tooltip></el-table-column>
          <el-table-column prop="price" label="单价" align="left"  show-overflow-tooltip></el-table-column>
          <el-table-column prop="num" label="数量" align="left"  show-overflow-tooltip></el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
    <picture-dialog :pic="picture"></picture-dialog>
    <pdf-dialog :pdf="pdf"></pdf-dialog>
  </div>
</template>

<script>
import qs from 'qs'
import PictureDialog from '../../components/picture-dialog'
import PdfDialog from '../../components/pdf-dialog'
export default {
  name: 'index',
  components: { PdfDialog, PictureDialog },
  data () {
    return {
      searcher: {
        status: null
      },
      picture: {
        id: null,
        show: false
      },
      pdf: {
        id: null,
        show: false,
        content: {}
      },
      orders: []
    }
  },
  created () {
    this.featchData()
  },
  methods: {
    async featchData () {
      this.searcher.status = qs.parse(window.location.hash.substr(8)).status || null
      let { data } = await this.$api.queryData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryWholeOrderSelective',
          ...this.searcher
        }
      })
      this.orders = this.formatOrderData(data.data)
    },
    formatOrderData (data) {
      let formatedData = []
      let checked = []
      data.forEach(item => {
        if (!checked[item.id]) {
          let order = {
            main: {
              id: item.id,
              name: item.name,
              phone: item.phone,
              address: item.address,
              orderDate: item.orderDate,
              sendDate: item.sendDate,
              amount: item.amount,
              remark: item.remark,
              status: item.status
            },
            show: false,
            details: []
          }
          checked[item.id] = order
        }
        checked[item.id]['details'].push({
          model: item.model,
          color: item.color,
          format: item.format,
          price: item.price,
          num: item.num,
          discount: item.discount
        })
      })
      for (let item in checked) {
        formatedData.push(checked[item])
      }
      return formatedData
    },
    toggleCollapse (item) {
      item.show = !item.show
      this.orders.forEach(i => {
        if (i.main.id !== item.main.id) {
          i.show = false
        }
      })
    },
    showPicture (item) {
      this.picture = {
        id: item.main.id,
        show: true
      }
    },
    showPdf (item) {
      this.pdf = {
        id: item.main.id,
        show: true,
        content: item.main
      }
      // let a = document.createElement('a')
      // a.href = item.pdfUrl
      // a.click()
      // window.location.href = item.pdfUrl  本网页打开
      // window.open(item.pdfUrl, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.order-mobile-index {
  width: 100%;
  height: 100%;
  .item-title {
    width: 100%;
    display: flex;
    .content-area {
      flex: 5;
    }
    .button-area {
      flex: 1;
      margin-left: auto;

      i {
        font-size: 25px;
      }
    }
  }
}
</style>
