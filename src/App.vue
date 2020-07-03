<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>

<script>
import Header from "@/layouts/Header";
export default {
  components: {
    Header
  },
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
      this.$api.query("").then(res => {
        console.log(res);
      });
    }
  }
};
</script>
