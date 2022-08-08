<template>
  <li class="m-header" v-for="note in notes" :key="note.id">
    <span class="t-header">{{ note.header.substring(0, 35) + "..." }}</span>
    <span class="edit">A</span>
    <span @click="deleteNote(note.id)" class="more">.</span>
    <span class="more">...</span>
  </li>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
export default {
  name: "TemporaryNote",
  components: {},
  setup() {
    const store = useStore();
    const notes = computed(() => store.state.notes);
    const header = ref("");

    function deleteNote(id) {
      store.commit("deleteNotes", id);
    }

    return { notes, header, deleteNote };
  },
};
</script>

<style>
.m-header {
  display: flex;
}
.t-header {
  text-align: center;
  background-color: white;
  line-height: 30px;
  width: 300px;
  height: 30px;
  margin: 10px;
  border-radius: 15px;
  margin-left: 50px;
}
.edit {
  text-align: center;
  background-color: white;
  width: 30px;
  line-height: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 15px;
  margin-left: 1px;
}
.more {
  text-align: center;
  background-color: white;
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 15px;
  margin-left: 1px;
}
</style>