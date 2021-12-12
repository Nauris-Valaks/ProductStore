/* eslint-disable no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// We import the components this way to lazy load them.
const Products = () => import('../components/products/products.vue')
const SelectedProduct = () => import('../components/products/product/productView.vue')
const AdminProducts = () => import('../components/admin/products/products.vue')
const NotFound = () => import('../components/notFound.vue')
const Cart = () => import('../components/cart/cart.vue')

// The routes for the project.
const routes = [
    { path: '*', component: NotFound },
    { path: '/notFound', name: 'notFound', component: NotFound },
    {
        path: '/',
        name: 'home',
        component: Products,
        meta: {}
    },
    {
        path: '/products/:id',
        name: 'productView',
        component: SelectedProduct,
        meta: {}
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {}
    },
    {
        path: '/admin/products',
        name: 'adminProducts',
        component: AdminProducts,
        meta: {}
    }
]
const router = new VueRouter({ routes, mode: 'history' })

export default router
