import axios from "axios";
import axiosSecure from ".";
export const getImage = async (image) => {
    const formData = new FormData()
    formData.append('image', image)
    const {
        data
    } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_ApiKey}`, formData)
    return data;
}

export const getToken = async (email)=>{
    const data = await axiosSecure.post('/jwt', {email})
    return data
}