import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./styles.module.css"

export function Comment() {

return (
  <section className={styles.comment}>
    <img src={"https://github.com/viitones.png"} alt="" />

    <div>
      <div>
        <header>
          <div>
            <strong>Victor Hugo</strong>

            <time title="16 de julho ás 13:40" dateTime="2024-07-16">Cerca de 1h atrás</time>
          </div>

            <button title="deletar">
              <Trash size={24} />
            </button>
        </header>

        <p>Muito bom, parabéns!!!</p>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  </section>
)
}