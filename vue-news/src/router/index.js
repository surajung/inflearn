import Vue from 'vue'
import VueRouter from 'vue-router';
import NewView from '../views/NewView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/news',
      component: 'NewView',
    },
    {
      path: '/ask',
      component: 'AskView',
    },
    {
      path: '/jobs',
      component: 'JobsView',
    },
  ],
});
