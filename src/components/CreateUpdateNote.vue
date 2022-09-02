<template>
  <div class="modal-overlay">
    <div class="modal">
      <a-button class="close" shape="circle" @click="closeModal" type="link">
        <template #icon> <CloseCircleFilled /></template>
      </a-button>
      <input v-model="title" placeholder="edit heading" />
      <textarea v-model="info" placeholder="add multiple lines"></textarea>
      <div>
        <a-button
          shape="circle"
          type="link"
          v-if="title"
          @click="mode == 'create' ? submitNote() : submitNote2(id)"
        >
          <template><EditFilled /></template>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { getNoteList } from "@/composables/axiosFunctions";
import { EditFilled } from "@ant-design/icons-vue";
import { CloseCircleFilled } from "@ant-design/icons-vue";

export default {
  name: " CreateUpdateNote ",
  props: ["mode"],
  components: {
    EditFilled,
    CloseCircleFilled,
  },
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
  z-index: 100;
}
.modal {
  text-align: center;
  background-color: rgb(246, 246, 246);
  height: 600px;
  width: 450px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 5px;
}
.close {
  display: flex;
  margin-left: 420px;
  margin-top: -50px;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
input {
  width: 85%;
  height: 30px;
  border: none;
  border-radius: 4px;
  padding: 16px 8px;
}
textarea {
  margin-top: 20px;
  width: 85%;
  height: 420px;
  border: none;
  border-radius: 4px;
  padding: 16px 8px;
}
</style>