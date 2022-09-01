<template>
  <div class="modal-overlay">
    <div class="modal">
      <input v-model="title" placeholder="edit heading" />
      <textarea v-model="info" placeholder="add multiple lines"></textarea>
      <div>
        <button
          v-if="title"
          @click="mode == 'create' ? submitNote() : submitNote2(id)"
        >
          {{ mode }}
        </button>
      </div>
    </div>
    <div class="close" @click="closeModal">X</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { getNoteList } from "@/composables/axiosFunctions";

export default {
  name: " CreateUpdateNote ",
  props: ["mode"],
  setup(props) {
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const isEditing = computed(() => store.state.isEditing);
    const notes = computed(() => store.state.notes);
    const id = ref(store.state.selectedNote.id);
    if (props.mode == "edit") {
      var title = ref(store.state.selectedNote.header);
      var info = ref(store.state.selectedNote.content);
    } else {
      var title = ref("");
      var info = ref("");
    }
    //update isShowing value for close the modal
    function closeModal() {
      store.commit("updateIsShowing");
      console.log(props.mode);
    }
    function submitNote() {
      axios
        .post("http://localhost:3000/note", {
          header: title.value,
          content: info.value,
        })
        .then(() => {
          getNoteList().then((notes) => {
            store.commit("setNotes", notes);
          });
        });

      closeModal();
    }

    function submitNote2(id) {
      axios
        .put("http://localhost:3000/note/" + id, {
          header: title.value,
          content: info.value,
        })
        .then(() => {
          getNoteList().then((notes) => {
            store.commit("setNotes", notes);
          });
        });

      closeModal();
    }

    return {
      closeModal,
      submitNote,
      submitNote2,
      isShowing,
      isEditing,
      notes,
      title,
      info,
      id,
    };
  },
};
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  text-align: center;
  background-color: rgb(242, 240, 240);
  height: 500px;
  width: 400px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 5px;
}
.close {
  margin: 8% 0 0 1px;
  cursor: pointer;
  color: rgb(242, 240, 240));
}
.close-img {
  width: 25px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

button {
  display: center;
  background-color: #000000;
  width: 100px;
  height: 30px;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 15px;
  margin-top: 25px;
}
input {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 15px;
}
textarea {
  margin: 20px;
  width: 300px;
  height: 400px;
  border: none;
  border-radius: 15px;
}
</style>