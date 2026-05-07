import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'



function LandingPage() {
  return (
    <>
      <section id='bg1'>
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box py-5 border rounded mt-5 text-center shadow-lg bg-dark bg-opacity-25">
            <h3 style={{color:'rgb(170, 206, 242)'}}>Designed to get hired</h3>
            <h4 style={{color:'rgb(170, 206, 242)'}}>Your skills,your story,your next job - all in one </h4>
            <Link to={'/resume-generator'}>
                <Button style={{backgroundColor:'rgb(28, 124, 220)', color:'white'}} varient="contained">Make Your Resume</Button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      <section className='p-5'>
        <h3 className='text-center'>Tools</h3>
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-12 col-md-6 ">
            <img src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" width={'70%'} alt="" />
          </div>
        </div>
      </section>

      <section id='bg2'></section>

      <section>
              <div className="row p-5">
                <h3 className='text-center my-3'>Testimony</h3>
                <div className='col-12 col-md-6'>
                  <h4>Trusted by professionals worldwide.</h4>
                  <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
                  <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
                  <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
                </div>
                <div className='col-12 col-md-6'>
                  <div className="row">
                    <div className="col">
                      <img width={'100%'} src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </div>
                    <div className="col">
                      <img width={'100%'} src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="col">
                      <img width={'100%'} src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col">
                      <img width={'100%'} src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </div>
                    <div className="col">
                      <img width={'100%'} src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="col">
                      <img width={'100%'} src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img width={'100%'} src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </div>
                    <div className="col">
                      <img width={'100%'} src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="col">
                      <img width={'100%'} src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                  </div>
                </div>
              </div>
      </section>
    </>
  )
}

export default LandingPage
