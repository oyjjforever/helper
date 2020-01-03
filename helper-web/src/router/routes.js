// 路由配置
export default [{
  path: '/',
  redirect: { name: 'login' }
}, {
  path: '/login/:module?',
  name: 'login',
  component: () => import('@/views/base/base-login' /* webpackChunkName: "base-login" */)
}, {
  path: '/redirect/:path*',
  component: () => import('@/components/redirect' /* webpackChunkName: "redirect" */)
}, {
  path: '/picturesShow/picturesDetail',
  name: 'picturesDetail',
  component: () => import('@/views/pictures-show/detail' /* webpackChunkName: "picturesDetail" */)
}]
