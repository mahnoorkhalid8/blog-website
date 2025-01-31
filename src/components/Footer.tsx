import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='sticky bg-gray-300 text-black text-center font-semibold'>
      <div className='flex justify-center gap-3 p-2 '>
      <span>&copy; Makeup</span>
      <span> | </span>
      <span>All rights reserved 2025.</span>
      </div>
      <div className='flex justify-center '>
        <div className='my-1'><CiLocationOn /></div>Pakistan
      </div>
    </div>
  )
}

export default Footer;