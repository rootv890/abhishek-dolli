'use client';
import Plyr from '@rocketseat/react-plyr';
import React, { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { menus } from '@/lib/projects';
import { motion } from 'framer-motion';
import Head from 'next/head'; // Import Head for adding <link> tag
import VideoPlayer from '@/components/VideoPlayer';
import { cn } from './utils';
import myprojects from '@/lib/myprojects.json';
console.log( myprojects );
export const HorizontalScroll = () =>
{
    const [activeTab, setActiveTab] = useState( 'longForm' );

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.plyr.io/3.5.2/plyr.css" />
            </Head>
            <div className="flex w-screen px-6 items-center justify-center rounded-2xl flex-col gap-6">
                <div className=''>
                    <motion.ul
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            type: 'tween',
                            damping: 10,
                            stiffness: 100,
                        }}
                        className="flex items-center gap-2 border-[0.5px] border-zinc-500/50 justify-center bg-[#0A0A0A] rounded-full px-8 p-2"
                    >
                        {/* Tab Section */}
                        <ul className='min-w-52 gap-6 rounded-full h-10 flex justify-center items-center'>
                            <li onClick={() =>
                            {
                                setActiveTab( 'longForm' );
                            }} className={cn( 'tab ',
                                activeTab === 'longForm' && 'bg-brand-500 !px-4 !py-2' )}>Long Form</li>
                            <li onClick={() =>
                            {
                                setActiveTab( 'shortForm' );
                            }} className={cn( 'tab',
                                activeTab === 'shortForm' && 'bg-brand-500 !px-4 !py-2' )}>Short Form</li>
                            <li onClick={() =>
                            {
                                setActiveTab( 'aeComp' );
                            }} className={cn( 'tab',
                                activeTab === 'aeComp' && 'bg-brand-500 !px-4 !py-2' )}>AE Comps</li>
                        </ul>
                    </motion.ul >
                </div >
                <div className="w-full rounded-3xl">
                    <div className="w-full px-6 md:px-12 py-4 rounded-2xl">
                        <ul className="grid md:grid-cols-2 w-full place-items-center mx-auto px-12">
                            {activeTab === 'longForm' && renderTab( 'longForm' )}
                            {activeTab === 'shortForm' && renderTab( 'shortForm' )}
                            {activeTab === 'aeComp' && renderTab( 'aeComp' )}
                        </ul>

                    </div>
                </div >
            </div >
        </>
    );
};

export default HorizontalScroll;

function extractYouTubeId ( url )
{
    const regex = /(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|shorts\/|embed\/|v\/|.+\?v=|.+\/)?)([a-zA-Z0-9_-]{11})/;
    const match = url.match( regex );
    return match ? match[1] : null; // Return the ID or null if not found
}

function renderTab ( category )
{
    const videos = myprojects[category];

    if ( !videos )
    {
        return <li>No videos available for this category.</li>;
    }

    return videos.map( ( video, index ) =>
    {
        // Check if it's the last item and if the number of items is odd
        const isLastItem = index === videos.length - 1 && videos.length % 2 !== 0;
        const gridClasses = isLastItem ? 'col-span-2' : 'col-span-1';

        return (
            <li
                key={video.name}
                className={`w-full max-w-4xl mx-4 mb-4 aspect-video flex justify-center flex-col items-start gap-2 rounded-2xl p-2 ${gridClasses}`}
            >
                <VideoPlayer className="w-full" videoId={extractYouTubeId( video.url )} />
                <h2 className='text-xl'>{video.name}</h2>
            </li>
        );
    } );
}
