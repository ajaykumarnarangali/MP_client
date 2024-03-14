import { useEffect, useState } from 'react'
import { getHistory,delHistory } from '../services/allApi'

function History() {
  const [history, setHistory] = useState([]);
  const [delStatus,setDelstatus]=useState({});

  useEffect(() => {
    getHistory().then((res) => {
      setHistory(res.data);
    })
  }, [delStatus])

  function deleteHistory(id)
  {
     delHistory(id).then((res)=>{
       setDelstatus(res)
     })
  }

  return (
    <div className='container p-0 mt-5'>
      <table class="table">
        <thead>
          <tr>
            <th className='text-white'>Caption</th>
            <th className='text-white'>Url</th>
            <th className='text-white'>Date & time</th>
          </tr>
        </thead>
        <tbody>
          {
            history.map((item) => {
              return (
                <tr>
                  <td className='text-white'>{item.title}</td>
                  <td className='text-white'>{item.url}</td>
                  <td className='text-white'>{item.date}</td>
                  <td ><i className='fa-solid fa-trash text-white pointer' onClick={()=>{deleteHistory(item.id)}}/></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default History
