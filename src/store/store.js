import { createStore } from 'vuex'
 

export default  createStore({

  state: {
      notes: [],
    },
  mutations: {
      updateNotes(state, payload){
        state.notes.push(payload);
      }      
    }
})

