'use client'

import Logo from '@/lib/Logo'
import Link from 'next/link'
import { motion, motionValue, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'
import { container, item } from '@/lib/animation'
import DrawerComponent from '@/lib/DrawerComponent'

const navItems = [
	{
		name: 'Home',
		link: '/',
		id: 'home'
	},
	{
		name: 'About',
		link: '/#about',
		id: 'about'
	},
	{
		name: 'Interests',
		link: '/#interests',
		id: 'interests'
	},
	{
		name: 'Projects',
		link: '/#projects',
		id: 'projects'
	},
	{
		name: 'Contact',
		link: '/#contact',
		id: 'contact'
	}
]

let clamp = (number, min, max) => Math.min(Math.max(number, min), max)

const Navbar = () => {
	const [activeItemId, setActiveItemId] = useState(null)

	const path = usePathname()
	const { scrollY } = useScroll()

	// let height = useTransform(scrollY, value => Math.max(120 - value * 0.1, 50))

	let height = motionValue(96)
	let opacity = motionValue(1)
	let backgroundColor = '#000000'

	useEffect(() => {
		return scrollY.onChange(current => {
			let previous = scrollY.getPrevious()
			let diff = current - previous
			let newHeight = height.get() - diff
			let newOpacity = opacity.get() - diff * 0.01
			height.set(clamp(newHeight, 50, 96))
			opacity.set(clamp(newOpacity, 0, 1))
		})
	}, [height, opacity, scrollY])

	const handleClick = item => {
		setActiveItemId(item.id)
		const element = document.getElementById(item.id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	// Set the initial active item based on the current URL
	useEffect(() => {
		const currentItem = navItems.find(item => path.startsWith(item.link))

		if (currentItem) {
			setActiveItemId(currentItem.id)
		}
	}, [path])
	return (
		<motion.header
			style={{
				height: height,
				backgroundColor: backgroundColor
			}}
			initial="hidden"
			animate="show"
			variants={container}
			className="md:px-16 h-24  px-8 py-10 inset-x-0 w-full  fixed z-10 flex items-center lg:justify-around justify-between shadow-lg "
		>
			{/* Logo */}
			<Link href={'/'}>
				<Logo />
			</Link>
			{/* NavMenu */}
			<motion.ul
				style={{ opacity: opacity }}
				className=" hidden lg:flex items-center justify-evenly gap-16 rounded-[20px]    bg-[#080808] px-9 py-3"
			>
				{navItems.map((item, index) => (
					<motion.li
						variants={item}
						className={`cursor-pointer transition-all duration-100 ease-linear  hover:text-white
              ${
								activeItemId === item.id
									? 'font-medium text-white '
									: 'font-thin text-slate-300'
							}`}
						key={index}
						onClick={() => handleClick(item)}
					>
						{item.name}
					</motion.li>
				))}
			</motion.ul>
			<motion.div>
				<DrawerComponent />
			</motion.div>
		</motion.header>
	)
}

export default Navbar
