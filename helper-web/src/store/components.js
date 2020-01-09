/**
 * 异步组件库
 */
export default {
  namespaced: true,
  state: {
    asyncComponents: {
      'test': () =>
        import('@/views/test' /* webpackChunkName: "delivery" */),
      // 权限管理
      'permission': () =>
        import('@/views/permission/index' /* webpackChunkName: "permission" */),
      'home': () =>
        import('@/views/home/index' /* webpackChunkName: "home" */),
      'order': () =>
        import('@/views/order/index' /* webpackChunkName: "order" */),
      'delivery': () =>
        import('@/views/delivery/index' /* webpackChunkName: "delivery" */),

      'order-mobile': () =>
        import('@/views/order-mobile/index' /* webpackChunkName: "order" */),
      'delivery-mobile': () =>
        import('@/views/delivery-mobile/index' /* webpackChunkName: "delivery" */)
    }
  }
}
