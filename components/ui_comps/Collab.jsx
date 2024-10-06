import React from 'react';
import { Button } from '../ui/button';
import DrawerComponent from '@/lib/DrawerComponent';

const Collab = () =>
{
    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-w-5xl gap-8  text-center items-center justify-center flex flex-col">
                <h1 className=" brand-gradient-linear text-5xl font-medium  px-12 ">
                    Are You Ready to work to work on your passion project with me ?
                </h1>
                <p className="text-xl text-zinc-300">
                    Great! I happy to work with you. <br /> Send your project brief to
                    email right now
                </p>
                <DrawerComponent
                    text="Send Now"
                />
            </div>
        </div>
    );
};

export default Collab;
