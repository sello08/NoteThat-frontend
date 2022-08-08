import { createStore } from 'vuex'
 

export default  createStore({

  state: {
      notes: [],
      isShowing: false,
    },
  mutations: {
    //note is an an object(contains header and content)
    updateNotes(state, note ){
      state.notes.push(note);
    },
    deleteNotes(state, id ){
      state.notes = state.notes.filter((note) => note.id != id )
    },
      updateIsShowing(state){
        state.isShowing = !state.isShowing
      }     
    }
})

