import React, {useState} from 'react'

const Register = () => {

  const [name, setName] =useState("")
  const [email, setEmail] =useState("")
  const [pass, setPass] =useState("")
  const [num, setNum] =useState("")

  const haindleClick = () => {
    const payload={
      name,
      email,
      pass,
      num
    }
    console.log(payload)
    fetch("http://localhost:5040/users/sing", {
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "Content-type":"application/json"
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
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
      <input type="number" name="num" value={num} onChange={(e) => setNum(e.target.value)} />
      <button type="submit"  onClick={haindleClick}>Add Notes</button>
    </div>
  )
}

export default Register
