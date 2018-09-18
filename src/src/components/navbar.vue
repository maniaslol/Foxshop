<template>
  <div>
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">後台管理系統</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    msg: String
  },
  methods:{
    signout(){
      const api = `https://vue-course-api.hexschool.io/logout`;
      const vm = this;
      vm.$http.post(api).then(response=>{
        console.log(response.data)
        vm.$router.push('/')
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

</style>
