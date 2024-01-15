import { createRouter, createWebHistory } from 'vue-router';
import Categories from '../views/Categories.vue';
import CategoryArticles from '../views/CategoryArticles.vue';
import ArticleDetails from '../views/ArticleDetails.vue';

const routes = [
  { path: '/', component: Categories },
  { path: '/category/:id', name: 'category', component: CategoryArticles, props: true },
  { path: '/article/:id', name: 'article', component: ArticleDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
