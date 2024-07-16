import styles from "./styles.module.css"

import { Comment } from "./Comment"


export function Post() {

return (
  <article className={styles.post}>
    <header>
      <div>
        <img src={"https://github.com/viitones.png"}/>
        <div>
          <strong>Victor Hugo</strong>
          <span>Web Developer</span>
        </div>
      </div>
        <time title="16 de julho ás 13:40" dateTime="2024-07-16">Publicado há 1h</time>
    </header>

    <div>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p><a href="#">jane.design/doctorcare</a></p>

      <p>
        <a href="#">#novoprojeto</a>{' '}
        <a href="#">#nlw</a>{' '}
        <a href="#">#rocketseat</a>
      </p>
    </div>

    <form>
      <strong>Deixe seu feedback</strong>

      <textarea placeholder="Deixe seu comentário"/>

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>

    <div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  </article>
)
}