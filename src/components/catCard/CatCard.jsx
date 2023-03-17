import React from 'react'
import { Link } from 'react-router-dom'
import "./catCard.scss"



const CatCard = ({ item }) => {
  return (
    <Link to="/">
    <div className="catCard">
      <img src={item.img} alt="" />
      <span className="desc">{item.desc}</span>
      <span className="title">{item.title}</span>
    </div>
  </Link>
  )
}

export default CatCard
