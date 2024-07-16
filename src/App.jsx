import { Header } from "./components/header";

import styles from "./app.module.css"

export function App() {

  return (
    <div >
      <Header />

      <div className="wrapper">
        <div className={styles.wrapper}>
          <aside>
            sidebar
          </aside>
          <main>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem placeat quis sequi perspiciatis? Ipsa ab fuga esse illo placeat totam nisi, cupiditate optio iste quia, dicta odio sit blanditiis deserunt.</p>
              <br /> 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem placeat quis sequi perspiciatis? Ipsa ab fuga esse illo placeat totam nisi, cupiditate optio iste quia, dicta odio sit blanditiis deserunt.</p>
          </main>
        </div>
      </div>
    </div>
  )
}