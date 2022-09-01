<template>
  <CreateUpdateNote
    v-if="isShowing"
    :mode="isEditing == true ? 'edit' : 'create'"
  />
</template>

<script>
import CreateUpdateNote from "./CreateUpdateNote.vue";
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";

export default {
  name: "AddNote",
  components: { CreateUpdateNote },

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