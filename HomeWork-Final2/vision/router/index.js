import Vue from 'vue'
import VueRouter from 'vue-router'
import SellerPage from '@/views/SellerPage'
import TrendPage from '@/views/TrendPage'
import MapPage from '@/views/MapPage'
import RankPage from '@/views/RankPage'
import HotPage from '@/views/HotPage'
import StockPage from '@/views/StockPage'
import ScreenPage from '@/views/ScreenPage'
import NMHCPage from '@/views/NMHCPage'
import NMHCRealPage from '@/views/NMHCRealPage'
import NOXPage from '@/views/NOXPage'
import NOXRealPage from '@/views/NOXRealPage'
import RewardPage from '@/views/RewardPage'
import ACTIONRealPage from '@/views/ACTIONRealPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/screen'
  },
  {
    path: '/screen',
    component: ScreenPage
  },
  {
    path: '/sellerpage',
    component: SellerPage
  },
  {
    path: '/trendpage',
    component: TrendPage
  },
  {
    path: '/mappage',
    component: MapPage
  },
  {
    path: '/rankpage',
    component: RankPage
  },
  {
    path: '/hotpage',
    component: HotPage
  },
  {
    path: '/stockpage',
    component: StockPage
  },
  {
    path: '/nmhcpage',
    component: NMHCPage
  },
  {
    path: '/nmhcrealpage',
    component: NMHCRealPage
  },
  {
    path: '/rewardpage',
    component: RewardPage
  },
  {
    path: '/actionpage',
    component: ACTIONRealPage
  },
  {
    path: '/noxpage',
    component: NOXPage
  },
  {
    path: '/noxrealpage',
    component: NOXRealPage
  }
]

const router = new VueRouter({
  routes
})

export default router
