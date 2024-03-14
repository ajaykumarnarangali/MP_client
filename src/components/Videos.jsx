import { useEffect, useState } from 'react';
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApi'

function Videos({addStatus}) {
  const [allvideos, setAllvideos] = useState([]);
  const [deleteStatus,setDeletestatus]=useState({})

  useEffect(() => {
      function getdata() {
      getVideos().then((res) => {
        setAllvideos(res.data);
      })
    }
    getdata();
  }, [addStatus,deleteStatus])
  return (
    <div className='bg-light border border-3 border-dark p-2'>
      <div className='d-flex flex-wrap justify-content-around'>
        {
          allvideos.map((item) => {
           return( <div className='mx-2 my-3'>
              <VideoCard data={item} setDeletestatus={setDeletestatus}/>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default Videos
