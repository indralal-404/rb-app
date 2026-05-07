import commonAPI from "./commonAPI"
import { server_url } from "./server-url"

//addResumeAPI

  export  const addResumeAPI = async(resumeData)=>{
        return await commonAPI('POST',`${server_url}/resumes`,resumeData)
    }


//get resume api

  export  const getResumeAPI = async(id)=>{
        return await commonAPI('GET',`${server_url}/resumes/${id}`,{})
    }


//editResumeApi

    export  const editResumeAPI = async(id,resumeData)=>{
        return await commonAPI('PUT',`${server_url}/resumes/${id}`,resumeData)
    }


//addDownloadHistoryAPI

export const addDownloadHistoryAPI=async(resumeData)=>{
    return await commonAPI('POST',`${server_url}/downloads`,resumeData)
}


//getDownloadsAPI

export const getDownloadsAPI=async()=>{
    return await commonAPI('GET',`${server_url}/downloads`,{})
}


//deleteDownloadApi

export const deleteDownloadApi=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/downloads/${id}`,{})
}