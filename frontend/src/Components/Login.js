import React, {useState} from 'react'

const Login = () => {
    const [email, setEmail] =useState("")
    const [pass, setPass] =useState("")
  
    const haindleClick = () => {
      const payload={
        email,
        pass
      }
      console.log(payload)
      fetch("http://localhost:5040/users/login", {
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          "Content-type":"application/json"
        }
      }).then(res => res.json())
      .then(res =>  {
        console.log(res)
        localStorage.setItem("token", res.token)
      })
      .catch(err => console.log(err))
  
    }
    return (
      <div>
        Regiseter
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type="submit"  onClick={haindleClick}>Login</button>
      </div>
    )
}

export default Login
