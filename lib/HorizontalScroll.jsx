'use client';

import React, { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { menus } from '@/lib/projects';
import { PlayIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export const HorizontalScroll = () =>
{
    const [activeTab, setActiveTab] = useState( 0 );

    return (
        <div className="flex w-full    items-center justify-center rounded-2xl flex-col gap-6">
            <div>
                <motion.ul
                    // Animate the menu while in view but once

                    initial={{ opacity: 0, x: -100 }}
                    // animate={{ opacity: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        type: 'tween',
                        damping: 10,
                        stiffness: 100
                    }}
                    className="flex items-center   gap-2 border-[0.5px] border-zinc-500/50 justify-center bg-[#0A0A0A] rounded-full px-8 p-2"
                >
                    {menus.map( menu => (
                        <li
                            className={` px-4 py-2 transition-all duration-100 ease-in-out cursor-pointer rounded-full
							${activeTab === menu.index ? 'bg-brand-400' : ''}
							`}
                            key={menu.name}
                            onClick={() => setActiveTab( menu.index )}
                        >
                            <div
                                className={` active:bg-brand-200 px-2  rounded-full`}
                                key={menu.index}
                            >
                                {menu.name}
                            </div>
                        </li>
                    ) )}
                </motion.ul>
            </div>
            <div className="w-full ">
                <div className=" px-12   rounded-2xl ">
                    <div className="grid grid-cols-3  w-max  space-x-4 p-4">
                        {menus[activeTab].works.map( work =>
                        {
                            return (
                                <figure
                                    key={work.index}
                                    className="group relative cursor-pointer  "
                                >
                                    <>
                                        {/* Play Button */}
                                        <motion.a
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                type: 'tween',
                                                damping: 10,
                                                stiffness: 100
                                            }}
                                            href={work.url}
                                            target="_blank"
                                        >
                                            <div className="relative  ">
                                                <Image
                                                    src={work.image}
                                                    alt={`Photo by ${work.name}`}
                                                    width={work.width}
                                                    height={work.height}
                                                    className={`grayscale object-center  group-hover:grayscale-0 transition-all duration-300 ease-in-out rounded-2xl    object-cover  ${work.tag === 'thumbnail' || work.tag === 'others'
                                                        ? 'lg:w-[540px]  lg:h-[320px]    sm:w-[320px] sm:h-[200px]  '
                                                        : 'lg:w-[540px] lg:h-[675px] sm:w-[320px] sm:h-[400px]	'
                                                        }`}
                                                />

                                                {work.video && (
                                                    <PlayIcon className="w-16 h-16  text-white bg-black/30 flex items-center justify-center group-hover:scale-125 transition-all p-3 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                                                )}
                                            </div>
                                        </motion.a>
                                    </>
                                    <figcaption className="pt-2">
                                        <h4 className=" text-xl group-hover:text-white transition-all duration-300 ease-in-out  text-zinc-400 ">
                                            {work.name}
                                        </h4>
                                        <p className="text-sm  text-zinc-400">
                                            Simple Breif about the project
                                        </p>
                                    </figcaption>
                                </figure>
                            );
                        } )}
                    </div>
                    <div className="hidden">
                        {/* <ScrollBar orientation="horizontal" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
