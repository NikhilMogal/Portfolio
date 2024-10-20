import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TypeAnimation } from 'react-type-animation';
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import ShinyEffect from './ShinyEffect';



function Hero() {
    return (
        // < className='mt-24 max-w-[1200px] mx-auto relative'>

        //     < className="grid md:grid-cols-2 place-items-center gap-8">
        //         <motion.div

        //             initial={{ opacity: 0, y: -50 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true }}
        //             transition={{ duration: 1 }}
        //         >

        //             <TypeAnimation
        //                 sequence={[
        //                     "Full Stack Developer",
        //                     1000,
        //                     "Front End Developer"
        //                 ]}

        //                 speed={50}
        //                 repeat={Infinity}
        //                 className='font-bold text-gray-400 text-xl md:text-5xl italic-mb-4'
        //             />

        //             <motion.p

        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 viewport={{ once: true }}
        //                 transition={{ duration: 1, delay: 0.5 }}
        //                 className='text-gray-200 md-text-7xl text-5xl tracking-tight mb-4'

        //             >
        //                 HEy, I AM <br />
        //                 <span className='text-purple-500'>Nikhil Mogal</span>

        //             </motion.p>

        //             <motion.p

        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 viewport={{ once: true }}
        //                 transition={{ duration: 1, delay: 1 }}
        //                 className='text-gray-300 max-w-[300px] md:-w-[500px] md-text-2xl text-lg  mb-6'

        //             >
        //                 <span className='text-purple-500'> I am a passionate fullStack developer with over 1 year of experience.</span>

        //             </motion.p>


        //             <motion.div

        //                 initial={{ opacity: 0, y: 50 }}
        //                 whileInView={{ opacity: 1, y: 0 }}
        //                 viewport={{ once: true }}
        //                 transition={{ duration: 1, delay: 1.5 }}
        //                 className='flex flex-row items-center gap-6 my-4 md:mb-0'
        //             >
        //                 <motion.button

        //                     className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl '

        //                     whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3" }}

        //                 >
        //                     Download Cv
        //                 </motion.button>

        //                 <div className=" flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20 ">

        //                     <motion.a whileHover={{ scale: 1.2 }} href=''>
        //                         <FaGithub />

        //                     </motion.a>
        //                     <motion.a whileHover={{ scale: 1.2 }} href=''>
        //                         <FaLinkedin />

        //                     </motion.a>
        //                     <motion.a whileHover={{ scale: 1.2 }} href=''>
        //                         < FaInstagram />

        //                     </motion.a>
        //                 </div>
        //             </motion.div>


        //         </motion.div>


        <div className='mt-24 max-w-[1200px] mx-auto relative'>
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "MERN Stack Developer",
                            3000,
                            "Front End Developer"
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className='font-bold text-gray-400 text-xl md:text-2xl italic mb-4' // Fixed class names
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-gray-200 text-2xl md:text-xl tracking-tight mb-4' // Fixed class names
                    >
                        HEY, I AM <br />
                        <span className='text-purple-500 text-4xl'>Nikhil Mogal</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className='text-gray-300 max-w-[300px] md:max-w-[500px] text-lg md:text-2xl mb-6' // Fixed class names
                    >
                        <span className='text-purple-500'>I am a passionate Full Stack Developer with over 1 year of experience.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='flex flex-row items-center gap-6 my-4 md:mb-0'
                    >
                        <motion.button
                            className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}
                        >
                            Download CV
                        </motion.button>

                        <div className="flex gap-6 flex-row  text-4xl md:text-6xl text-purple-400 z-20">
                            <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/NikhilMogal'>
                                <FaGithub className='w-12' />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href=' https://www.linkedin.com/in/nikhil-mogal/'>
                                <FaLinkedin className='w-12' />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href=''>
                                <FaInstagram className='w-12' />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.img

                    src=""
                    className='w-[300px] md:w-[450px]'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}


                />

            </div>


            <motion.div

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'

            >
                <p className='text-gray-200 mr-6  lg:text-2xl  '>My Tech Stack</p>
                <FaHtml5 className='text-orange-600 mx-2' />
                <FaCss3 className='text-blue-600 mx-2' />
                <DiJavascript1 className='text-yellow-500 mx-2' />
                <RiReactjsLine className='text-blue-500 mx-2' />
                <RiTailwindCssFill  className='text-blue-500 mx-2'  />
                <FaNodeJs className='text-green-500 mx-2' />
                <SiExpress className='text-white mx-2' />
                <SiMongodb className='text-green-600 mx-2' />

            </motion.div>

            <div className='absolute inset-0 hidden md:block'>

            <ShinyEffect left={0} top={0} size={1400} />
                
            </div>
        </div>


    )
}

export default Hero
