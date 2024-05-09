const container = {
	hidden: { opacity: 0, y: 100 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.8,
			type: 'linear'
		}
	}
}

const item = {
	hidden: { opacity: 0, y: 200 },
	show: { opacity: 1, y: 0, duration: 1 }
}

export { container, item }

/** TODO
 * 1. Smooth transition
 * 2. Add more animations for different components
 * 3. Loading Page
 *
 */
