
import React from 'react'
import { FaGithub } from "react-icons/fa";
import Movies from "../assets/Movix.png"
import RealEstate from "../assets/RealEstate.png"
import Reveal from './Reveal';


function Portfolio() {

    const projects = [
        {


            title: "Movie Search React Application",
            description: "Search for any moves user wants.Filter movies based on various criteria.",
            technology: "React js , Redux, Context Api",
            img: Movies,
            links: {
                site: "https://movies-app-ten-orpin.vercel.app/",
                github: "https://github.com/NikhilMogal/Movies-App"

            }

        },
        {
            title: "Real Estate  Website",

            description: 
            "A dynamic real estate platform offering seamless property listings, investment opportunities, and personalized services for buyers and sellers.",
            technology: "React js , Taiwind CSS, Node Js ,MongoDb",
            img: RealEstate,
            links: {
                site: "",
                github: ""

            }
        }


    ]
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20 ' id="portfolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>portfolio</h2>
            {projects.map((project, index) => (

                <Reveal>
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ""} mb-12`}>
                    <div className='w-full md:w-1/2 p-4'>
                        <img src={project.img}
                            alt={project.title}
                            className='w-full h-full object-cover rounded-lg shadow-lg text-white' />
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.technology}</p>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex space-x-4'>
                            <a href={project.links.site} className='px-4 py-2 bg-slate-600 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
                            <a href={project.links.github} className='px-4 py-2 bg-slate-600 rounded-lg hover:bg-slate-700 transition duration-300'><FaGithub/></a>
                        </div>
                    </div>
                </div>
                </Reveal >
             
            ))}
            

        </div>
    )
}

export default Portfolio
