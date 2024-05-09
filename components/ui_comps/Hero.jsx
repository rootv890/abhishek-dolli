'use client'

import React from 'react'
import Span from '@/lib/Span'
import { RiScrollToBottomLine } from 'react-icons/ri'
import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import { container, item } from '@/lib/animation'
const Hero = () => {
	return (
		<motion.section
			variants={container}
			initial="hidden"
			animate="show"
			// Stagger children

			id="home"
			className=" relative  flex h-screen pt-12 w-full flex-col items-center justify-end pb-44"
		>
			{/* 6 Icons/Photos with 80x80px floating aroung hero image */}
			<motion.div
				variants={item}
				className="min-w-full text-center leading-[0.8] pt-14 px-12  absolute flex items-start justify-center -z-20 top-[100px] h-[calc(100vh-100px)]"
			>
				<h1 className="text-[20rem] font-medium">ABHISHEK DOLLI</h1>
			</motion.div>

			{/* Image in Background */}
			<motion.div variants={item} className="absolute inset-0  -z-10">
				<Image
					src="/hero.png"
					alt="Hero"
					width={560}
					height={720}
					className="object-cover -z-10  object-center absolute inset-0 left-1/2 -translate-x-1/2 top-[100px] "
				/>
				<Image
					src="/hero.png"
					alt="Hero"
					width={560}
					height={720}
					className="object-cover  glow -z-20 shadowfilter object-center absolute inset-0 left-1/2 -translate-x-1/2 top-[100px] "
				/>
				<div
					className="absolute h-screen w-screen inset-0 bg-gradient-to-t from-20%  from-black/100  via-black/60 to-75%
				"
				></div>
			</motion.div>
			<motion.h1
				variants={item}
				className="max-w-3xl md:leading-snug  max-lg:px-8 text-center text-4xl font-light"
			>
				Freelance <Span>Video Editor </Span> and <Span>Thumbnail Designer</Span>{' '}
				based in India. I love editing documentery style videos. Feel free to
				checkout My Works.
			</motion.h1>

			{/* Scroll Icon */}
			<motion.div
				variants={item}
				className="absolute bottom-24 left-1/2 -translate-x-1/2"
			>
				<RiScrollToBottomLine className="text-3xl animate-bounce transition-all text-zinc-300" />
			</motion.div>
		</motion.section>
	)
}

export default Hero
