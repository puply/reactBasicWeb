import React from 'react'
import TeamCard from "../../components/teamCard/TeamCard"
import "./Team.scss"

const Team = () => {
  return (
    <div className='team'>
      <div className="container">
      <div className="teamCards">
        <TeamCard/>
        </div>
      </div>
    </div>
  )
}

export default Team
