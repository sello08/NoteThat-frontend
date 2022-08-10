<template>
  <div class="aaa">
    <div class="list">
      <li class="m-header" v-for="note in notes" :key="note.index">
        <span class="t-header">{{ note.header.substring(0, 35) + "..." }}</span>
        <span @click="editNote(note.id)" class="edit">A</span>
        <span @click="deleteNote(note.id)" class="more">.</span>
        <span class="more">...</span>
      </li>
    </div>
  </div>
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
    const editNotes = computed(() => store.state.editNotes);
    const header = ref("");
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);

    function deleteNote(id) {
      store.commit("deleteNotes", id);
    }
    function editNote(id) {
      store.commit("updateNotes", id);
    }

    return {
      notes,
      header,
      deleteNote,
      isShowing,
      editNote,
      editNotes,
      isEditing,
    };
  },
};
</script>

<style>
.m-header {
  display: inline-grid;
}
.t-header {
  text-align: center;
  background-color: white;
  line-height: 30px;
  width: 180px;
  height: 150px;
  margin: 10px;
  border-radius: 15px;
  margin-left: 50px;
}
.edit {
  text-align: center;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 30px;
  line-height: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 15px;
  margin-left: 1px;
  cursor: pointer;
}
.more {
  text-align: center;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 15px;
  margin-left: 1px;
  cursor: pointer;
}
.list {
  max-height: 180px;
  max-width: 1300;
  overflow-y: scroll;
  overflow-x: scroll;
}
.aaa *::-webkit-scrollbar {
  width: 4px;
  height: 0px;
  padding: 10px;
}

.aaa *::-webkit-scrollbar-track {
  background: rgb(242, 240, 240);
}

.aaa *::-webkit-scrollbar-thumb {
  background-color: #000000;
  border-radius: 4px;
}
</style>