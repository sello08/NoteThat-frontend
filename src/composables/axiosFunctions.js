import axios from 'axios'

async function getNoteList() {
  try {
    var token = localStorage.getItem("token");

     const data = await axios({
      method: 'get',
      url: 'http://localhost:3000/get-notes',
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return data.data;
  }
  catch(err){
    console.log(err.message)
    error.value = err.message
  }
}   



export { getNoteList }
