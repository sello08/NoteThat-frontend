<template>
  <div class="menu">
    <a-button
      id="new"
      @click="updateShowing"
      type="primary"
      danger
      size="small"
      shape="round"
      >New Note
    </a-button>
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
    const isEditing = computed(() => store.state.isEditing);

    function updateShowing() {
      store.commit("updateIsShowing");
      store.commit("updateEditing");
    }

    return { updateShowing, isShowing, isEditing };
  },
};
</script>

<style>
#new {
  margin-top: 100px;
}
.menu {
  width: 15%;
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