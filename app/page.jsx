import React from 'react';

import Divider from '@/lib/Divider';

import Hero from '../components/ui_comps/Hero';
import About from '../components/ui_comps/About';
import Experience from '../components/ui_comps/Experience';
import Interests from '../components/ui_comps/Interests';
import Projects from '../components/ui_comps/Projects';
import Connect from '../components/ui_comps/Connect';
import Collab from '../components/ui_comps/Collab';
import Footer from '../components/ui_comps/Footer';

const Home = () =>
{
    return (
        <div className="">
            <Hero />
            <About />
            <Divider className={'my-12'} />
            <Interests />
            <Divider className={'my-12'} />
            <Projects />
            <Divider className={'my-12'} />
            <Experience />
            <Divider className={'my-12'} />
            <Connect />
            <Divider className={'my-12'} />
            <Collab />
            <Divider className={'my-12'} />
            <Footer />

        </div>
    );
};

export default Home;
