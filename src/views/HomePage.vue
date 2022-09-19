<template>
  <div class="main">
    <SideMenu class="side-menu" />
    <div class="sub">
      <Transition>
        <Trash v-if="isTrashed" :mode="isEditing == true ? 'edit' : 'create'" />
      </Transition>
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
import Trash from "../components/Trash.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  name: "App",
  components: {
    SideMenu,
    SlidingCards,
    CardList,
    CreateUpdateNote,
    Trash,
    Trash,
  },
  setup() {
    const token = ref(localStorage.getItem("token"));
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);
    const isTrashed = computed(() => store.state.isTrashed);

    function updateShowing() {
      store.commit("updateIsShowing");
    }
    return {
      updateShowing,
      isShowing,
      isEditing,
      token,
      isTrashed,
    };
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.9s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
  