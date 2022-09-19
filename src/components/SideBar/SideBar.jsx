import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import { getCategories } from '../../api'

export default function SideBar() {
    const [categories, setCategories] = useState([])
    useEffect(() =>{
        getCategories().then((data) => setCategories(data))
    },[])
  return (
    <section>
        <h1>nws lab</h1>
        <nav>
            <ul>
          {categories.map((category) =>{
            return <li>{category.name}</li>
          })}
            </ul>
        </nav>
        <button>Load more</button>
    </section>
  )
}
