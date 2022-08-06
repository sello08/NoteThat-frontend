<template>
  <div>
    <AddNote />
    <div class="main">This is a Div</div>
  </div>
</template>
<script>
import AddNote from "./components/AddNote.vue";
import ObjectModal from "./components/ObjectModal.vue";
//import {  } from "@vue/composition-api";

export default {
  name: "App",
  components: { AddNote },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.main {
  max-width: 700px;
  height: 800px;
  color: rgb(0, 0, 0);
  background-color: antiquewhite;
  margin-left: auto;
  margin-right: auto;
  border: solid;
}
</style>
