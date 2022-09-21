import { createStore } from 'vuex'
 

export default  createStore({

  state: {
      notes: [],
      deletedNotes: [],
      selectedNote:{
        id:'',
        header:'',
        content:''
      },
      isShowing: false,
      isEditing: '',
      activeUser: '',
      isTrashed: false,
      isSketched: false,
    },
  mutations: {
    setNotes(state, notes ){
      state.notes = notes;      
    },
    setDeletedNotes( state, notes ){
      state.deletedNotes = notes;      
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
      state.isTrashed = false
      
    },
    updateEditing(state){
      state.isEditing = true
    },
    updateEditing2(state){
      state.isEditing = false
    },
    updateActiveUser(state, user){
      state.activeUser = user
    },
    updateIsTrashedClicked(state){
      state.isTrashed = !state.isTrashed
      state.isShowing = false
    },
    updateIsSketched(state){
      state.isSketched = !state.isSketched
    }
    
    }
})

