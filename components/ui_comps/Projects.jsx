import HorizontalScroll from '../../lib/HorizontalScroll';
import React from 'react';

const Projects = () =>
{
    return (
        <section
            id="projects"
            className="w-full flex flex-col items-center justify-center"
        >
            {/* Header */}
            <div className="brand-gradient-linear relative ">
                <h2 className=" container-h2  text-7xl font-medium">Projects</h2>
                <span className="flex w-full justify-end pr-8 text-sm">
                    & Personal Works
                </span>
            </div>
            <div className="mt-6">
                <HorizontalScroll />
            </div>
        </section>
    );
};

export default Projects;
