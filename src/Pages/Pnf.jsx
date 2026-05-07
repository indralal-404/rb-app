import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div>
      <div className='d-flex justify-contents-center align-items-center'>
        <img className='' src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt="pnf" />
      </div>
      <p>Oh no!</p>
      <h3 className='text-warning text-center'>Look Like You Are Lost</h3>
      <p>The page you are looking for is not avilable</p>
      <Link to={"/"} className='bg-black px-3 py-2 text-light my-5'>Home</Link>
    </div>
  )
}

export default Pnf
