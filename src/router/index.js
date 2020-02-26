import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import indexWeb from '../components/indexWeb/indexWeb'
import Recommend from '../components/Recommend'
import SongListPage from '../components/pages/SongListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: indexWeb
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: '/songlist/:id',
          component: SongListPage
        }
      ]
    }
  ]
})
