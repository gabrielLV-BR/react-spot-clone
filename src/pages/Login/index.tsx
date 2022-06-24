import React, { useState } from "react"
import { ReactDOM } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from "./style.module.scss";

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSubmit() {
    navigate("/home", { replace: true })
  }

  return (
    <main className={styles.main}>
      <Header/>

      <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="senha">Senha</label>
        <input type="password" name="password" id="password" value={password} 
          onChange={e => setPassword(e.target.value)}/>

        <Link to="/home">Esqueceu sua senha?</Link>
        <span className={styles.row}>
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Lembrar senha?</label>
          </div>
          <Button>Enviar</Button>
        </span>
      </form>

      <Footer/>
    </main>
  )
}