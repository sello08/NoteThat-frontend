<template>
  <div class="main">
    <SideMenu class="side-menu" />
    <div class="sub">
      <SlidingCards />
      <CreateUpdateNote
        v-if="isShowing"
        :mode="isEditing == true ? 'edit' : 'create'"
      />
      <CardList />
    </div>
  </div>
</template>
  <script>
import SideMenu from "../components/SideBar.vue";
import SlidingCards from "../components/SlidingCards.vue";
import CardList from "../components/CardList.vue";
import CreateUpdateNote from "../components/CreateUpdateNote.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  name: "App",
  components: {
    SideMenu,
    SlidingCards,
    CardList,
    CreateUpdateNote,
  },
  setup() {
    const token = ref(localStorage.getItem("token"));
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);

    function updateShowing() {
      store.commit("updateIsShowing");
    }
    return { updateShowing, isShowing, isEditing, token };
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
  