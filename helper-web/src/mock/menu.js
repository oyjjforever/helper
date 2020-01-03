// import store from '@/store'
// 单位端菜单数据
const menus = [
  {
    'id': 1,
    'code': 'order',
    'name': '订单管理',
    'target': 'component',
    'component': 'order',
    'sortCode': 1
  }
]
export default {
  menu: config => {
    return {
      success: true,
      data: menus
    }
  }
}
