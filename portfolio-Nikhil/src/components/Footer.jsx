import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      
      <div className='space-y-4'>
<h3 className='text-2xl text-gray-200 font-semibold'>
Nikhil Mogal
</h3>

<div className='flex flex-row gap-6 text-gray-400  text-4xl'>

    <a href=" https://www.linkedin.com/in/nikhil-mogal/"> <FaLinkedin/></a>
    <a href="https://github.com/NikhilMogal"><FaGithub/></a>
</div>

      </div>

      <p className='text-gray-400'>@2024 Nikhil Mogal</p>
    </div>
  )
}

export default Footer
