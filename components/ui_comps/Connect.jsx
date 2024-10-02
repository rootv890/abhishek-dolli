import Container from '@/lib/Container';
import Image from 'next/image';
import React from 'react';
import { socials } from '@/lib/Socials';

const Connect = () =>
{
    return (
        <section
            id="contact"
            className=' mx-auto w-full  flex max-h-screen flex-col items-center justify-center px-20"'
        >
            <Container type="main" title={'Socials'} subTitle={'Place to Connect'}>
                <ul className="space-y-6 w-full relative   ">
                    {socials.map( ( social, idx ) =>
                    {
                        const index = idx + 1;

                        return (
                            <li
                                className="text-2xl group gap-2  cursor-pointer font-medium "
                                key={idx}
                            >
                                <div className="inline-flex gap-2 group items-center justify-center">
                                    <span className="group-hover:text-white font-thin  text-zinc-300 group-hover:font-medium transition-all duration-300 ease-in-out">
                                        {social.icon}
                                    </span>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        className=" group-hover:text-white font-thin  text-zinc-300 group-hover:font-medium transition-all duration-300 ease-in-out "
                                    >
                                        {social.name}
                                    </a>
                                </div>
                                <div
                                    className={`absolute hidden lg:group-hover:flex top-0 rounded-lg right-0  h-52 w-80 transition-all duration-300 ease-in-out  shadow-brand-500 shadow-2xl
								${index % 2 == 0 ? `rotate-12` : `-rotate-12`}
								`}
                                >
                                    <Image
                                        alt={social.name}
                                        src={social.imageUrl}
                                        className=" w-full  h-full object-cover rounded-2xl transition-all duration-300 ease-in-out"
                                        layout="fill" // Important for Next.js Image
                                    />
                                </div>
                            </li>
                        );
                    } )}
                </ul>
            </Container>
        </section>
    );
};

export default Connect;
