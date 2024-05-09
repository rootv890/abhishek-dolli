'use client'

import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { socials } from './Socials'
import Divider from './Divider'

const DrawerComponent = ({ text = 'Connect', className }) => {
	return (
		<Drawer>
			<DrawerTrigger
				className={`  ${
					!className
						? 'bg-transparent rounded-full border-2 hover:border-[1px] hover:bg-brand-600 w-24 h-12  border-brand-100  transition-all duration-100 ease-linear'
						: className
				} `}
			>
				{text}
				<DrawerContent>
					<div className="mx-auto w-fulmax-w-sm">
						<DrawerHeader
							className={' flex flex-col text-xl justify-center items-center '}
						>
							<DrawerTitle>
								<span className="font-medium  brand-gradient-linear  text-2xl">
									Connect with Me
								</span>
							</DrawerTitle>
							<DrawerDescription>
								<span className="text-xl">
									{' '}
									Connect with me on social media or send me an email
								</span>{' '}
							</DrawerDescription>
						</DrawerHeader>
						<div className=" flex gap-3 mt-8">
							{socials.map((social, idx) => {
								// Only Icon and Link
								return (
									<div
										className="flex hover:bg-brand-400 hover:text-black transition-all duration-300 ease-in-out h-12 flex-row w-full items-center justify-center gap-2 rounded-full"
										key={idx}
									>
										<a
											href={social.url}
											target="_blank"
											className=" group-hover:text-white   font-thin  text-zinc-300 group-hover:font-medium transition-all duration-300 ease-in-out "
										>
											<span className="text-2xl group gap-2 w-6 h-6   cursor-pointer font-medium ">
												{social.icon}
											</span>
										</a>
									</div>
								)
							})}
						</div>
						<Divider className={'my-4'} />
						<DrawerFooter>
							<a
								className="w-full"
								href="mailto:dolliabhi10@gmail.com?subject= Project Brief&body=Hello Abhishek, I am interested in working with you on a project. Here is the brief of the project."
								target="_blank"
							>
								<Button
									className="bg-brand-600 w-full rounded-full text-white hover:bg-brand-500 transition-all duration-300 ease-in-out"
									size="default"
								>
									Send Email
								</Button>
							</a>
						</DrawerFooter>
					</div>
				</DrawerContent>
				<DrawerOverlay />
			</DrawerTrigger>
		</Drawer>
	)
}

export default DrawerComponent
