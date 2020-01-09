import store from '@/store'
const mobileMenus = [
  {
    'id': 0,
    'code': 'home',
    'name': 'home',
    'target': 'component',
    'component': 'home-mobile',
    'sortCode': 1
  },
  {
    'id': 1,
    'code': 'order',
    'name': 'order',
    'target': 'component',
    'component': 'order-mobile',
    'sortCode': 1
  },
  {
    'id': 1,
    'code': 'delivery',
    'name': 'delivery',
    'target': 'component',
    'component': 'delivery-mobile',
    'sortCode': 1
  }
]

const pcMenus = [
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
    let menus = pcMenus
    if (store.state.system.isMobile) {
      menus = mobileMenus
    }
    return {
      success: true,
      data: menus
    }
  }
}
