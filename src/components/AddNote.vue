<template>
  <ObjectModal v-if="isShowing" />
  <EditNotes v-if="isEditing" />
  <CreateUpdateNote :type="isShowing ? 'create' : 'edit'" />
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