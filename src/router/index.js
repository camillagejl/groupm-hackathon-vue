import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SentimentAnalyses from "@/views/MentionAnalytics";
import Overview from "@/views/Overview";
import PlatformAnalytics from "@/views/PlatformAnalytics";
import MentionAnalytics from "@/views/MentionAnalytics";
import CompareAnalytics from "@/views/CompareAnalytics";
import Settings from "@/views/Settings";
import NewAnalysis from "@/views/NewAnalysis";
import AnalysisLibrary from "@/views/AnalysisLibrary";

Vue.use(VueRouter)

let Campaigns;
const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/platform_analytics',
    name: 'PlatformAnalytics',
    component: PlatformAnalytics
  },
  {
    path: '/mention_analytics',
    name: 'MentionAnalytics',
    component: MentionAnalytics
  },
  {
    path: '/compare_analytics',
    name: 'CompareAnalytics',
    component: CompareAnalytics
  },
  {
    path: '/new_analysis',
    name: 'NewAnalysis',
    component: NewAnalysis
  },
  {
    path: '/analysis_library',
    name: 'AnalysisLibrary',
    component: AnalysisLibrary
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
