'use client';
import React from 'react';
import Image from 'next/image';
import { motion, stagger } from 'framer-motion';
import { container, item } from '../../lib/animation';

const Hero = () =>
{
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            // Stagger children
            id="home"
            className=" mt-[96px] mb-24 h-[calc(100vh-96px)] relative overflow-hidden"
        >
            <div className='relative h-full  flex flex-col items-center justify-evenly'>
                <motion.div
                    className="absolute  top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2  z-50 md:-z-10 select-none  "
                >
                    <motion.div
                        variants={item}
                        className='  flex flex-col mx-auto items-center justify-center lg:text-[18vmax] md:text-[12rem] text-7xl  relative' >
                        <h1 className=" absolute grainy-text text-balance  font-medium leading-[0.8] text-center ">ABHISHEK</h1>
                        <h1 className=" absolute grainy-text text-balance  font-medium leading-[0.8] text-center z-50 "> DOLLI</h1>
                    </motion.div>

                </motion.div>

                {/* Image in Background */}
                <div className=' relative w-full h-full'>
                    <motion.div variants={item} className="absolute w-full h-full flex items-center justify-center">
                        <Image
                            src="/hero.png"
                            alt="Hero"
                            width={560}
                            height={936}
                            className=" absolute bottom-0 -z-10    object-center"
                        />
                        <Image
                            src="/hero.png"
                            alt="Hero"
                            width={560}
                            height={936}
                            className="object-cover bottom-0 absolute glow -z-20  object-center shadowfilter  "
                        />
                        <div className=' absolute bg-gradient-to-t from-black to-white/0 w-full h-full to-60%' />
                    </motion.div>
                </div>
                <motion.div
                    variants={item}
                    className=" md:mb-0 mb-12 absolute bottom-12 lg:flex  max-lg:px-8 text-center text-4xl lg:max-w-2xl font-light"
                >
                    <p>Freelance  <span className="  text-gradient select-auto  font-normal px-2 py-1">
                        Video Editor {' '}
                    </span>
                        and
                        <span className="text-gradient select-auto  font-normal px-2 py-1">
                            Thumbnail Designer {' '}
                        </span>
                        based in India. I love editing documentery style videos. Feel free to
                        checkout My Works.</p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
