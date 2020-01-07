<template>
  <div class="delivery-index">
    <el-calendar>
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <span v-if="loading">{{ data.day.substring(8).split('-').join('-') }}</span>
        <el-badge v-else :value="content['num' + data.day.split('-').join('')]" class="item">
          <div class="cell" @click="onView(data.day)" show-overflow-tooltip>
            {{ data.day.substring(8).split('-').join('-') }}
            <br/>
            <span style="font-size: 5px;" v-html="content['day' + data.day.split('-').join('')]"/>
          </div>
        </el-badge>
      </template>
    </el-calendar>
    <el-dialog
      v-dialog
      width="700px"
      v-if="dialog.show"
      :visible.sync="dialog.show"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <div slot="title" class="title">
        <icon class="el-icon-document"></icon>
        <span>查看详情</span>
      </div>
      <div class="content">
        <el-carousel height="500px" indicator-position="outside">
          <el-carousel-item v-for="item in dialog.data" :key="item.id">
            <el-form disabled ref="form" :model="item" label-width="110px">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="客户姓名" prop="name">
                    <el-input v-model.trim="item.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="下单时间" prop="orderDate">
                    <el-date-picker
                      type="date"
                      style="width: 100%;"
                      placeholder="选择日期"
                      v-model="item.orderDate"
                      value-format="yyyy-MM-dd"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="客户电话" prop="phone">
                    <el-input v-model.trim="item.phone"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="送货地址" prop="address">
                    <el-input v-model.trim="item.address"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="备注" prop="remark">
                    <el-input
                      maxlength="50"
                      type="textarea"
                      show-word-limit
                      placeholder="请输入内容"
                      v-model="item.remark"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="总金额" prop="amount">
                    <el-input v-model.trim="item.amount"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <el-table
              border
              stripe
              ref="table"
              :data="item.detail"
              highlight-current-row
            >
              <el-table-column type="index" width="50" align="center" label="序号"></el-table-column>
              <el-table-column prop="model" label="型号" align="left" show-overflow-tooltip></el-table-column>
              <el-table-column prop="color" label="颜色" align="left" show-overflow-tooltip></el-table-column>、
              <el-table-column prop="format" label="规格" align="left" show-overflow-tooltip></el-table-column>
              <el-table-column prop="price" label="单价" align="left"  show-overflow-tooltip></el-table-column>
              <el-table-column prop="num" label="数量" align="left"  show-overflow-tooltip></el-table-column>
            </el-table>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      loading: true,
      content: {},
      dialog: {
        show: false,
        data: []
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.fetchData()
    })
  },
  methods: {
    async fetchData () {
      let contentTmp = {}
      let { data } = await this.$api.queryData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryOrder',
          status: '3'
        }
      })
      data.data.forEach(item => {
        let date = item.sendDate.split('-').join('')
        let dayStr = 'day' + date
        let numStr = 'num' + date
        if (dayStr in contentTmp) {
          contentTmp[dayStr] = contentTmp[dayStr] + '<br/>' + item.name + ': ' + item.address
        } else {
          contentTmp[dayStr] = item.name + ': ' + item.address
        }
        if (numStr in contentTmp) {
          contentTmp[numStr] = contentTmp[numStr] + 1
        } else {
          contentTmp[numStr] = 1
        }
      })
      this.content = Object.assign({}, contentTmp)
      this.loading = false
    },
    async onView (date) {
      if (this.content['num' + date.split('-').join('')] > 0) {
        this.dialog.show = true
        let { data } = await this.$api.queryData({
          params: {
            mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryWholeOrderBySendDate',
            sendDate: date
          }
        })
        this.formatOrderDate(data.data)
      }
    },
    formatOrderDate (data) {
      this.dialog.data = []
      let checked = []
      data.forEach(item => {
        if (!checked[item.id]) {
          let order = {
            id: item.id,
            name: item.name,
            phone: item.phone,
            address: item.address,
            orderDate: item.orderDate,
            amount: item.amount,
            remark: item.remark,
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
        this.dialog.data.push(checked[item])
      }
      console.log(this.dialog.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.delivery-index {
  height: 100%;
  width: 100%;
  .cell {
    overflow: hidden;
  }
  .el-badge {
    display: block;
  }
  .content {
  }
}
</style>
