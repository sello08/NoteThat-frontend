<template>
  <div class="modal-overlay">
    <div class="modal">
      <input v-model="title" placeholder="edit heading" />
      <textarea v-model="info" placeholder="add multiple lines"></textarea>
      <div>
        <button v-if="title" @click="submitNote2">Edit Note</button>
      </div>
    </div>
    <div class="close" @click="closeEditModal">X</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: " EditNotes ",

  setup() {
    const store = useStore();
    const isEditing = computed(() => store.state.isEditing);
    const selectedNote = computed(() => store.state.selectedNote);
    const title = ref(store.state.selectedNote.header);
    const info = ref(store.state.selectedNote.content);
    const id = ref(store.state.selectedNote.id);

    //update isEditing value for close the modal
    function closeEditModal() {
      store.commit("updateIsEditing");
    }
    function submitNote2() {
      store.commit("editNotes", {
        id: id.value,
        header: title.value,
        content: info.value,
      });
      store.commit("updateIsEditing");
    }

    return {
      closeEditModal,
      title,
      info,
      isEditing,
      selectedNote,
      submitNote2,
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
  color: rgb(242, 214, 55);
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