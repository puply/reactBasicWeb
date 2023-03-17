import React from 'react'
import "./resourcesHead.scss"
import {AiOutlineSearch} from "react-icons/ai"

const resourcesHead = () => {
   
      
  return (
    <div className='resourcesHeadd'>
    <div className="container">
      <div className='resourcesHead'>
      <h1>Our  <span className='resourcesspan'>Resources</span> for<br/> spreading <span className='resourcesspan'>mastery</span></h1>
      <div className="resourcesHead-right">
      <button><AiOutlineSearch className='searchIcon'/> Discover All</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsam! Officiis ex commodi eius corporis minus
           asperiores excepturi. Vitae, ipsa necessitatibus? </p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default resourcesHead
