
import styles from "./app.module.css"

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/viitones.png',
      name: 'Victor Hugo',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-07-16')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rocketseat-education.png',
      name: 'RocketSeat',
      role: 'Education @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date()
  },
]

export function App() {

  return (
    <div >
      <Header />

      <div className="wrapper">
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
              {posts.map(post => {
                return (
                  <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })}
          </main>
        </div>
      </div>
    </div>
  )
}