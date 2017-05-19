import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
// import CarAntiTheft from '../components/CarAntiTheft'
// import House from '../components/House'
// import LastPage from '../components/LastPage'
// import ProjectManage from '../components/ProjectManage'
// import RunDate from '../components/RunDate'
// import SPDR from '../components/SPDR'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    // ,
    // {
    //   path: '/car-anti-theft',
    //   name: 'carAntiTheft',
    //   component: CarAntiTheft
    // },
    // {
    //   path: '/last-page',
    //   name: 'lastPage',
    //   component: LastPage
    // },
    // {
    //   path: '/project-manage',
    //   name: 'projectManage',
    //   component: ProjectManage
    // },
    // {
    //   path: '/run-date',
    //   name: 'runDate',
    //   component: RunDate
    // },
    // {
    //   path: '/SPDR',
    //   name: 'SPDR',
    //   component: SPDR
    // },
    // {
    //   path: '/s-house',
    //   name: 'house',
    //   component: House
    // }
  ]
})