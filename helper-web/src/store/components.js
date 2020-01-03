/**
 * 异步组件库
 */
export default {
  namespaced: true,
  state: {
    asyncComponents: {
      'simple-grid': () =>
        import('@/views/simple-grid' /* webpackChunkName: "permission" */),
      'paging-grid': () =>
        import('@/views/paging-grid' /* webpackChunkName: "permission" */),
      // 权限管理
      'permission': () =>
        import('@/views/permission/index' /* webpackChunkName: "permission" */),

      'picturesShow': () =>
        import('@/views/pictures-show/index' /* webpackChunkName: "picturesShow" */),

      'order': () =>
        import('@/views/order/index' /* webpackChunkName: "order" */)
    }
  }
}
