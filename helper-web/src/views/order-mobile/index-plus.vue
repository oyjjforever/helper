<template>
  <div class="order-mobile-index">
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in orders" :key="index">
        <template slot="title">
            <div class="item-title" @click="toggleCollapse(item)">
              <div class="content-area" @touchstart="touchstart($event,index)" @touchmove="touchmove($event,index)" @touchend="touchend($event,index)">
                <div class="content-button" :style="buttonStyle(index)">
                  <div class="pic-button">
                    <span class="el-icon-picture" @click.stop="showPicture(item)"></span>图片
                  </div>
                  <div class="pdf-button">
                    <span class="el-icon-s-order" @click.stop="showPdf(item)"></span>PDF
                  </div>
                </div>
                <div class="content-main" :style="contentStyle(index)" :ref="'contentMain' + index">
                  <span style="margin-right: 10px">
                    <el-tag v-if="item.main.status === '0'" type="success">已完成</el-tag>
                    <el-tag v-else-if="item.main.status === '1'" type="danger">待付款</el-tag>
                    <el-tag v-else-if="item.main.status === '2'" type="danger">待尾款</el-tag>
                    <el-tag v-else-if="item.main.status === '3'" type="danger">待送货</el-tag>
                  </span>
                  {{item.main.name + ' - ' + item.main.address}}
                </div>
              </div>
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
      touch: {
        start: 0,
        move: 0,
        index: 0,
        distance: 0
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
  computed: {
    contentStyle () {
      return function (index) {
        if (this.touch.distance === 0) {
          return {}
        }
        if (index === this.touch.index) {
          let distance = this.touch.distance
          let marginLeft = 0
          if (this.touch.distance < 0) { // 反向滑动
            marginLeft = distance / 2 + 'px'
          } else { // 正向滑动
            marginLeft = -120 + distance / 2 + 'px'
          }
          console.log(marginLeft)
          return {
            marginLeft: `calc( ${marginLeft} )`
          }
        }
        return {}
      }
    },
    buttonStyle () {
      return function (index) {
        if (this.touch.distance === 0) {
          return { display: 'none' }
        }
        if (index === this.touch.index) {
          return { display: 'inline-block', backgroundCcolor: '#e4474d', width: '120px' }
        }
        return { display: 'none' }
      }
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
            touch: {
              start: 0,
              move: 0
            },
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
      this.touch.distance = 0
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
    },
    touchstart (e, index) {
      this.touch.start = e.targetTouches[0].clientX
      this.touch.index = index
    },
    touchmove (e, index) {
      if (e.targetTouches[0].clientX - this.touch.start < 241) {
        this.touch.move = e.targetTouches[0].clientX
      }
      this.touch.distance = this.touch.move - this.touch.start
      this.touch.index = index
      console.log('distance:' + this.touch.distance)
    },
    touchend (e, index) {
      if (this.touch.distance < 120) {
        this.touch.distance = 0
      } else if (this.touch.distance >= 120 && this.touch.distance <= 240) {
        this.touch.distance = 240
      }
      this.touch.index = index
      console.log('start:' + this.touch.start)
      this.touch.move = 0
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
    .content-area {
      width: 100%;
      .content-main {
        position:static;
        z-index: 1;
        display: inline-block;
        background-color: #ffffff;
        width: calc(100% - 120px);
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .content-button {
        position:static;
        z-index: -1;
        width: 60px;
        height: 100%;
        div {
          width: 60px;
          height: 100%;
          display: inline-block;
          span {
            font-size: 12px;
            margin-left: 10px;
            margin-right: 5px;
            color: #ffffff;
          }
        }
        .pic-button {
          background-color: #a2a2a2;
        }
        .pdf-button {
          background-color: #eaeaea;
        }
      }
    }
  }

}
</style>
