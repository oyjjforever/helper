<template>
  <div class="orderDetail-maintenance">
    <div class="tool-bar">
      <el-link icon="el-icon-edit-outline" @click="onUpdate" v-show="!isUpdating">编辑</el-link>
      <el-link icon="el-icon-circle-close" @click="onCancel" v-show="isUpdating">取消</el-link>
      <div class="split-line"></div>
      <el-link icon="el-icon-circle-check" @click="onSave" v-show="isUpdating">保存</el-link>
      <div class="split-line" v-show="isUpdating"></div>
      <el-link icon="el-icon-circle-plus-outline" @click="onAdd" v-show="isUpdating">增加行</el-link>
      <span class="amount-span"> 总金额：{{amount}} </span>
    </div>
    <div class="orderDetail-container">
      <el-table
        border
        stripe
        ref="table"
        :data="isUpdating ? modifyDate : grid.rows"
        :height="grid.height"
        highlight-current-row
        v-loading="grid.loading"
        @row-click="onRowClick"
        @selection-change="val => grid.selectedRow =val"
      >
        <el-table-column type="selection" align="center" width="50"></el-table-column>
        <el-table-column type="index" width="50" align="center" label="序号"></el-table-column>
        <el-table-column prop="model" label="型号" align="left" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input v-if="isUpdating" v-model.trim="scope.row.model" placeholder="请输入型号"></el-input>
            <span v-else>{{ scope.row.model}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="color" label="颜色" align="left" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input v-if="isUpdating" v-model.trim="scope.row.color" placeholder="请输入颜色"></el-input>
            <span v-else>{{ scope.row.color}}</span>
          </template>
        </el-table-column>、
        <el-table-column prop="format" label="规格" align="left" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input v-if="isUpdating" v-model.trim="scope.row.format" placeholder="请输入规格"></el-input>
            <span v-else>{{ scope.row.format}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="单价" align="left"  show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input v-if="isUpdating" v-model.trim="scope.row.price" placeholder="请输入单价"></el-input>
            <span v-else>{{ scope.row.price}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="数量" align="left"  show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input v-if="isUpdating" v-model.trim="scope.row.num" placeholder="请输入数量"></el-input>
            <span v-else>{{ scope.row.num}}</span>
          </template>
        </el-table-column>
        <el-table-column
          width="100"
          align="center"
          prop="status"
          label="状态"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === '0'" type="success">已送</el-tag>
            <el-tag v-else-if="scope.row.status === '1'" type="danger">未送</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" width="50" label="操作" v-if="isUpdating">
          <template slot-scope="scope">
            <el-tooltip effect="light" placement="bottom-start" content="删除" :enterable="false">
              <el-link
                style="font-size: 20px;margin: 0 5px 0 0;"
                icon="el-icon-delete"
                @click="onDelete(scope.row, scope.$index)"
              ></el-link>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, sizes, prev, pager, next"
        :page-sizes="[10,30,50]"
        :page-size="pagging.pageSize"
        :current-page="pagging.pageNum"
        :total="pagging.total"
        @size-change="onChangePageSize"
        @current-change="onChangeCurrentPage"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      isUpdating: false,
      grid: {
        rows: [],
        height: null,
        loading: false,
        selectedRow: []
      },
      pagging: {
        total: 0,
        pageNum: 1,
        pageSize: 10
      },
      mainId: null,
      deleteDate: [],
      modifyDate: {
        model: null,
        color: null,
        format: null,
        price: null,
        num: null
      }
    }
  },
  computed: {
    amount () {
      let amount = 0
      let data = this.isUpdating ? this.modifyDate : this.grid.rows
      data.forEach(item => {
        amount += item.price * item.num
      })
      console.log(amount)
      return amount
    }
  },
  created () {
    this.featchData()
  },
  mounted () {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    async featchData (mainId) {
      this.grid.loading = true
      let { data } = await this.$api.pagingData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryOrderDetail',
          id: mainId,
          pageNum: this.pagging.pageNum,
          pageSize: this.pagging.pageSize
        }
      })
      this.mainId = mainId
      this.grid.loading = false
      this.grid.rows = data.data.rows
      this.pagging.total = data.data.total
      this.pagging.pageNum = data.data.pageNum
      this.pagging.pageSize = data.data.pageSize
    },
    onQuery () {
      this.pagging.pageNum = 1
      this.featchData()
    },
    onChangeCurrentPage (pageNum) {
      this.pagging.pageNum = pageNum
      this.featchData()
    },
    onChangePageSize (pageSize) {
      this.pagging.pageNum = 1
      this.pagging.pageSize = pageSize
      this.featchData()
    },
    async onAdd () {
      let row = {
        mainId: this.mainId,
        model: '',
        color: '',
        format: '',
        price: null,
        num: null,
        operation: '1'
      }
      this.modifyDate.push(row)
    },
    async validateBeforeDelete (row) {
      // if (this.grid.selectedRow.length === 0) {
      //   this.$message.info('请选择要删除的记录！')
      //   return Promise.reject(new Error())
      // }
      return Promise.resolve()
    },
    async onDelete (row, index) {
      try {
        await this.validateBeforeDelete(row)
        this.$confirm('您确定要删除当前选中的记录吗?', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          if (this.isUpdating) {
            this.modifyDate.splice(index, 1)
            if (!row.operation) {
              row.operation = '-1'
              this.deleteDate.push(row)
            }
          } else {
            await this.$api.remove({
              params: {
                mapperId: 'com.bosssoft.monitor.dao.OrderMapper.deleteOrderDetail',
                id: row.id
              }
            })
            this.featchData(this.mainId)
            this.$message.success('删除成功！')
          }
        }).catch(() => { })
      } catch (error) {
        error.message && this.$message.error(error.message)
      }
    },
    onUpdate () {
      this.isUpdating = true
      this.deleteDate = []
      this.modifyDate = this.grid.rows
    },
    onCancel () {
      this.isUpdating = false
      this.featchData(this.mainId)
    },
    async validateBeforeSave () {
      return Promise.resolve()
    },
    async updateAmount () {
      await this.$api.modify({
        data: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.updateOrder',
          id: this.mainId,
          amount: this.amount
        }
      })
    },
    async onSave () {
      try {
        await this.validateBeforeSave()
        this.modifyDate.push(...this.deleteDate)
        let data = JSON.stringify(this.modifyDate)
        await this.$api.modifyOrderDetail({
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            data: data
          }
        })
        await this.updateAmount()
        this.featchData(this.mainId)
        this.isUpdating = false
        this.$message.success('更新成功！')
      } catch (error) {
        error.message && this.$message.error(error.message)
      }
    },
    resize () {
      this.grid.height = this.$el.clientHeight - 80
    }
  }
}
</script>
<style lang="scss" scoped>
.orderDetail-maintenance {
  width: 100%;
  height: 100%;
  .amount-span {
    margin-left:auto;
  }
}
</style>
