import React from 'react'

import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Reveal from './Reveal';


function Skills() {

    const skills=[
        {
            category:'Frontend',
            technologies:[

                { name:'HTML5', icon:<FaHtml5 className='text-orange-600'/>},
                { name:'CSS', icon:<FaCss3 className='text-blue-600'/>},
                { name:'Tailwind CSS', icon:<RiTailwindCssFill className='text-blue-600'/>},
                { name:'React JS', icon:<RiReactjsLine className='text-blue-600'/>},
                { name:'Javascript', icon:<DiJavascript1 className='text-yellow-600'/>}
                
            
            ]
        },

        {
            category:'Backend',
            technologies:[

                { name:'Nods Js', icon:<FaNodeJs className='text-green-600'/>},
                { name:'MongoDB', icon:< SiMongodb className='text-green-600'/>},
                { name:'Express Js', icon:<SiExpress className='text-yellow-600'/>}

            
            ]

        }
    ]
  return (
    <div className=" max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-10"  id="skills">
        <Reveal>
     <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>  
      <p className='text-center mb-8'>
        I worked on various frontend And Backend Technologies.Check them <a href="" className='underline'>threre</a>
      </p>
      <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8  '>

        {skills.map((skill,index)=>(

            <div key={index} className=' border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>

                <h3 className='text-xl  font-bold mb-4 text-center'>{skill.category}</h3>

                <div className='grid grid-cols-2 gap-4'>
                    {skill.technologies.map((tech,idx)=>(
                        <div key={idx} className='flex items-center space-x-2'>
                            <span className='text-2xl'>{tech.icon}</span>
                            <span className=''>{tech.name}</span>
                        </div>
        ))}
                </div>
            </div>


        ))}
      </div>
      </Reveal>
    </div>
  )
}

export default Skills
