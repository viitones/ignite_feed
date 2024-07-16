
import styles from "./app.module.css"

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

export function App() {

  return (
    <div >
      <Header />

      <div className="wrapper">
        <div className={styles.wrapper}>
          <Sidebar />
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