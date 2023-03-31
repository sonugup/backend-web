import React,{useState} from 'react'

const CreateNote = () => {
    const [title, setTitle] =useState("")
    const [note, setNote] =useState("")
    const [category, setCategory] =useState("")
   
    const addClick = () => {
      const payload={
        title,
        note,
        category
      }
      console.log(payload)
      fetch("http://localhost:5040/notes/create", {
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          "Content-type":"application/json",
          "Authorization":localStorage.getItem("token")
        }
      }).then(res => res.json())
      .then(res =>{
  
         console.log(res)
         
        })
      .catch(err => console.log(err))
  
    }

    
    return (
      <div>
        Regiseter
        <input type="text" name="" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="" value={note} onChange={(e) => setNote(e.target.value)} />
        <input type="text" name="" value={category} onChange={(e) => setCategory(e.target.value)} />

         <button type="submit"  onClick={addClick}>Add Notes</button>
      </div>
    )
}

export default CreateNote
