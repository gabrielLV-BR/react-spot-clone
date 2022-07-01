import styles from "./style.module.scss";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Home() {

  let balls : {x: number, y: number, r: number}[] = [];

  for(let i = 0; i < 4; i++) {
    const r = 150 + Math.random() * 300;
    const x = Math.random() * innerWidth - r / 2;
    const y = Math.random() * innerHeight - r / 2;

    balls = [...balls, {x,y,r}];
  }

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <h1>Escutar muda<br />tudo</h1>
        <p>Milhões de músicas e podcasts para baixar e escutar</p>
        <Button>Baixe o Spotify de graça</Button>
        {
          balls.map(ball => 
            <div 
              className={styles.ball} 
              style={{
                left: ball.x, 
                top: ball.y, 
                width: ball.r, 
                height: ball.r,
                opacity: (0.2 + Math.random()) * 0.7
              }}

            ></div>  
          )
        }
      </main>
      <Footer/>
    </>
  )
}