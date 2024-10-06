import Image from 'next/image';
import React from 'react';

const Experience = () =>
{
    return (
        <section
            id="experience"
            className="w-full flex flex-col items-center justify-center"
        >
            {/* Header */}
            <div className="brand-gradient-linear relative ">
                <h2 className=" container-h2  text-7xl font-medium">Experience</h2>
                <span className="flex w-full justify-end pr-8 text-sm">
                    as a Video Editor
                </span>
            </div>

            <div className=' w-full mt-24  flex flex-col gap-1 items-center justify-center h-auto '>

                <div className='rotate-2 w-[512px] '>
                    <Image className='rounded-xl w-full  ' width={918} height={689} alt='Team of YAAS' src={'/experience_1.webp'} />
                    <p className='text-xl'>YAAS Team</p>
                </div>
                <div className='-rotate-3 w-[512px] '>
                    <Image className='rounded-xl w-full  ' width={918} height={689} alt='with ocus and martin' src={'/experience_2.webp'} />
                    <p className='text-xl'>with Ocus and Martin</p>
                </div>


            </div>

        </section>
    );
};

export default Experience;
