<template>
  <div class="menu-main" v-if="sketchNote">
    <button @click="submitSketchNote" class="menu-btn">Create a Note</button>
    <br />
    <button @click="clear" class="menu-btn">Clear</button>
  </div>
</template>

<script>
import { getNoteList } from "@/composables/axiosFunctions";
import { useStore } from "vuex";
import { computed } from "vue";
import axios from "axios";

export default {
  setup() {
    const store = useStore();
    const sketchNote = computed(() => store.state.sketchNote);

    var token = localStorage.getItem("token");

    function clear() {}

    function submitSketchNote() {
      console.log("sello:", sketchNote.value);

      axios
        .post(
          "http://localhost:3000/note",
          {
            header: "SketchBook",
            content: sketchNote.value,
          },
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

      store.commit("updateIsSketched2");
    }
    return { submitSketchNote, sketchNote, clear };
  },
};
</script>

<style>
.menu-main {
  height: 100px;
  width: 170px;
  margin-left: -193px;
  margin-top: 70px;
  background-color: white;
  text-align: left;
  padding: 15px;
  box-shadow: 0 0 10px 0px rgb(126, 125, 125);
}
.menu-btn {
  margin-top: 5px;
  background: none;
  border: none;
  font-weight: 900;
  cursor: pointer;
}
button:hover {
  background-color: rgb(203, 201, 201, 0.3);
}
</style>