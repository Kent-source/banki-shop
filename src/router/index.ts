import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BaHomePage from '../pages/BaHomePage/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: BaHomePage,
    meta: {
      layout: 'BaDefaultLayout',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
