<template>
  <div class="main">
    <SideMenu class="side-menu" />
    <div class="sub">
      <SlidingCards />
      <AddNote />
      <TemporaryNote />
    </div>
  </div>
</template>
<script>
import AddNote from "./components/AddNote.vue";
import SideMenu from "./components/SideMenu.vue";
import SlidingCards from "./components/SlidingCards.vue";
import TemporaryNote from "./components/TemporaryNote.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: { AddNote, TemporaryNote, SideMenu, SlidingCards },
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
  display: flex;
  margin-left: -0px;
}
.side-menu {
  margin-left: 0;
}
.sub {
  margin-left: 0;
  width: 85%;
}
</style>
