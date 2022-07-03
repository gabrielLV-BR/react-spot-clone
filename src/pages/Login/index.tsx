import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";

import styles from "./style.module.scss";

export function Login() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate()

  function handleSubmit() {
    navigate("/home", { replace: true })
  }

  return (
    <main className={styles.main}>
      <header>
        <Logo className={styles.logo} />
      </header>
      <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" name="email" id="email" defaultValue="E-mail"/>
        <label htmlFor="senha">Senha</label>
        <input ref={passwordRef} type="password" name="password" id="password" defaultValue="Senha" />

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