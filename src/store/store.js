import { createStore } from 'vuex'
 

export default  createStore({

  state: {
      notes: [],
      selectedNote:{
        id:'',
        header:'',
        content:''
      },
      isShowing: false,
      isEditing: '',
    },
  mutations: {
    setNotes(state, notes ){
      state.notes = notes;      
    },
    editNotes(state, note){
      const tempNotes = state.notes;
      for (let i = 0; i < tempNotes.length; i++) {
        if (tempNotes[i].id === note.id) {
            tempNotes[i] = note;
        }
      }

      state.notes = tempNotes;
    },
    
    updateNotes(state, id){
      const foundNote = state.notes.find((note) => note.id == id )
      state.selectedNote = foundNote; 
      state.isShowing = !state.isShowing;
    },
    updateIsShowing(state){
      state.isShowing = !state.isShowing
    },
    updateEditing(state){
      state.isEditing = true
    },
    updateEditing2(state){
      state.isEditing = false
    }
    
    }
})

