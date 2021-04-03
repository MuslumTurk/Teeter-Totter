import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/AppMain.vue'),
      children: [
        {
          path: '',
          name: 'Games',
          component: () => import('../views/Dashboard'),
          meta: {
            visible: true,
            icon: 'mdi-monitor-dashboard',
            app_menu_id: 'dashboard'
          }
        }
      ]
    }
  ]
})
