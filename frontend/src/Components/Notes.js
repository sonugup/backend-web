import React, {useState, useEffect} from 'react'

const Notes = () => {
    const [notes, setNotes]=useState("")
    
      useEffect(() => {
        fetch("http://localhost:5040/notes", {
         headers:{
           "Authorization":localStorage.getItem("token")
        }
      }).then(res => res.json())
      .then(res => {
        console.log(res);
        setNotes(res)
      }).catch(err => console.log(err))
      }, [])
      
      const deletedNote = (noteId) => {
        fetch(`http://localhost:5040/notes/delete/${noteId}`, {
            method : "DELETE",
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
    }
    return (
      <div>
        <h1>All Notes Here</h1>
        {
            notes?notes.map((ele) => {
                return (
                    <>
                    <h2> {ele.title} </h2>
                    <h2> {ele.note} </h2>
                    <h2> {ele.category} </h2>
                    <button onClick={() => deletedNote(ele._id)} >Delete</button>
                    </>
                )
            }):<h1>No Notes</h1>
        }
       </div>
    )
}

export default Notes
