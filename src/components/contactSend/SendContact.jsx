import React from 'react'
import "./sendcontact.scss"


const SendContact = () => {
  return (
    <div className='send'>
        <h2>Send us a Message</h2>
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter your email' />
        <input type="text" placeholder='Enter your business name' />
        <input type="number" placeholder='Enter your phone number' />
        <button>Sumbit</button>
    </div>
  )
}

export default SendContact
