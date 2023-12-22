import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import LoginView from '../views/Login/Loginview.vue'
import RegisterView from '../views/Register/RegisterView.vue'
import SearchView from '../views/Search/SearchView.vue'
import MyTripsView from '../views/My-trips/My-tripsView.vue'
import CheckoutView from '../views/Checkout/CheckoutView.vue'
import ProductDetailView from '../views/Product-detail/ProductView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/myTrips',
      name: 'myTrips',
      component: MyTripsView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component:ProductDetailView
    }
  ]
})


export default router
