<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  // created() {
  //   const api = process.env.VUE_APP_SECRET;
  //   console.log(api);
  //   this.$http.get(api).then(response => {
  //     console.log(response.data);
  //   });
  // }
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
