import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import('../views/login.vue'),
  }, 
  {
    path: "/",
    name: "home",
    component: () =>
      import('../views/home.vue'),
    children:[
      {
        path: "",
        name: "ClientproductSimulation",
        component: () =>
        import('../components/clientPage/clientProductList.vue'),
      },
      {
        path: "oneProduct/:id",
        name: "ClientoneProduct",
        component: () =>
        import('../components/clientPage/clientOneProduct.vue'),
      },
    ]
  },
  
  {
    path: "/checkOut",
    name: "ClientcheckOut",
    component: () =>
    import('../views/checkOut.vue'),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import('../views/admin.vue'),
    children: [
      {
        path: "products",
        name: "products",
        component: () =>
        import('../components/product.vue'),
      },
      {
        path: "coupon",
        name: "coupon",
        component: () =>
        import('../components/coupon.vue'),
      },
      {
        path: "productSimulation",
        name: "productSimulation",
        component: () =>
        import('../components/productSimulation.vue'),
      },
      {
        path: "oneProduct/:id",
        name: "oneProduct",
        component: () =>
        import('../components/oneProduct.vue'),
      },
      {
        path: "checkOut",
        name: "checkOut",
        component: () =>
        import('../components/checkOut.vue'),
      },
      {
        path: "orderPage",
        name: "orderPage",
        component: () =>
        import('../components/orderPage.vue'),
      },
    ],
    meta: {
      reqAuth: true
    }
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router