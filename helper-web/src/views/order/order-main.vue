<template>
  <div class="orderMain-maintenance">
    <div class="tool-bar">
      <el-link icon="el-icon-document-add" @click="onAdd">新增</el-link>
      <div class="split-line"></div>
    </div>
    <div class="orderMain-container">
      <el-table
        border
        stripe
        ref="table"
        :data="grid.rows"
        :height="grid.height"
        highlight-current-row
        v-loading="grid.loading"
        @row-click="onRowClick"
        @selection-change="val => grid.selectedRow =val"
      >
        <el-table-column type="selection" align="center" width="50"></el-table-column>
        <el-table-column type="index" width="50" align="center" label="序号"></el-table-column>
        <el-table-column prop="orderDate" label="下单时间" align="left" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="客户姓名" align="left" show-overflow-tooltip></el-table-column>、
        <el-table-column prop="sendDate" label="送货时间" align="left" show-overflow-tooltip></el-table-column>
        <el-table-column prop="remark" label="备注" align="left"  show-overflow-tooltip></el-table-column>
        <el-table-column
          width="100"
          align="center"
          prop="status"
          label="状态"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === '0'" type="success">已完成</el-tag>
            <el-tag v-else-if="scope.row.status === '1'" type="danger">待付款</el-tag>
            <el-tag v-else-if="scope.row.status === '2'" type="danger">待尾款</el-tag>
            <el-tag v-else-if="scope.row.status === '3'" type="danger">待送货</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" width="100" label="操作">
          <template slot-scope="scope">
            <el-tooltip effect="light" placement="bottom-start" content="查看详情" :enterable="false">
              <el-link
                style="font-size: 20px;margin: 0 5px 0 0;"
                icon="el-icon-view"
                @click="onView(scope.row)"
              ></el-link>
            </el-tooltip>
            <el-tooltip effect="light" placement="bottom-start" content="编辑" :enterable="false">
              <el-link
                style="font-size: 20px;margin: 0 5px 0 0;"
                icon="el-icon-edit-outline"
                @click="onUpdate(scope.row)"
              ></el-link>
            </el-tooltip>
            <el-tooltip effect="light" placement="bottom-start" content="删除" :enterable="false">
              <el-link
                style="font-size: 20px;margin: 0 5px 0 0;"
                icon="el-icon-delete"
                @click="onDelete(scope.row)"
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
    <el-dialog
      v-dialog
      width="700px"
      v-if="dialog.show"
      :visible.sync="dialog.show"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <div slot="title" class="title">
        <i :class="dialogMode.icon"></i>
        <span>订单维护 —— {{dialogMode.title}}</span>
      </div>
      <el-form :disabled="dialog.mode === 3" ref="form" :rules="dialog.rules" :model="dialog.data" label-width="110px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="客户姓名" prop="name">
              <el-input v-model.trim="dialog.data.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="下单时间" prop="orderDate">
              <el-date-picker
                type="date"
                style="width: 100%;"
                placeholder="选择日期"
                v-model="dialog.data.orderDate"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="客户电话" prop="phone">
              <el-input v-model.trim="dialog.data.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="送货时间" prop="sendDate">
              <el-date-picker
                type="date"
                style="width: 100%;"
                placeholder="选择日期"
                v-model="dialog.data.sendDate"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
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
                v-model="dialog.data.remark"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <order-timeLine :mainId="dialog.data.id" ref="orderTimeLine" v-show="dialog.mode === 3"></order-timeLine>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="状态" prop="status" v-show="dialog.mode !== 3">
              <el-select v-model="dialog.data.status" placeholder="请选择">
                <el-option label="待付款" value="1"></el-option>
                <el-option label="待尾款" value="2"></el-option>
                <el-option label="待送货" value="3"></el-option>
                <el-option label="已完成" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="编制人" prop="userName" v-show="dialog.mode !== 3">
              <el-input disabled v-model="dialog.data.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="编制时间" prop="createTime" v-show="dialog.mode !== 3">
              <el-date-picker
                disabled
                v-model="dialog.data.createTime"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer">
        <el-button v-show="dialog.mode !== 3" type="primary" @click="onSave" icon="fa fa-save">&nbsp;保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import qs from 'qs'
import moment from 'moment'
import orderTimeLine from './order-timeLine'
export default {
  name: '',
  components: {
    orderTimeLine
  },
  data () {
    return {
      searcher: {
        status: null
      },
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
      dialog: {
        mode: null,
        show: false,
        data: {
          orderDate: null,
          sendDate: null,
          name: null,
          phone: null,
          address: null,
          remark: null,
          status: null,
          createBy: null,
          userName: null,
          createTime: null
        },
        rules: {
          reformTheme: [
            { required: true, message: '请填写客户姓名！', trigger: 'blur' }
          ],
          orderDate: [
            { required: true, message: '请选择下单时间！', trigger: 'blur' }
          ]
        }
      }
    }
  },
  computed: {
    dialogMode () {
      switch (this.dialog.mode) {
        case 1:
          return { title: '新增', icon: 'el-icon-document-add', message: '添加成功！' }
        case 2:
          return { title: '编辑', icon: 'el-icon-edit-outline', message: '修改成功！' }
        case 3:
          return { title: '查看', icon: 'el-icon-document' }
        default:
          return {}
      }
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
    async featchData () {
      this.searcher.status = qs.parse(window.location.hash.substr(8)).status || null
      // console.log(qs.parse(window.location.hash.substr(8)))
      this.grid.loading = true
      let { data } = await this.$api.pagingData({
        params: {
          mapperId: 'com.bosssoft.monitor.dao.OrderMapper.queryOrder',
          ...this.searcher,
          pageNum: this.pagging.pageNum,
          pageSize: this.pagging.pageSize
        }
      })
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
    async validateBeforeAdd () {
      // if (!this.curTarget) {
      //   this.$message.info('请选择对应的类别进行新增！')
      //   return Promise.reject(new Error())
      // }
      return Promise.resolve()
    },
    async onAdd () {
      try {
        await this.validateBeforeAdd()
        let model = {
          reformTheme: '',
          orderDate: moment().format('YYYY-MM-DD'),
          remark: '',
          status: '1',
          userId: this.$store.state.user.userInfo.userId,
          userName: this.$store.state.user.userInfo.userName,
          createTime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.dialog.mode = 1
        this.dialog.show = true
        this.dialog.data = model
      } catch (error) {
        error.message && this.$message.error(error.message)
      }
    },
    async onView (row) {
      this.dialog.mode = 3
      this.dialog.show = true
      this.dialog.data = Object.assign({}, row)
    },
    async validateBeforeDelete (row) {
      // if (this.grid.selectedRow.length === 0) {
      //   this.$message.info('请选择要删除的记录！')
      //   return Promise.reject(new Error())
      // }
      return Promise.resolve()
    },
    async onDelete (row) {
      try {
        await this.validateBeforeDelete(row)
        this.$confirm('您确定要删除当前选中的记录吗?', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$api.remove({
            params: {
              mapperId: 'com.bosssoft.monitor.dao.OrderMapper.deleteOrder',
              id: row.id
            }
          })
          this.featchData()
          this.$message.success('删除成功！')
        }).catch(() => { })
      } catch (error) {
        error.message && this.$message.error(error.message)
      }
    },
    onUpdate (row) {
      this.dialog.mode = 2
      this.dialog.show = true
      row.createTime = moment().format('YYYY-MM-DD')
      this.dialog.data = Object.assign({}, row)
    },
    async validateBeforeSave () {
      await this.$refs['form'].validate()
      // if (this.dialog.mode === 1) {
      //   // 新增保存前校验
      //   let { data } = await this.$api.queryData({
      //     params: {
      //       mapperId: 'com.bosssoft.monitor.dao.OrderMapper.isExists',
      //       isList: false,
      //       reformTheme: this.dialog.data.reformTheme,
      //       orderDate: this.dialog.data.orderDate
      //     }
      //   })
      //   if (data.data.count > 0) {
      //     if (document.getElementsByClassName('el-message').length === 0) {
      //       this.$message.info('当前主题已存在，请重新输入！')
      //     }
      //     return Promise.reject(new Error())
      //   }
      // }
      // if (this.dialog.mode === 2) {
      //   // 编辑保存前校验
      // }
      return Promise.resolve()
    },
    async onSave () {
      try {
        await this.validateBeforeSave()
        let content = ''
        let mainId = ''
        if (this.dialog.mode === 1) {
          let { data } = await this.$api.add({
            data: {
              mapperId: 'com.bosssoft.monitor.dao.OrderMapper.insertOrder',
              ...this.dialog.data
            }
          })
          content = this.$store.state.user.userInfo.userName + '创建订单'
          mainId = data.data.id.split('-').join('')
        } else {
          let model = this.dialog.data
          await this.$api.modify({
            data: {
              mapperId: 'com.bosssoft.monitor.dao.OrderMapper.updateOrder',
              id: model.id,
              name: model.name,
              phone: model.phone,
              address: model.address,
              sendDate: model.sendDate,
              remark: model.remark,
              status: model.status
            }
          })
          content = this.$store.state.user.userInfo.userName + '修改订单'
          mainId = model.id
        }

        await this.$refs['orderTimeLine'].save(mainId, content)
        this.featchData()
        this.dialog.show = false
        this.$message.success(this.dialogMode.message)
      } catch (error) {
        error.message && this.$message.error(error.message)
      }
    },
    resize () {
      this.grid.height = this.$el.clientHeight - 80
    },
    async onRowClick (row) {
      this.$refs['table'].clearSelection()
      this.$refs['table'].toggleRowSelection(row)
      this.$emit('queryOrderDetail', row)
    }
  }
}
</script>
<style lang="scss" scoped>
.orderMain-maintenance {
  width: 100%;
  height: 100%;
}
</style>
