<template>
  <div class="aaa">
    <div class="list">
      <div class="cards" v-for="note in notes" :key="note.index">
        <div class="card">
          <div class="card-header">
            {{
              note.header.length > 12
                ? note.header.substring(0, 12) + "..."
                : note.header
            }}
          </div>
          <div class="card-content">
            {{
              note.content.length > 240
                ? note.content.substring(0, 240) + "..."
                : note.content
            }}
          </div>
        </div>
        <div class="btns">
          <a-button
            @click="editNote(note.id)"
            type="link"
            shape="circle"
            class="more"
          >
            <template #icon><EditFilled /></template>
          </a-button>
          <a-button
            @click="deleteNote(note.id)"
            type="link"
            shape="circle"
            class="more"
          >
            <template #icon><DeleteFilled /></template>
          </a-button>
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
import { EditFilled } from "@ant-design/icons-vue";
import { DeleteFilled } from "@ant-design/icons-vue";

export default {
  name: "CardList",
  components: {
    EditFilled,
    DeleteFilled,
  },

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

    var token = localStorage.getItem("token");

    function deleteNote(id) {
      axios
        .delete(
          "http://localhost:3000/note/" + id,

          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then(() => {
          getNoteList().then((notes) => {
            store.commit("setNotes", notes);
          });
        });
    }
    function editNote(id) {
      store.commit("updateNotes", id);
      store.commit("updateEditing");
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
.card {
  width: 250px;
  height: 350px;
}
.cards {
  background-color: white;
  line-height: 30px;
  margin: 10px 20px;
  border-radius: 15px;
}
.more {
  margin: 8px;
}
.list {
  max-width: 1300px;
  padding-top: 15px;
  display: flex;
  overflow: scroll;
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
.card-content {
  padding: 20px;
}
.card-header {
  background-color: rgb(68, 68, 68);
  border-top-right-radius: 15px;
  border-top-left-radius: 5px;
  color: white;
  padding: 1px;
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