export default {
  globalAxiosOptions: {
    baseURL: process.env.VUE_APP_BASE_URL
  },
  api: [{
    name: '通用查询接口',
    method: 'queryData',
    url: '/api/v1/basic/queryData'
  }, {
    name: '通用查询分页接口',
    method: 'pagingData',
    url: '/api/v1/basic/pagingData'
  }, {
    name: '通用新增接口',
    method: 'add',
    url: '/api/v1/basic/execute',
    type: 'post'
  }, {
    name: '通用删除接口',
    method: 'remove',
    url: '/api/v1/basic/execute',
    type: 'delete'
  }, {
    name: '通用修改接口',
    method: 'modify',
    url: '/api/v1/basic/execute',
    type: 'put'
  }, {
    name: '用户登录',
    method: 'login',
    url: '/api/v1/user/login',
    type: 'post'
  }, {
    name: '菜单接口',
    method: 'menu',
    url: '/api/v1/menu'
  }, {
    name: '批量更新',
    method: 'modifyOrderDetail',
    url: '/modifyOrderDetail',
    type: 'post'
  }, {
    name: '导出PDF',
    method: 'exportPDF',
    url: '/exportPDF',
    type: 'post'
  }
  ]
}
