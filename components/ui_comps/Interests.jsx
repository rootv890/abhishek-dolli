import Container from '@/lib/Container';
import Image from 'next/image';
import React from 'react';

const interests = [
    {
        name: 'Videography',
        imageUrl: '/interests/videography.png'
    },
    {
        name: 'Video Editing',
        imageUrl: '/interests/editing.png'
    },
    {
        name: 'Technology',
        imageUrl: '/interests/tech.jpeg'
    },
    {
        name: '...'
    },
    {
        name: 'Novels and Books',
        imageUrl: '/interests/books.png'
    },
    {
        name: 'Fitness',
        imageUrl: '/interests/fitness.png'
    }
];

const Interests = () =>
{
    return (
        <section
            id="interests"
            className=' mx-auto w-full  flex max-h-screen flex-col items-center justify-center px-20"'
        >
            <Container type="main" title={'Interests'} subTitle={'And Niches'}>
                <ul className="space-y-6 w-full relative   ">
                    {interests.map( ( interest, idx ) =>
                    {
                        const index = idx + 1;

                        return (
                            <li
                                className="text-2xl group w-full   cursor-pointer font-medium "
                                key={idx}
                            >
                                <p className=" group-hover:text-white font-thin  text-zinc-300 group-hover:font-medium transition-all duration-300 ease-in-out ">
                                    {interest.name}
                                </p>
                                <div
                                    className={`absolute hidden ${interest.name === '...'
                                            ? `hidden`
                                            : 'lg:group-hover:flex top-0 rounded-lg right-0  h-52 w-80 transition-all duration-300 ease-in-out  shadow-brand-500 shadow-2xl'
                                        }
								${index % 2 == 0 ? `rotate-12` : `-rotate-12`}
								`}
                                >
                                    {/* if name = '...' no image */}

                                    <Image
                                        alt={interest.name}
                                        src={interest.imageUrl}
                                        className={`w-full  h-full object-cover rounded-2xl transition-all duration-300 ease-in-out

										`}
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

export default Interests;
