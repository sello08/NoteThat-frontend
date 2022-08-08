<template>
  <div class="modal-overlay">
    <div class="modal">
      <input v-model="message" placeholder="edit heading" />
      <div>
        <button v-if="message" @click="submitNote">Submit Note</button>
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
  

  setup(){
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const message = ref('')
    const notes = computed(() => store.state.notes);

    function updateNotes() {
      store.commit("updateNotes");
    }
   
    function closeModal() {
      store.commit("updateIsShowing");
    }

    function submitNote() {
      console.log(message.value);
    }

    

   

    

    

   
    return{ closeModal, isShowing, message, notes, updateNotes, submitNote }
  }
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
  border-radius: 5px;
  margin-top: 470px;
  
  
}
input{
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 5px;
}
</style>