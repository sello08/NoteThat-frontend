<template>
  <div class="top-side">{{ currentTime }}</div>
  <div class="aaa">
    <div class="list">
      <div class="cards" v-for="note in notes" :key="note.index">
        <div class="card">
          <div class="card-header">
            {{ note.header.substring(0, 17) + "..." }}
          </div>
          <div class="btns">
            <span @click="editNote(note.id)" class="more">A</span>
            <span @click="deleteNote(note.id)" class="more">.</span>
            <span class="more">...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { getNoteList } from "@/composables/axiosFunctions";
import axios from "axios";

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

    getNoteList().then((notes) => {
      store.commit("setNotes", notes);
    });

    function deleteNote(id) {
      axios.delete("http://localhost:3000/note/" + id).then(() => {
        getNoteList().then((notes) => {
          store.commit("setNotes", notes);
        });
      });
    }
    function editNote(id) {
      store.commit("updateNotes", id);
    }
    var currentTime = new Date().toLocaleDateString();

    return {
      notes,
      header,
      deleteNote,
      isShowing,
      editNote,
      editNotes,
      isEditing,
      currentTime,
    };
  },
};
</script>

<style>
.btns {
  display: flex;
  margin-top: 75px;
  justify-content: center;
}
.card {
  width: 150px;
}
.cards {
  background-color: white;
  line-height: 30px;
  margin: 10px 20px;
  border-radius: 15px;
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
  max-width: 1300px;
  padding-top: 15px;
  display: flex;
}
.aaa {
  margin-top: 25px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
  background-color: rgb(242, 241, 241);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border-radius: 15px;
  height: 400px;
}
.top-side {
  margin-left: 10px;
  height: 75px;
  color: rgb(0, 0, 0);
  background-color: rgb(242, 241, 241);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border-radius: 15px;
}
.card-header {
  background-color: rgb(68, 68, 68);
  border-top-right-radius: 15px;
  border-top-left-radius: 5px;
  color: white;
}
.aaa *::-webkit-scrollbar {
  width: 4px;
  height: 5px;
  padding: 10px;
}

.aaa *::-webkit-scrollbar-track {
  background: rgb(206, 199, 200);
}

.aaa *::-webkit-scrollbar-thumb {
  background-color: #9e9e9e;
  border-radius: 4px;
}
</style>