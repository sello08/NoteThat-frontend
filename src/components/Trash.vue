<template>
  <div class="main-trash">
    <div class="modal-trash">
      <h1 id="header">Trash Bin</h1>
      <div class="dlt-notes" v-for="note in notes" :key="note.id">
        {{ note.header }}
      </div>
      <hr />
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
  background-color: #00000025;
  z-index: 100;
}
.modal-trash {
  text-align: center;
  background-color: rgb(255, 255, 255);
  height: 820px;
  width: 400px;
  margin-left: -608px;
  padding: 50px;
}
#header {
  margin-left: -230px;
}
.dlt-notes {
  background-color: red;
}
</style>