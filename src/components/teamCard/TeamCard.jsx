import React, { useState, useEffect } from 'react'
import "./teamCard.scss"
import { getTeamData } from '../../data/teamData'



const TeamCard = () => {


    const [teamCard, setTeamCard] = useState([]);
    useEffect(() => {
        setTeamCard(getTeamData())
    }, [])


    return (
        <>
            {teamCard.map((item) =>
                <div className='Card'>
                        <img src={item.img} alt="" />
                    <div className="description">
                        <h2>{item.name}</h2>
                        <p>{item.work}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default TeamCard



