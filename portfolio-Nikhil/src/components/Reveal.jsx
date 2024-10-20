// import React, { useEffect, useRef } from 'react'
// import { motion, useInView, useAnimation } from 'framer-motion'


// const Reveal = ({ children, width = 'fit-content' }) => {

//     const ref = useRef(null)

//     const isInView = useInView(ref, { once: true })

//     const mainControls = useAnimation()

//     useEffect(() => {
//         if (isInView) {
//             mainControls.start('visible')
           
            
//         }
//     }, [isInView, mainControls])

//   return (
//     <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>

//         <motion.div
//         variants={{
          
//             hidden: { opacity: 0, y: 75 },
//             visible: { opacity: 1, y: 0 }, 
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{ duration: 0.5, delay: 0.25}}
//         >
//             {children}
//         </motion.div>
        
//     </div>
//   )
// }

// export default Reveal



import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({ children, width = 'fit-content' }) => {

    const ref = useRef(null)

    // Tracks whether the element is in view or out of view
    const isInView = useInView(ref, { once: false }) // Set once: false to allow for reverse animation

    // Controls the animation state
    const mainControls = useAnimation()

    useEffect(() => {
        // When the element is in view, start the "visible" animation
        if (isInView) {
            mainControls.start('visible')
        } else {
            // When the element scrolls out of view, reverse to the "hidden" state
            mainControls.start('hidden')
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },   // Moves down and fades out
                    visible: { opacity: 1, y: 0 },   // Moves up and fades in
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal
