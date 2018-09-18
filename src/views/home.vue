<template>
  <div>
      <div style='background-image: url(./img/gravel.png)'>
    <navbar @searchProp="searchList" @categoryProp="searchList"></navbar>
    <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 ml-sm-autopx-4"> -->
    <router-view :searchWord='searchWord'></router-view>
    <!-- </div>
      </div>
    </div> -->
    <footer class="text-center bg-secondary p-5 mt-5 text-white">
      <div class="border-dark-u">小YUYU購物網</div>
      <div>
        <div class="content">
            <a class="footer-icon text-white" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
        </div>
        <div class="content">
            <a class="footer-icon text-white" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="content">
            <a class="footer-icon text-white" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="content">
            <a class="footer-icon text-white" href="https://www.google.com/"><i class="fab fa-google"></i></a>
        </div>  
      </div>
      <p>
        <a class="text-white" href="https://twitter.com/">聯絡我們</a>
      </p>
      <p>
        <a class="text-white" href="#" @click.prevent='toTOP()'>Back to top</a>
      </p>
    </footer>
  </div>
</div>
</template>

<script>
  import productSimulation from "../components/clientPage/clientProductList.vue";
  import navbar from "../components/clientPage/clientNavbar.vue";
  import $ from "jquery";

  export default {
    components: {
      productSimulation,
      navbar
    },
    name: "HelloWorld",
    props: {
      msg: String
    },
    data() {
      return {
        searchWord: ""
      };
    },
    methods: {
      getCarts() {
        const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
        const vm = this;
        this.$http.get(api).then(response => {
          console.log(response.data);
          vm.shopCartList = response.data.data.carts;
          vm.total = response.data.data.total;
          vm.final_total = response.data.data.final_total;
          $("#shopCart").modal("show");
        });
      },
      searchList(searchWord) {
        this.searchWord = searchWord;
      },
      toTOP() {
        $("html, body").animate({
            scrollTop: 0
          },
          1000
        );
      }
    },
    created() {
    },
    mounted() {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>