import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5'>
          <div className="col d-flex flex-column justify-content-center px-5">
            <h1>Media player 2024</h1>
            <p>Explore media player for youtube video upload and management.you can add and manage videos, categories and even </p>
            <div>
              <Link to='/dash' className='btn btn-success'>
                Explore <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            </div>
          </div>
          <div className="col">
            <img src="/images/banner.png" className='img-fluid' alt="" />
          </div>
        </div>
      </div>
      {/* card section */}
      <div className='mt-2 p-5'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex mt-3 justify-content-between px-5'>

          <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" style={{height:'300px'}} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Upload videos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/1028589/screenshots/3155170/jaaqobvideoplay-2dribbble_3.gif" style={{height:'300px'}} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Watch videos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src="https://static.wixstatic.com/media/4575f6_ac931233a0c44fabab10d7e699ae08d5~mv2.gif" style={{height:'300px'}} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">View history</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

        </div>
      </div>

      <div className='mt-5 d-flex justify-content-center align-items-center px-5'>
         <div className='mx-5'>
          <h2>Simple, Fast & Secured</h2>
          <p style={{textAlign:'justify'}}>Media player 2024 is a platform for simple and faster youtube video upload and management.you can get video watch history too where you
            get a simple video player interface with the app itself....
          </p>
         </div>
         <div className='mx-5'>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/NJcw8voO-M4?si=GqFzmSQw4Pjqk8R1" title="YouTube video player" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
      </div>
    </>
  )
}

export default Landing
