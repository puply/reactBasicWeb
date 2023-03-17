import React from 'react'
import "./hero.scss"
import godleft from "../../assets/god.jpg"
import godright from "../../assets/god2.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='heroTitle'>
          <h1>FORGOTTEN <span className='titleSpan'>EXODUS</span></h1>
        </div>
        <div className="heroBody">
          <div className="heroBodyLeft">
            <h1 className='bodyLeftTitle'>HISTORY <span className='titleSpan'>ARCHIVER</span></h1>
            <div className="bodyLeftMiddle">
              <img src={godleft} alt="god.png" />
              <div className='middleDes'>
                <h3>Most <span className='desctSpan'>popular</span><br/>
                 collection of this <span className='desctSpan'>month</span></h3>
                <h3>Dustries sculpture</h3>
                <h3>Valuation: 1.4m</h3>
              </div>
            </div>
              <hr/>
            <div className="bodyLeftFooter">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam nisi consequuntur dolorem et mollitia, deserunt odio esse quos debitis recusandae sapiente voluptas perferendis provident nobis suscipit fugit voluptate similique!
                Itaque, nisi aliquam culpa numquam sequi dolore nihil modi. Aliquam quo eum, eveniet voluptatibus ab nam sapiente ad excepturi in reprehenderit quia ipsa similique cupiditate ratione laboriosam veniam quidem iusto!</p>
            </div>
          </div>
          <div className="heroBodyRight">
           
             <img src={godright} alt="god.png" /> 
            <div className="rightdesc">
              <h3>Jews march 1968</h3>
              <h3>suri july 1943</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
