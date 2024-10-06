'use client';

import Logo from '@/lib/Logo';
import Link from 'next/link';
import { motion, motionValue, useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { container, item } from '@/lib/animation';
import DrawerComponent from '@/lib/DrawerComponent';

const navItems = [
    { name: 'Home', link: '/', id: 'home' },
    { name: 'About', link: '/#about', id: 'about' },
    { name: 'Interests', link: '/#interests', id: 'interests' },
    { name: 'Projects', link: '/#projects', id: 'projects' },
    { name: 'Experience', link: '/#experience', id: 'experience' },
    { name: 'Contact', link: '/#contact', id: 'contact' },
];

let clamp = ( number, min, max ) => Math.min( Math.max( number, min ), max );

const Navbar = () =>
{
    const [activeItemId, setActiveItemId] = useState( null );
    const [isMobile, setIsMobile] = useState( false );
    const path = usePathname();
    const { scrollY } = useScroll();

    let height = motionValue( 96 );
    let opacity = motionValue( 1 );
    let backgroundColor = motionValue( '#000000' );

    useEffect( () =>
    {
        const handleResize = () => setIsMobile( window.innerWidth <= 768 );
        window.addEventListener( 'resize', handleResize );
        handleResize();

        return () => window.removeEventListener( 'resize', handleResize );
    }, [] );

    useEffect( () =>
    {
        if ( !isMobile )
        {
            return scrollY.onChange( ( current ) =>
            {
                let previous = scrollY.getPrevious();
                let diff = current - previous;
                let newHeight = height.get();
                let newOpacity = opacity.get() - diff * 0.01;
                height.set( clamp( newHeight, 50, 96 ) );
                opacity.set( clamp( newOpacity, 0, 1 ) );
            } );
        }
    }, [height, opacity, scrollY, isMobile] );

    const handleClick = ( item ) =>
    {
        setActiveItemId( item.id );
        const element = document.getElementById( item.id );
        if ( element )
        {
            window.scrollTo( {
                top: element.offsetTop - 100,
                behavior: 'smooth',
            } );
        }
    };

    useEffect( () =>
    {
        const currentItem = navItems.find( ( item ) => path.startsWith( item.link ) );
        if ( currentItem )
        {
            setActiveItemId( currentItem.id );
        }
    }, [path] );

    return (
        <motion.header
            style={{ height, backgroundColor }}
            initial="hidden"
            animate="show"
            variants={container}
            className="md:px-16 px-8 py-4 fixed z-10 w-full flex items-center justify-between shadow-lg bg-black"
        >
            {/* Logo */}
            <Link href={'/'}>
                <Logo />
            </Link>

            {/* Desktop NavMenu */}
            {!isMobile && (
                <motion.ul
                    style={{ opacity }}
                    className="hidden lg:flex items-center justify-evenly gap-8 bg-[#080808] px-8 py-2 rounded-xl"
                >
                    {navItems.map( ( item, index ) => (
                        <motion.li
                            key={index}
                            variants={item}
                            className={`cursor-pointer transition-all duration-150 ease-linear hover:text-white ${activeItemId === item.id
                                ? 'font-medium text-white'
                                : 'font-light text-slate-300'
                                }`}
                            onClick={() => handleClick( item )}
                        >
                            {item.name}
                        </motion.li>
                    ) )}
                </motion.ul>

            )}
            <DrawerComponent />

        </motion.header>
    );
};

export default Navbar;
