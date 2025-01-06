import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4 '>
                {/* Introduction */}
                <div style={{ width: '400px' }} className='intro'>
          <h5 className='text-xl font-bold'><i class="fa-solid fa-truck-fast me-2"></i>
            E Cart</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>

        </div>
        {/* Links */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing page</Link>
          <Link to={'home'} style={{ textDecoration: 'none', color: 'white' }}>Home page</Link>
          <Link to={'history'} style={{ textDecoration: 'none', color: 'white' }}>Watch history</Link>

        </div>
        {/* Guides */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guides</h5>
          <a href="https://getbootstrap.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>Bootstrap</a>
          <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React bootstrap</a>
          <a href="https://www.npmjs.com/package/react-router-dom" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React Router</a>
        </div>
        {/* Contact us */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Contact us</h5>
          <div className='flex'>
            <input type="text" placeholder='Enter your email here...' className='form-control me-2' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='flex justify-between mt-3'>
            <a href="https://www.instagram.com/accounts/login/?hl=en" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/home?originalSubdomain=in" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/home?originalSubdomain=in" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-solid fa-phone"></i></a>


          </div>

        </div>


      </div>

    </div>
  )
}

export default Footer