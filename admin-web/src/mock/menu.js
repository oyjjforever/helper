// import store from '@/store'
// 单位端菜单数据
const menus = [
  {
    'id': 0,
    'code': 'home',
    'name': 'home',
    'target': 'component',
    'component': 'home',
    'sortCode': 1
  },
  {
    'id': 1,
    'code': 'order',
    'name': 'order',
    'target': 'component',
    'component': 'order',
    'sortCode': 1
  },
  {
    'id': 1,
    'code': 'delivery',
    'name': 'delivery',
    'target': 'component',
    'component': 'delivery',
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
