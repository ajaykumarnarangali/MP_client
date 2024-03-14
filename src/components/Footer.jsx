import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-100 d-flex flex-column align-items-center mt-5 px-5' style={{background:'black'}}>
        <div className='row py-5'>
          <div className='col ms-4'>
            <h4>Media player 2024</h4>
            <p style={{textAlign:'justify'}}>In Informatics, dummy data is benign information that does not contain any useful data, but serves
              to reserve space where real data is nominally present.
              Dummy data can be used as a placeholder for both testing and operational purposes.</p>
          </div>
          <div className='col ms-5'>
            <h4>Links</h4>
            <Link to="/">Landing</Link><br />
            <Link to="/dash">Dashboard</Link><br />
            <Link to="/history">History</Link><br />
          </div>
          <div className='col'>
            <h4>References</h4>
            <a href="https://getbootstrap.com/" target='_blank'>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank'>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank'>React</a>
          </div>
        </div>
        <div className='text-center'>
          <p>&copy; Media Player 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer
