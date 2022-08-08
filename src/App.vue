<template>
  <div>
    <AddNote />
    <div class="main">
      <TemporaryNote />
    </div>
  </div>
</template>
<script>
import AddNote from "./components/AddNote.vue";
import TemporaryNote from "./components/TemporaryNote.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: { AddNote, TemporaryNote },
  setup() {
    const store = useStore();

    return {};
  },
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
  max-width: 500px;
  height: 750px;
  color: rgb(0, 0, 0);
  background-color: rgb(224, 218, 218);
  margin-left: auto;
  margin-right: auto;
  border: 0.1px solid;
  border-radius: 15px;
}
</style>
