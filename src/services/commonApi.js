import axios from "axios";

const commonApi=async(method,url,data)=>{
    const reqConfig={
        method,
        url,
        data,
        headers:{'Content-Type':'application/json'}
    }
    
    return await axios(reqConfig).then(res=>res).catch(err=>err)
}

export default commonApi