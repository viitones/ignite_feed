
import styles from "./app.module.css"

// import { Header } from "./components/Header/index.jsx";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

export function App() {

  return (
    <div >
      {/* <Header /> */}

      <div className="wrapper">
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
              <Post />
              <Post />
          </main>
        </div>
      </div>
    </div>
  )
}