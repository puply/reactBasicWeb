import React, { useEffect, useState } from 'react'
import "./footer.scss"
import { foott,desin,realcompany } from '../../data/footerData'
import {GrInstagram,GrTwitter,GrLinkedin} from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Footer = () => {

  const [footList, setFootList] = useState([]);
  const [listDesing, setListDesing] = useState([]);
  const [listCompany, setListCompany] = useState([]);

  useEffect(() => {
    setFootList(foott())
  }, [])
  useEffect(() => {
    setListDesing(desin())
  }, [])
  useEffect(() => {
    setListCompany(realcompany())
  }, [])

  return (
    <footer className='footer'>
      <div className='container'>
      <div className='aboutFooter'>
      <div className='Footerdescription'>
        <h1>Archiv</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ullam optio sint blanditiis, necessitatibus suscipit reprehenderit magni distinctio perferendis voluptatem laborum nisi eligendi aliquid dolore iure dolor. Iusto, corrupti eaque?</p>
      </div>
        <div className='footerColm'>
          <h3 className='footerTitle'>About</h3>
          <ul>
            {footList.map((ft) =>
              <li key={ft.id}>
                <Link to={ft.to} className='linkFooter'>{ft.title}</Link>
              </li>
            )}
          </ul>
        </div>
        <div className='footerColm'>
          <h3 className='footerTitle'>Hire designers</h3>
          <ul>
            {listDesing.map((ds) =>
              <li key={ds.id}>
                <Link to={ds.to} className='linkFooter'>{ds.title}</Link>
              </li>
            )}
          </ul>
        </div>
        <div className='footerColm'>
          <h3 className='footerTitle'>Company</h3>
          <ul>
            {listCompany.map((c) =>
              <li key={c.id}>
                <Link to={c.to} className='linkFooter'>{c.title}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <hr/>
      <div className='footerSocial'>
      <p className='footerRights'>© 2023 Archiv. All rights reserved.</p>
      <div className='socialIcons'>
        <Link to="/" className='socialIcon'><GrInstagram/></Link>
        <Link to="/" className='socialIcon'><GrTwitter/></Link>
        <Link to="/" className='socialIcon'><GrLinkedin/></Link>
       </div>  
      </div>
      </div>
    </footer>

  )
}

export default Footer
