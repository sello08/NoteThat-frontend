import { createStore } from 'vuex'
 

export default  createStore({

  state: {
      notes: [{id: "1", header: "test header", content: "test content"}],
      selectedNote:{
        id:'',
        header:'',
        content:''
      },
      isShowing: false,
      isEditing: false,
    },
  mutations: {
    //note is an an object(contains header and content)
    addNotes(state, note ){
      state.notes.push(note);      
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
    deleteNotes(state, id ){
      state.notes = state.notes.filter((note) => note.id != id )
    },
    updateNotes(state, id){
      const foundNote = state.notes.find((note) => note.id == id )
      state.selectedNote = foundNote; 
      state.isEditing = !state.isEditing;
    },
    updateIsShowing(state){
      state.isShowing = !state.isShowing
    },
    updateIsEditing(state){
      state.isEditing = !state.isEditing
    }
    
    }
})

