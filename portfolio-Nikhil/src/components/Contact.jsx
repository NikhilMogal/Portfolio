import { motion } from 'framer-motion'
import React from 'react'
import Reveal from './Reveal'


function Contact() {
    return (
        <div className='px-6 max-w-[1000px] mx-auto md:my-12' id="contact">
            <Reveal >
            <div className='grid md:grid-cols-2 place-items-center'>

                <div>
                    <div className='text-gray-300 my-3'>

                        <h3 className='text-4xl font-semibold mb-5'>About Me</h3>
                        <p className='text-justify'>
                            I'm a software engineer with a passion for building scalable and efficient systems. I'm always looking
                        </p>


                    </div>
                    <div className='flex mt-10 items-center gap-7'>
                        <div className='bg-gray-800/40 p-4 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>4
                                <span>+</span>
                            </h3>

                            <p className='text-xs md:text-base'><span>Projects</span></p>


                        </div>
                       
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>1
                                <span>+</span>
                            </h3>

                            <p className='text-xs md:text-base'><span>Years of Experience</span></p>


                        </div>
                    </div>

                </div>
                <form action="">

                    <p className='text-gray-100 font-bold text-xl mb-2 ml-4'>Lets Connect</p>
                    <input type="text"
                    id='name'
                    placeholder='Your Name....' 
                    name='name'
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 ml-4'
                    />

                    <textarea name="textaera" id="textarea"
                    cols={30}
                    rows={4}
                    placeholder='Your massege'
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 ml-4'
                    ></textarea>

                    <button type='submit'
                    className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color ml-4'>Send Massege</button>
                </form>
            </div>
            </Reveal >
        </div>
    )
}

export default Contact
