import React,{useState,useEffect } from 'react'
import "./testcard.scss"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { getCardData } from '../../data/cardData'
const CardTest = () => {

    const [cardItem, setCardItem] = useState([]);
    useEffect(() => {
      setCardItem(getCardData())
  }, [])

    return (
       
           <div className='cards'>
           {cardItem.map((item)=> 
           <Link className='card'>
           <h1>{item.name1}<br /> {item.name2}</h1>
           <p>{item.description}</p>
           <p>{item.date}</p>
           <button>learn more <AiOutlineArrowRight className='iconCard'/></button>
           </Link>
           )}
         </div>
    )
}

export default CardTest
