import axios from 'axios'

async function getNoteList() {
  try {
   const data = await axios({
      method: 'get',
      url: 'http://localhost:3000/get-notes'
    })
    return data.data;
  }
  catch(err){
    console.log(err.message)
    error.value = err.message
  }
}   



export { getNoteList }
