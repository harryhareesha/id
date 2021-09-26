import { useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'

export default function Guides() {
  const [data , setData] = useState()
  useEffect(() => {
    fetch('/.netlify/functions/supermario')
    .then(res => res.json())
    .then(data => {
     console.log(data);
      setData(data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div className={styles.guides}>
       <h2>Welcome to Gaming Vibes</h2>
      { data && <h1>name: {data.name} age: {data.age} job: {data.job} </h1>
      
      }
    </div>
  )
}
