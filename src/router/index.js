import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Headermain from '../components/Home/Headermain'
import Usercenter from '../components/Home/Usercenter'
import Dongtai from '../pages/Dongtai'
import HospitalDesc from '../pages/HospitalDesc'
import Strategy from '../pages/Strategy'
import One from '../components/Strategy/One'
import Two from '../components/Strategy/Two'
import Three from '../components/Strategy/Three'
import Four from '../components/Strategy/Four'
import Health from '../pages/Health'
import Location from '../pages/Location'
import Satis from '../pages/Satis'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Setpwd from '../pages/Setpwd'
import Mustknow from '../pages/Mustknow'
import Costquery from '../pages/Costquery'
import Logout from '../pages/Logout'
import Registration from '../pages/Registration'
import Report from '../pages/Report'
import ReportList from '../pages/ReportList'
import GuaHao from '../pages/GuaHao'
import Keshi from '../pages/Keshi'
import DoctorList from '../pages/DoctorList'

Vue.use(Router)
Router.prototype.back = false;
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [{
      path: '/',

      component: Home,
      children: [{
          path: '/',
          component: Headermain,

        },
        {
          path: "/dongtai",
          name: 'dongtai',
          component: Dongtai
        },
        {
          path: '/usercenter',
          component: Usercenter
        }
      ]
    },
    {
      path: '/hospitaldesc',
      component: HospitalDesc,
      name: 'hospitaldesc'
    },
    {
      path: '/strategy',
      component: Strategy,
      name: 'strategy',
      children: [{
          path: "/strategy",
          component: One
        },
        {
          path: "/strategy/two",
          component: Two
        },
        {
          path: "/strategy/three",
          component: Three
        },
        {
          path: "/strategy/four",
          component: Four
        },

      ]
    },
    {
      path: '/health',
      component: Health
    },
    {
      path: '/location',
      component: Location
    },
    {
      path: "/satis",
      component: Satis
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/setpwd',
      component: Setpwd,
      name: 'setpwd'
    },
    {
      path: '/mustknow',
      component: Mustknow
    },
    {
      path: '/costquery',
      component: Costquery
    },
    {
      path: '/logout',
      component: Logout
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/report',
      component: Report
    },
    {
      path: '/reportlist',
      component: ReportList,
      name: 'reportlist'
    },
    {
      path: '/guahao',
      component: GuaHao,
      name: 'guahao'
    },
    {
      path: '/keshi',
      component: Keshi
    },
    {
      path: '/doctorlist',
      component: DoctorList
    }

  ]
})
