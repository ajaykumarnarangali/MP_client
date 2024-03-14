import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import {uploadVideos} from '../services/allApi';
import { toast } from 'react-toastify';

function Addvideos({setAddstatus}) {
  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    caption:'',
    url:'',
    image:''
  })

  const getdata=(e)=>{
    const {name,value}=e.target;
    setVideo(prev=>{
      return {...prev,[name]:value}
    });
  }

  const handleupload=()=>{
    const {caption,url,image}=video;
    if(!caption || !url || !image)
    {
      toast.warning("Enter all fields");
    }else
    {
      uploadVideos(video).then((res)=>{
        setVideo({
          caption:'',
          url:'',
          image:''
        });
        setAddstatus(res.data);
        toast.success("value added successfully");
        setShow(false);
      }).catch((err)=>{
        toast.error(err)
      })
    }
  }
  return (
    <>
      <span className='btn' onClick={() => { setShow(true) }}>
        Add videos<i className="fa-solid fa-circle-plus fa-xl ms-2"></i>
      </span>
      <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Caption</Form.Label>
              <Form.Control type="text" name='caption' onChange={(e)=>{getdata(e)}} placeholder="Enter video caption" />
            </Form.Group>
            <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
              <Form.Label>Video URL</Form.Label>
              <Form.Control type="text" name='url' onChange={getdata} placeholder="Enter Youtube video URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" name='image' onChange={getdata} placeholder="Enter Thumbnail Image URL" />
            </Form.Group> 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false) }}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupload} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvideos
