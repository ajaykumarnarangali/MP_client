import React, {  useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { deleteVideos, addHistory } from '../services/allApi'
import { toast } from 'react-toastify';
import {getSingleCategory,updateCat} from '../services/allApi'


function VideoCard({ data, setDeletestatus,cat,catId,setCatupdate }) {
    const [history, setHistory] = useState({
        title: '', url: '', date: ''
    });
    const [show, setShow] = useState(false);
    function deletItem() {
        deleteVideos(data.id).then(async(res) => {
            setDeletestatus(res);
            let response=await detQueryHis(data.id)
            console.log(response)
            toast.error("video deleted")
        })
    }

    const handleClose = () => {
        setShow(false);
        addHistory(history).then((res) => {
            setHistory({ title: '', image: '', url: '', date: '',videoName:'' });
        })

    }
    const handleShow = () => {
        setShow(true);
        setHistory({title: data.caption, url: data.url, date: new Date(),videoName:data.caption});
    }

    const handleOndrag=(e,id)=>{
        e.dataTransfer.setData("videoId",id);
    }

    const popVideo=async()=>{
       let singleCate=await getSingleCategory(catId).then((res)=>res.data);
       singleCate={...singleCate,"videos":singleCate.videos.filter((each)=>each.id!=data.id)}
       updateCat(singleCate,catId).then((res)=>{
        setCatupdate(res);
       })
    }



    return (
        <>
            <Card style={cat?{width:'100%',margin:'2px'}:{ width: '19rem' }} className='pointer' draggable onDragStart={(e)=>{handleOndrag(e,data?.id)}}>
                <Card.Img variant="top"
                    src={data.image}
                    onClick={handleShow}
                    style={{ height: '200px' }}
                />
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title>{data.caption}</Card.Title>
                  { !cat ? <i className='fa-solid fa-trash' style={{ color: '#cb1d10' }} onClick={deletItem} />
                    :  <i className='fa-solid fa-trash' style={{ color: 'blue' }} onClick={popVideo}/>
                  }
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315"
                        src={data.url} title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    <Modal.Title className='text-center'>{data.caption}</Modal.Title>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard
