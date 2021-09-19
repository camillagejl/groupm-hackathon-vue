import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import BrandComparison from "@/views/BrandComparison";
import SentimentAnalyses from "@/views/SentimentAnalyses";
import Setting from "@/views/Setting";

Vue.use(VueRouter)

let Campaigns;
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/brandcomparison',
    name: 'BrandComparison',
    component: BrandComparison
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: Campaigns
  },
  {
    path: '/sentimentanalyses',
    name: 'SentimentAnalyses',
    component: SentimentAnalyses
  },
  {
    path: '/settings',
    name: 'Setting',
    component: Setting
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
