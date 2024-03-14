import React,{useState} from 'react'
import { Col,Row } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {
  const [addStatus,setAddstatus]=useState({});
  return (
   <>
     <div className='mt-4 p-5'>
      <h3 className='text-center'>Dashboard</h3>
      <Row className='p-5'>
        <Col sm='1' md='2'>
          <Addvideos setAddstatus={setAddstatus}/>
        </Col>
        <Col sm='4' md='7'>
          <Videos addStatus={addStatus}/>
        </Col>
        <Col sm='2' md='3'>
          <Categories/>
        </Col>
      </Row>
     </div>
     <ToastContainer/>
   </>
  )
}

export default Dashboard
