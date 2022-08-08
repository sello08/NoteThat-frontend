<template>
  <div class="modal-overlay">
    <div class="modal">
      <input v-model="title" placeholder="edit heading" />
      <textarea v-model="info" placeholder="add multiple lines"></textarea>
      <div>
        <button v-if="title" @click="addNote">Submit Note</button>
      </div>
    </div>
    <div class="close" @click="closeModal">X</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: " ObjectModal ",

  setup() {
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const notes = computed(() => store.state.notes);
    const title = ref("");
    const info = ref("");

    //update isShowing value for close the modal
    function closeModal() {
      store.commit("updateIsShowing");
    }

    function addNote() {
      store.commit("updateNotes", {
        id: Math.random(),
        header: title.value,
        content: info.value,
      });
      store.commit("updateIsShowing");
    }

    return {
      closeModal,
      addNote,
      isShowing,
      notes,
      title,
      info,
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
  background-color: rgb(224, 218, 218);
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