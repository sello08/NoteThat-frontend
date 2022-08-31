<template>
  <div class="menu">
    <button @click="updateShowing" class="add-note">New Note</button>
    <div class="menu2">Main Menu</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";

export default {
  name: "Menu",
  components: {},
  setup() {
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);

    function updateShowing() {
      store.commit("updateIsShowing");
    }

    return { updateShowing, isShowing };
  },
};
</script>

<style>
.menu {
  width: 220px;
  height: 100vh;
  background-color: rgb(68, 68, 68);
}
.menu2 {
  margin-top: 60px;
  height: 30px;
  background-color: rgba(182, 182, 182, 0.392);
  color: white;
}
.add-note {
  background-color: #ff9f1e;
  width: 160px;
  height: 30px;
  color: white;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin-top: 25px;
  font-size: 15px;
}
.menu2 {
}
</style>