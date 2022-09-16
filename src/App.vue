<template>
  <!-- All routerlinks will append here -->
  <router-view />
</template>
<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import MainPage from "./components/OpeningPage.vue";

export default {
  name: "App",
  components: {},
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
