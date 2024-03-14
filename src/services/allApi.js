import commonApi from "./commonApi";
import { base_URL } from "./base_url";

export const uploadVideos=(data)=>{
    return commonApi("post",`${base_URL}/allvideos`,data);
}

export const getVideos=()=>{
    return commonApi("get",`${base_URL}/allvideos`,'');
}
export const getsingleVideos=(id)=>{
    return commonApi("get",`${base_URL}/allvideos/${id}`);
}

export const deleteVideos=(id)=>{
    return commonApi("DELETE",`${base_URL}/allVideos/${id}`)
}

export const addCategory=(data)=>{
    return commonApi("post",`${base_URL}/categories`,data);
}

export const getCategory=()=>{
    return commonApi("get",`${base_URL}/categories`,'')
}

export const getSingleCategory=(id)=>{
    return commonApi("get",`${base_URL}/categories/${id}`);
}

export  const deleteCategory=(id)=>{
    return commonApi("DELETE",`${base_URL}/categories/${id}`)
}

export const addHistory=(data)=>{
    return commonApi("post",`${base_URL}/history`,data)
}

export const getHistory=()=>{
    return commonApi("get",`${base_URL}/history`,'');
}

export const delHistory=(id)=>{
    return commonApi("DELETE",`${base_URL}/history/${id}`);
}

export const updateCat=(data,id)=>{
    return commonApi("PUT",`${base_URL}/categories/${id}`,data);
}