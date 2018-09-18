<template>
    <nav class="col-md-2 d-md-block mt-md-0 mt-5 bg-light sildbar">
          <div class="mt-5 mt-sm-3">
            <h6 class="d-flex justify-content-between align-items-center px-md-3  mt-sm-5 text-muted">
              <span>管理員</span>
            </h6>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item " href="#" >
                <router-link to="/admin/products" activeClass="active" class="nav-link">
                  <span data-feather="package"></span>
                  產品列表 <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/orderPage" activeClass="active" class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  訂單管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/coupon" activeClass="active" class="nav-link" href="#">
                  <span data-feather="credit-card"></span>
                  優惠券管理
                </router-link>
              </li>
            </ul>
            <h6 class=" d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>模擬功能</span>
            </h6>
            <ul class="nav nav-pills flex-column mb-2">
              <li class="nav-item">
                <router-link to="/admin/productSimulation" activeClass="active" class="nav-link"  href="#">
                  <span data-feather="file-text"></span>
                  模擬上架
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
</template>

<script>
import $ from "jquery"
import Icons  from "../icon/feather.min.js";
export default {
  name: 'sidebar',
  props: {
    
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  mounted() {
    feather.replace()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  .sildbar{
    height: 100vh;
  }
  // .active{
  //   background-color: indigo !important
  // }
</style>
