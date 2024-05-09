import React from 'react'

const Footer = () => {
	return (
		<footer className="h-20  w-full bg-[#090909]">
			<div className="flex justify-center flex-col items-center h-full">
				<p className="text-white text-sm">© 2024 Abhishek Dolli</p>
				<p>
					Built by{' '}
					<a
						className="text-sm hover:underline hover:text-brand-200 transition-all duration-300 ease-in-out cursor-pointer"
						href="https://www.instagram.com/yourise_lab/"
						target="_blank"
						rel="noopener noreferrer"
					>
						rootv890
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
