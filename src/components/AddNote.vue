<template>
  <button @click="updateShowing">New Note</button>
  <ObjectModal v-if="isShowing" />
  <EditNotes v-if="isEditing" />
</template>

<script>
import ObjectModal from "./ObjectModal.vue";
import EditNotes from "./EditNotes.vue";
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";

export default {
  name: "AddNote",
  components: { ObjectModal, EditNotes },

  setup() {
    const store = useStore();
    const notes = computed(() => store.state.notes);
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);

    function updateShowing() {
      store.commit("updateIsShowing");
    }
    return { notes, updateShowing, isShowing, isEditing };
  },
};
</script>

<style>
button {
  background-color: #000000;
  width: 100px;
  height: 30px;
  color: white;
  font-size: 14px;
  border-radius: 15px;
  border: none;
  margin-right: auto;
  cursor: pointer;
}
</style>