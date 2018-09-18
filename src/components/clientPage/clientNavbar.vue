<template>
  <div>
    <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow text-center fixed-top">
      <a class="mr-0 p-2 p-lg-4 navbar-brand col-md-4 col-lg-2" href="/FoxShop/dist/#/"><span>小YUYU服飾</span><i class="ml-2 fab fa-firefox"></i></a>
      <div class="navbar-nav px-3 d-flex mr-auto">
        <div class="nav-item text-nowrap row">
          <a class="nav-link mx-3" href="/FoxShop/dist/#/">首頁</a>
          <a class="nav-link mx-3" @click="manCategory" href="#">男士</a>
          <a class="nav-link mx-3" @click="womanCategory" href="#">女士</a>
          <a class="nav-link mx-3" @click="hatCategory" href="#">帽子</a>
          <a class="nav-link mx-3" @click="headsetCategory" href="#">耳機</a>
          <a class="nav-link mx-3" @click="goodCategory" href="#">超級好棒棒</a>
        </div>
      </div>
        <div class="input-group navbar-btn-hover">
          <input type="text" class="h-100 navbar-btn-dnone" placeholder="搜尋商品" aria-label="search"
            aria-describedby="basic-addon2" v-model="searchWord">
            <button class="btn btn-outline-secondary" type="button" @click="search"><i class="fas fa-search"></i></button>
        </div>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <router-link to="/login" class="nav-link" href="#">登入</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "navbar",
    props: {
      msg: String
    },
    data(){
      return{
        searchWord:'',
        categorySearchWord:''
      }
    },
    methods: {
      search(){
        this.$emit('searchProp',this.searchWord)
        if(this.searchWord!==''){
          this.toMain()
        }
      },
      manCategory(){
        this.$router.push('/')
        this.categorySearchWord='男士'
        this.$emit('categoryProp',this.categorySearchWord)
        this.toMain();
      },
      womanCategory(){
        this.$router.push('/')
        this.categorySearchWord='女士'
        this.$emit('categoryProp',this.categorySearchWord)
        this.toMain();
      },
      hatCategory(){
        this.$router.push('/')
        this.categorySearchWord='帽子'
        this.$emit('categoryProp',this.categorySearchWord)
        this.toMain();
      },
      headsetCategory(){
        this.$router.push('/')
        this.categorySearchWord='耳機'
        this.$emit('categoryProp',this.categorySearchWord)
        this.toMain();
      },
      goodCategory(){
        this.$router.push('/')
        this.categorySearchWord='超級好棒棒';
        this.$emit('categoryProp',this.categorySearchWord);
        this.toMain();
      },
      signout() {
        const api = `https://vue-course-api.hexschool.io/logout`;
        const vm = this;
        vm.$http.post(api).then(response => {
          console.log(response.data);
          vm.$router.push("/");
        });
      },
      toMain(){
        $('html, body').animate({
        scrollTop: 600
      }, 1000);
    }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* .w-10{
    width: 10%;
  } */
  .navbar-btn-dnone{
    width: 32px !important; 
    transition: ease-in-out 0.6s;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    position: absolute;
    right: 42px;
  }
  .navbar-btn-hover{
    width: 42px;
  }
  .navbar-btn-hover:hover .navbar-btn-dnone{
    width: 180px !important; 
    opacity: 1 !important;
    visibility:visible;
  }
  .navbar-btn-dnone:Focus {
    width: 180px !important; 
    opacity: 1 !important;
    visibility:visible;
  }
</style>