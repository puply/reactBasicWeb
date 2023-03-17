import React from 'react'
import "./testimonies.scss"
import CardTest from '../../components/testCard/CardTest'
import {AiOutlineSearch} from "react-icons/ai"

const Testimonies = () => {
  return (
    <div className='testimonies'>
      <div className="container">
        <div className='testHead'>
        <h1>Know  <span className='testspan'>about</span> the<br/> greatest <span className='testspan'>sculpture</span></h1>
        <div className="testHead-right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsam! Officiis ex commodi eius corporis minus
             asperiores excepturi. Vitae, ipsa necessitatibus? </p>
             <button><AiOutlineSearch className='searchIcon'/> Discover All</button>
        </div>
        </div>
      <CardTest/>
      </div>
    </div>
  )
}

export default Testimonies
