import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobType from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { addResumeAPI } from "../services/allAPI";
import Swal from 'sweetalert2'

function Steps({resumeData,setResumeData,setFinish,setResumeId}) {

  console.log(resumeData);
  

  const steps = [
    "Basic Information",
    "Contact Details (Optional)",
    "Education Details",
    "Review & Submit",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  

 

  const handleNext = () => {
   
    setActiveStep((prev) => prev + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };





  const renderStep = (step) => {
    switch (step) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic" label="Full Name" variant="standard"
            value={resumeData.fullname}
            onChange={e=>setResumeData({...resumeData,fullname:e.target.value})} />
            <TextField id="standard-basic" label="Location" variant="standard"
            value={resumeData.location}
            onChange={e=>setResumeData({...resumeData,location:e.target.value})} />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose Job title</InputLabel>
              <Select onChange={e=>setResumeData({...resumeData,job:e.target.value})}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Job"

              >
              {
                jobType.jobRoles.map(role=>(
                    <MenuItem key={role} value={role}>{role}</MenuItem>
                ))
              }
                

              </Select>
            </FormControl>
          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic" label="E-mail" variant="standard"
            value={resumeData.email}
            onChange={e=>setResumeData({...resumeData,email:e.target.value})}  />
            <TextField id="standard-basic" label="Phone Number" variant="standard"
            value={resumeData.phone}
            onChange={e=>setResumeData({...resumeData,phone:e.target.value})}  />
            <TextField id="standard-basic" label="GitHub Profile Link" variant="standard" 
            value={resumeData.github}
            onChange={e=>setResumeData({...resumeData,github:e.target.value})} />
            <TextField id="standard-basic" label="Linkedin Profile Link" variant="standard"
            value={resumeData.linkedin}
            onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})}  />
    
          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3">
            
            <TextField id="standard-basic" label="Degree" variant="standard" 
            value={resumeData.degree}
            onChange={e=>setResumeData({...resumeData,degree:e.target.value})} />
            <TextField id="standard-basic" label="University" variant="standard"
            value={resumeData.university}
            onChange={e=>setResumeData({...resumeData,university:e.target.value})}  />
            <TextField id="standard-basic" label="Year of Passout" variant="standard" 
            value={resumeData.passOut}
            onChange={e=>setResumeData({...resumeData,passOut:e.target.value})} />
          </div>
        </div>
      )
      case 3: return (
        <div>

          <div>
            <p>Our AI will generate Skills and Summary according to your job role.Click the <b>Generate AI Skill & Summary</b> button to proceed </p>
          </div>
        </div>
      )

      default: return null
    }
  }

//generate sumary and skill

const generateAI=()=>{
  setResumeData({...resumeData,skills:jobSkills[resumeData.job],
    summary:summaries[resumeData.job]
  })
  handleNext()
}


const handleAddResume= async()=>{
  const{fullname,location,job,email,phone,github,linkedin,degree,university,passOut,skills,summary}=resumeData

  if(fullname && location && job && email&&phone&&github&&linkedin&&degree&&university&& passOut &&skills.length>0&&summary){
    const result = await addResumeAPI(resumeData)
    console.log(result);
    if(result.status==201){
      // alert("resume created successfully")
      Swal.fire({
  title: "resume created successfully!",
  icon: "success",
  draggable: true
});
  setFinish(true)
  setResumeId(result.data.id)
    }else{
      console.log(result);
      
    }
  }else{
    alert('please fill form completely')
  }
}

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

        
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 3, mb: 2 }}>
            All steps completed 
          </Typography>

          <Box sx={{ display: "flex", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleAddResume}>
              Finish
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 3, mb: 2 }}>
            Step {activeStep + 1}
          </Typography>
          <Box>
            {renderStep(activeStep)}
          </Box>
          <Box sx={{ display: "flex", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />



            {activeStep === steps.length - 1 ?
              <Button onClick={generateAI}>Generate AI Skils & Summary</Button> : <Button onClick={handleNext}> Next</Button>}

          </Box>
        </>
      )}
    </Box>
  );
}

export default Steps;