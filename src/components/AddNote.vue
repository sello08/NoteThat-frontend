<template>
  <button @click="updateNotes(note)">Add</button>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "@vue/reactivity";

export default {
  setup() {
    const store = useStore();
    const note = ref({});
    const notes = computed(() => store.state.notes);

    function updateNotes(p) {
      store.commit("updateNotes");
      console.log("notes.value : ", notes.value);
    }

    return { notes, updateNotes, note };
  },
};
</script>

<style>
</style>