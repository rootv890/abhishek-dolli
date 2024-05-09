import Image from 'next/image'
import Container from '@/lib/Container'
import React from 'react'
import { FaStarOfLife } from 'react-icons/fa'
import { Divide } from 'lucide-react'
import Divider from '@/lib/Divider'

const tools = [
	{
		name: 'After Effect',
		icon: '/tools/ae.svg',
		id: 1
	},
	{
		name: 'Photoshop',
		icon: '/tools/ps.svg',
		id: 2
	},
	{
		name: 'Figma',
		icon: '/tools/figma.svg',
		id: 3
	},
	{
		name: 'Notion',
		icon: '/tools/notion.svg',
		id: 4
	},
	{
		name: 'Premiere Pro',
		icon: '/tools/pr.svg',
		id: 5
	}
]

const About = () => {
	return (
		<section
			id="about"
			className=" mx-auto flex max-h-screen flex-col gap-16 items-center justify-center px-20"
		>
			{/* Container */}
			{/* <h1 className="text-6xl">HELLO</h1> */}
			<Container
				type="main"
				title="About Me"
				subTitle="and My Tools"
				p1={`Greetings! I’m Abhishek Dolli, a dedicated video editor with a passion for weaving narratives and creating visual experiences that resonate deeply with audiences.`}
				p2={`My journey into the realm of video editing started as a fascination with storytelling and a desire to harness the power of imagery to evoke emotion and provoke thought. What began as a hobby quickly evolved into a profession as I immersed myself in the art and craft of editing.`}
			/>
			<Container
				type="branch"
				title="Tools  I Use "
				p1={`I use industry-standard creative software like After Effects and Premiere Pro for video editing and motion graphics, and Photoshop for thumbnails and posters. Notion keeps my projects organized, and Figma helps me design efficiently.`}
			>
				<div className="flex h-fit w-fit gap-6 mt-4 rounded-[20px] border-[0.2px] border-gray-300/50 bg-[#0a0a0a] px-9 py-3">
					{tools.map(tool => {
						return (
							<Image
								className="aspect-square hover:scale-150 origin-bottom transition-all duration-200  ease-in-out-sine h-[32px] w-[32px]"
								key={tool.id}
								width={32}
								height={30}
								src={tool.icon}
								alt={tool.name}
							/>
						)
					})}
				</div>
			</Container>
		</section>
	)
}

export default About
