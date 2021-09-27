import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../stores/authContext'
import styles from '../styles/Guides.module.css'

export default function Guides() {
  const { user, authReady } = useContext(AuthContext)
  console.log(`authReady=${authReady}`);
  if (user)   console.log(`token = ${user.token.access_token}`)
  const [blogs, setBlogs] = useState([])
  const [err, setErr] = useState(null)
  
  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
        .then(res => {
          // console.log(`fetch res text=${res.statusText} and res.ok=${res.ok} and body=${res.body}`);
          // if (!res.ok) throw Error(res.statusText)
          res.json()
        })
        .then(data => {
          console.log('data=', data);
          setBlogs(data)
          setErr(null)
        })
        .catch(error => {
          console.log(error.message)
          setErr(error.message)
          setBlogs(null)
        })

    }
  }, [user, authReady])
  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading ...</div>}
      <h2>Welcome to Gaming Vibes</h2>
      {/* { data && <h1>name: {data.name} age: {data.age} job: {data.job} </h1>    } */}
      {err && <h1 className={styles.Error}>{err}</h1>}
      {blogs && blogs.map(blog => (
        <div> <p>{blog[0].title} {blog[0].author}</p>  <p>{blog[0].body}</p> </div>
      )) }
    </div>
  )
}