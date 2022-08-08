import { createStore } from 'vuex'
 

export default  createStore({

  state: {
      note:{
        header: '',
        content: '',
      },
      notes: [],
      isShowing: false,
    },
  mutations: {
      updateNotes(state, payload){
        state.notes.push(payload);
      },
      updateIsShowing(state){
        state.isShowing = !state.isShowing
      }     
    }
})

