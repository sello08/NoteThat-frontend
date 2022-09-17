<template>
  <div class="main-trash">
    <div class="modal-trash">
      <h1 id="header-dlt">Trash Bin</h1>

      <hr />

      <div class="list-dlt">
        <div class="cards-dlt" v-for="note in notes" :key="note.index">
          <div class="card-dlt">
            <div class="card-header-dlt">
              {{
                note.header.length > 12
                  ? note.header.substring(0, 12) + "..."
                  : note.header
              }}
            </div>
            <div class="card-content-dlt">
              {{
                note.content.length > 100
                  ? note.content.substring(0, 100) + "..."
                  : note.content
              }}
            </div>
          </div>
          <div class="btns-dlt">
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
  </div>
</template>

<script>
import { getDeletedNoteList } from "@/composables/axiosFunctions";
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  name: "Trash",
  components: {},

  setup() {
    const store = useStore();
    const notes = computed(() => store.state.deletedNotes);

    getDeletedNoteList().then((notes) => {
      store.commit("setDeletedNotes", notes);
    });

    return { notes };
  },
};
</script>

<style>
.main-trash {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #00000075;
  z-index: 100;
}
.modal-trash {
  text-align: center;
  background-color: rgb(217, 211, 212);
  height: 820px;
  width: 400px;
  margin-left: -608px;
  padding: 50px;
}
#header-dlt {
  margin-left: -230px;
}
.dlt-notes {
  background-color: red;
}
.card-dlt {
  width: 350px;
  height: 100px;
}
.cards-dlt {
  background-color: white;
  line-height: 30px;
  margin: 30px 20px;
  border-radius: 15px;
}
.more-dlt {
  margin: 8px;
}
.list-dlt {
  padding-top: 15px;
  margin-left: -30px;
}
.aaa-dlt {
  margin-top: 25px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
  background-color: rgb(242, 241, 241);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border-radius: 15px;
  height: 400px;
}
.top-side-dlt {
  margin-left: 10px;
  height: 75px;
  color: rgb(0, 0, 0);
  background-color: rgb(242, 241, 241);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border-radius: 15px;
}
.card-content-dlt {
  padding: 10px;
  max-width: 290px;
}
.card-header-dlt {
  width: 290px;
  background-color: rgb(68, 68, 68);
  border-top-right-radius: 15px;
  border-top-left-radius: 5px;
  color: white;
  padding: 1px;
}
.aaa-dlt *::-webkit-scrollbar {
  width: 4px;
  height: 5px;
  padding: 10px;
}

.aaa-dlt *::-webkit-scrollbar-track {
  background: rgb(206, 199, 200);
}

.aaa-dlt *::-webkit-scrollbar-thumb {
  background-color: #9e9e9e;
  border-radius: 4px;
}
</style>