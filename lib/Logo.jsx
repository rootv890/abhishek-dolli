import Image from 'next/image'
import React from 'react'

const Logo = () => {
	return (
		<div className="flex gap-4 w-fit group cursor-pointer justify-center items-center">
			<Image
				src={'/profile.png'}
				alt="Profiel image"
				height={56}
				width={56}
				className="group-hover:border-4 border-brand-400/20 transition-all duration-200 ease-in-out-sine   rounded-full"
				priority
				prefix="Abhi"
			/>
			<p className="text-xl  group-hover:text-brand-50  transition-all duration-200 ease-in-out">
				Abhishek Dolli
			</p>
		</div>
	)
}

export default Logo
