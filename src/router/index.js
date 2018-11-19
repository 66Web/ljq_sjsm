import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import Analysis from '../pages/detail/analysis'
import Count from '../pages/detail/count'
import Forecast from '../pages/detail/forecast'
import Publish from '../pages/detail/publish'
import OrderListPage from '../pages/orderList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    }
  ]
})
