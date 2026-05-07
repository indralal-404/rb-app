import { Box, Button, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { deleteDownloadApi, getDownloadsAPI } from '../services/allAPI'


function History() {

  const[resume,setResume]=useState([])

  useEffect(()=>{
    getDownloads()
  },[])

  const getDownloads=async()=>{
    try{
      const result=await getDownloadsAPI()
      console.log(result);
      setResume(result.data)
      
    }catch(err){
      console.log(err);
      
    }
  }

  // console.log(resume);

  const removeHistory=async(id)=>{
    try{
      const result = await deleteDownloadApi(id)
      console.log(result);
      getDownloads()
      
    }catch(err){
      console.log(err);
      
    }
  }
  

  return (
    <div>
      <div>
        <h1 className='text-center mt-5'>Download Resume History</h1>
        <Link to={'/'} style={{marginTop:"-50px"}} className='float-end me-5'>Back</Link>
        <Box component="section" className='container-fluid'>
          <div className="row">
            {resume?.length>0?resume.map((item,index)=>(
              <div className="col-md-4" key={index}>
              <Paper elevation={3} sx={{my:5, p:5, textAlign:"center"}}>
                <div className="d-flex align-items-center justify-content-evenly">
                  <h6>Review At:{item?.timeStamp}<br/></h6>
                  <Button onClick={()=>removeHistory(item?.id)} className='btn text-danger fs-4 ms-5'><MdDelete /></Button>
                </div>
                <div className="border rounded p-3">
                  <img src={item?.imgUrl} alt="resume" className='img-fluid' />
                </div>
              </Paper>
            </div>
            )) :<p>Nothing to Display</p>}
          </div>
        </Box>
      </div>
    </div>
  )
}

export default History