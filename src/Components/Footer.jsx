import React from 'react'

function Footer() {
  return (
      <footer className="text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row gy-5">

        
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Resume Builder</h3>
            <p className='pe-5'>
              A Resume Builder App helps job seekers create clean, professional resumes with ease.
              It simplifies formatting and improves presentation, increasing chances of landing interviews.
            </p>
          </div>

          
          <div className="col-md-3">
            <h5 className="fw-semibold mb-3">Extra Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-light">Forms</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-light">Resume</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-light">About Us</a>
              </li>
            </ul>
          </div>

          
          <div className="col-md-3">
            <h5 className="fw-semibold mb-3">Contact</h5>
            <p>Thrissur, Kerala</p>
            <p>resumebuilder@gmail.com</p>
            <p>+91 2653100023</p>
          </div>

        </div>

        
        <div className="text-center mt-4 pt-3 border-top">
          <small>
            © 2026 Resume Builder. All rights reserved.
          </small>
        </div>
      </div>
    </footer>



  )
}

export default Footer
