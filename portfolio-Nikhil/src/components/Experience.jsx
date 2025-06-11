import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'


function Experience() {
    const experiences = [
        {
            company: "Diginet Solution",
            period: "Jan 2024-Present",
            description: "As a company specializing in MERN stack development, we deliver robust and scalable web applications using MongoDB, Express.js, React, and Node.js. Our expertise allows us to build end-to-end solutions, from intuitive frontends to powerful backend infrastructures, ensuring high performance, flexibility, and seamless user experiences for clients across industries."
        },
        
    ]

    return (
        <div className='p-8 max-w-[600px] mx-auto'>
            <h1 className='text-2xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
            <motion.div
                className="space-y-8"
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index) => (
                    <Reveal>
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className=" border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
                        >
                            <h2 className='text-gray-100'>{experience.company}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-sm text-gray-300'>{experience.description}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </motion.div>

        </div>

    )
}

export default Experience
