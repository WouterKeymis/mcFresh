import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../components/home/HomePage.vue';
import BoxesPage from '../components/boxes/BoxesOverview.vue';
import AboutPage from '../components/home/AboutPage.vue';
import ContactPage from '../components/home/ContactPage.vue';
import AdminPage from '../components/admin/AdminPage.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/boxes',
    name: 'Boxes',
    component: BoxesPage,
  }, {
    path: '/about',
    name: 'About',
    component: AboutPage,
  }, {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  }, {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
  }],
});
