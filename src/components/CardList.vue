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
              note.content.length > 150
                ? note.content.substring(0, 150) + "..."
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
import { watch } from "@vue/runtime-core";

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
    watch(
      () => notes.value,
      () => {
        console.log("kfefbfhdfh");
      }
    );
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
  width: 200px;
  height: 240px;
}
.cards {
  background-color: white;
  line-height: 30px;
  margin: -7px 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px 0px rgb(126, 125, 125);
}
.list {
  max-width: 800px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}
.aaa {
  margin-top: 25px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
  background-color: white;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border-radius: 15px;
  height: 303px;
  width: 800px;
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
.btns {
  margin: 8px;
}
.aaa *::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  padding: 0px;
}

.aaa *::-webkit-scrollbar-track {
  background: rgb(206, 199, 200);
}

.aaa *::-webkit-scrollbar-thumb {
  background-color: #9e9e9e;
  border-radius: 4px;
}
</style>