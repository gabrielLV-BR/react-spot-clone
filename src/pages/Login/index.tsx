import React, { useState } from "react"
import { ReactDOM } from "react"
import { useNavigate } from "react-router-dom";

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSubmit() {
    alert("Thanks!");
    navigate("/home", { replace: true })
  }

  return (
    <form action="POST" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <label htmlFor="senha">Senha</label>
      <input type="password" name="password" id="password" value={password} 
        onChange={e => setPassword(e.target.value)}/>
      <input type="submit" value="Enviar" />
    </form>
  )
}