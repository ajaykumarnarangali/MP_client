import { deleteCategory, getsingleVideos, updateCat } from '../services/allApi'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'


function CategoryList({ catData,setCatdelstatus,setCatupdate }) {

  const delCat = (id) => {
    deleteCategory(id).then((res) => {
      setCatdelstatus(res);
      toast.error("category is deleted");
    })
  }

  const handleDragover = (e) => {
    e.preventDefault();
  }

  const handleDrop = async (e, id) => {
    const videoId = e.dataTransfer.getData("videoId");
    const category = catData.find((item) => item.id === id);
    const videoData = await getsingleVideos(videoId).then((res) => res.data);
    if (!category.videos.find((each) => each.id === videoData.id)) {
      category.videos.push(videoData);
    }
    updateCat(category, id).then((res) => {
      setCatupdate(res);
      toast.success(`${videoData.caption} is added to ${category.category}`)
    })
  }
  // console.log(catData)
  return (
    <>
      <div className='border border-light p-3 mt-3' >
        {
          catData ?
            catData.map(item => (
              <div className='bg-primary mb-3 p-3 rounded shadow' key={item.id} onDragOver={e => { handleDragover(e) }} droppable="true" onDrop={e => { handleDrop(e, item?.id) }}>
                <div>
                  <span>{item.category}</span>
                  <i className='fa-solid fa-trash float-end pointer' onClick={()=>{delCat(item.id)}} style={{ color: '#ff0000' }}></i>
                </div>
                <div className='mt-3 p-2'>
                  {
                    item?.videos.map(v => (
                      <VideoCard key={v.id} data={v} catId={item.id} cat={true} setCatupdate={setCatupdate} />
                    ))
                  }
                </div>
              </div>
            ))
            :
            <h1>No Categories</h1>
        }
      </div>
    </>
  )
}

export default CategoryList
