<template>
  <CreateUpdateNote
    v-if="isShowing"
    :mode="mode == 'create' ? 'create' : 'edit'"
  />
</template>

<script>
import ObjectModal from "./ObjectModal.vue";
import EditNotes from "./EditNotes.vue";
import CreateUpdateNote from "./CreateUpdateNote.vue";
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";

export default {
  name: "AddNote",
  components: { ObjectModal, EditNotes, CreateUpdateNote },

  setup() {
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);

    function updateShowing() {
      store.commit("updateIsShowing");
    }
    return { updateShowing, isShowing, isEditing };
  },
};
</script>

<style>
</style>