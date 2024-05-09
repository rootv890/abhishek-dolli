import React from 'react'

/* Props
type
title
subTitle
p1
 p2
*/
const Container = ({ type, title, subTitle, p1, p2, children }) => {
	return (
		<div
			className={`lg:grid mx-auto lg:grid-cols-6  max-lg:space-y-4  lg:space-x-12 lg:w-[72rem] `}
		>
			{/* LEFT Side */}
			<div className=" lg:col-span-2 flex  w-fit  justify-end  lg:text-right lg:justify-end ">
				<div className="brand-gradient-linear relative ">
					{type == 'main' ? (
						<h2 className=" container-h2  text-6xl font-medium">{title}</h2>
					) : (
						<h3 className="  text-4xl font-medium">{title}</h3>
					)}
					<span className="flex w-full justify-end pr-8 text-sm">
						{subTitle}
					</span>
				</div>
			</div>

			{/* RIGHT Side */}
			<div className=" relative col-span-4    flex flex-1 flex-col items-start gap-3  text-xl leading-8  text-grey-300">
				<p className="max-w-3xl">{p1}</p>
				{p2 && <br className="my-px" />}
				{p2 && <p className="max-w-3xl">{p2}</p>}
				<>{children}</>
			</div>
		</div>
	)
}

export default Container
