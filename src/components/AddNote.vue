<template>
  <button @click="updateShowing">New Note</button>
  <ObjectModal v-if="isShowing" />
</template>

<script>
import ObjectModal from "./ObjectModal.vue";
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";

export default {
  name: "AddNote",
  components:{ ObjectModal },

  setup() {
    const store = useStore();
    const notes = computed(() => store.state.notes);
    const isShowing = computed(() => store.state.isShowing);

   

    function updateShowing() {
      store.commit("updateIsShowing");
    }

    return { notes, updateShowing, isShowing };
  },
};
</script>

<style>
button{
  background-color: #000000;
  width: 100px;
  height: 30px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  margin-right: auto;
  
}

</style>