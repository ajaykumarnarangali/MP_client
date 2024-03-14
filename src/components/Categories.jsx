import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {addCategory} from '../services/allApi'
import CategoryList from '../components/CategoryList'
import {getCategory} from '../services/allApi'

function Categories() {
  const [catData,setCatdata]=useState([]);
  const [catStatus,setCatstatus]=useState({});
  const [catDelstatus,setCatdelstatus]=useState({});
  const [catupdate,setCatupdate]=useState({})

 
   useEffect(()=>{
    getCategory().then((res)=>{
      setCatdata(res.data)
    })
   },[catStatus,catDelstatus,catupdate])
   
  const [show, setShow] = useState(false);
  const [categories,setCategories]=useState({category:'',videos:[]});

  function getdata(e)
  {
    const {name,value}=e.target
    setCategories(prev=>{
      return {...prev,[name]:value}
    });
  }
  
  function handleUpload()
  {
    if(!categories.category)
    {
       toast.warning("enter category name")
    }else
    {
      addCategory(categories).then((res)=>{
        setShow(false);
        setCategories({category:'',videos:[]});
        setCatstatus(res)
        toast.success("category added");
      })
    }
  }

  return (
    <>
    <div className='px-5 py-2'>
    <Button variant="primary" className='btn' onClick={()=>{setShow(true)}}>Add Category</Button>
    </div>

    <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" name='category' onChange={getdata} placeholder="Enter category name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{setShow(false)}}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
            
     {catData.length>0 && <CategoryList catData={catData} setCatdelstatus={setCatdelstatus} setCatupdate={setCatupdate}/>}

    </>
  )
}

export default Categories
