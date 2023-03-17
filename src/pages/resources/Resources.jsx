import React from 'react'
import "./resources.scss"
import ResourcesHead from '../../components/resourcesHead/ResourcesHead'
import Slide from '../../components/slide/Slide'
import { cards } from '../../data/recards'
import CatCard from '../../components/catCard/CatCard'

const Resources = () => {
  return (
    <div className='resources'>
      <div className='container'>
      <ResourcesHead/>
      <Slide  slidesToShow={1} arrowsScroll={1}  >
        {cards.map((item) => (
          <CatCard key={item.id} item={item} />
        ))}
      </Slide>
      </div>
    </div>
  )
}

export default Resources
