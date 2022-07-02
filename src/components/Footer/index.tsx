import { Logo } from "../Logo";
import styles from "./style.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.links}>
        <section>
          <Logo />
        </section>
        <section>
          <h2>Empresa</h2>
          <a href="#">Sobre</a>
          <a href="#">Empregos</a>
          <a href="#">For the Record</a>
        </section>
        <section>
          <h2>Comunidades</h2>
          <a href="#">Artistas</a>
          <a href="#">Desenvolvedores</a>
          <a href="#">Publicidade</a>
          <a href="#">Investidores</a>
          <a href="#">Fornecedores</a>
        </section>
        <section>
          <h2>Links úteis</h2>
          <a href="#">Suporte</a>
          <a href="#">Player da Web</a>
          <a href="#">Aplicativo móvel</a>
        </section>
        <section className={styles.social}>
          <a href="#">Tw</a>
          <a href="#">Fc</a>
          <a href="#">Gh</a>
        </section>
      </section>
      <section className={styles.etc}>
        <span className={styles.left}>
          <a href="#">Legal</a>
          <a href="#">Centro de Privacidade</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Cookies</a>
          <a href="#">Sobre anúncios</a>
        </span>
        <span className={styles.right}>
          <a href="#">@ Brasil</a>
          <span>2022 Spotclone GH</span>
        </span>
      </section>
    </footer>
  );
}
