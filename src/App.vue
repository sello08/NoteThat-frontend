<template>
  <router-view />
</template>
<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: { MainPage },
  setup() {},
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
