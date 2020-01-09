<template>
  <div class="order-mobile-index">
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in orders" :key="index">
        <template slot="title">
          <span style="margin-right: 10px">
            <el-tag v-if="item.status === '0'" type="success">已完成</el-tag>
            <el-tag v-else-if="item.status === '1'" type="danger">待付款</el-tag>
            <el-tag v-else-if="item.status === '2'" type="danger">待尾款</el-tag>
            <el-tag v-else-if="item.status === '3'" type="danger">待送货</el-tag>
          </span>
          {{item.name + ' - ' + item.address}}
        </template>
        <el-button type="success" @click="uploadPicture(item)">上传图片</el-button>
        <picture-upload :picture="item.picture" @refreshOrder="featchData"></picture-upload>
        <el-button type="primary" @click="showPicture(item)">查看图片</el-button>
        <picture-show :picture="item.picture"></picture-show>
        <div>联系方式：{{item.phone}}</div>
        <div>订单时间：{{item.orderDate}}</div>
        <div>送货时间：{{item.sendDate}}</div>
        <div>总金额：{{item.amount}}</div>
        <div>备注：{{item.remark}}</div>
        <el-table
          border
          stripe
          ref="table"
          :data="item.detail"
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
  </div>
</template>

<script>
import qs from 'qs'
import PictureShow from '../../components/picture-show'
import PictureUpload from '../../components/picture-upload'
export default {
  name: 'index',
  components: { PictureUpload, PictureShow },
  data () {
    return {
      searcher: {
        status: null
      },
      picture: {
        show: false,
        name: null
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
            id: item.id,
            name: item.name,
            phone: item.phone,
            address: item.address,
            orderDate: item.orderDate,
            sendDate: item.sendDate,
            amount: item.amount,
            remark: item.remark,
            status: item.status,
            picture: {
              picUrl: item.picUrl,
              picShow: false,
              picUpload: false,
              picUploadId: item.id
            },
            detail: []
          }
          checked[item.id] = order
        }
        checked[item.id]['detail'].push({
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
    async featchPicture (id) {
      let { data } = await this.$api.queryData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryOrder',
          id: id
        }
      })
      this.picture.name = data.data[0].picUrl
    },
    showPicture (item) {
      item.picture.picShow = true
    },
    uploadPicture (item) {
      item.picture.picUpload = true
    }
  }
}
</script>

<style lang="scss" scoped>
.order-mobile-index {
  width: 100%;
  height: 100%;
}
</style>
