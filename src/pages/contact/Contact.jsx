import React from 'react'
import SendContact from '../../components/contactSend/SendContact'
import ContactHead from '../../components/cotactHead/ContactHead'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
      <ContactHead/>
      <SendContact/>
    </div>
  )
}

export default Contact
