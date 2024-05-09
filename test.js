const findWorks = (works, tag) => {
	if (tag === 'all') return works
	return works.filter(work => work.tag === tag)
}

const works = [
	{
		artist: 'Video Editing 00',
		tag: 'video',
		art: 'https://images.unsplash.com/photo-1711419397450-476643e9020a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		artist: 'Others Project 01',
		tag: 'others',
		art: 'https://images.unsplash.com/photo-1616696695535-98369e260e7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'
	},
	{
		artist: 'Video Editing 02',
		tag: 'video',
		art: 'https://images.unsplash.com/photo-1706625462068-37cf2faa9fbd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
	},
	{
		artist: 'Graphic Design 01',
		tag: 'graphic-design',
		art: 'https://images.unsplash.com/photo-1550263305-c8851928f1f5?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		artist: 'Graphic Design 02',
		tag: 'graphic-design',
		art: 'https://images.unsplash.com/photo-1711419397450-476643e9020a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		artist: 'Others Project 01',
		tag: 'others',
		art: 'https://images.unsplash.com/photo-1616696695535-98369e260e7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'
	},
	{
		artist: 'Video Editing 03',
		tag: 'video',
		art: 'https://images.unsplash.com/photo-1706625462068-37cf2faa9fbd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D'
	},
	{
		artist: 'Graphic Design 03',
		tag: 'graphic-design',
		art: 'https://images.unsplash.com/photo-1550263305-c8851928f1f5?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}
]
const menus = [
	{
		name: 'All',
		index: 0,
		active: true,
		works: findWorks(works, 'all')
	},
	{
		name: 'Video Editing',
		active: false,
		index: 1,
		works: findWorks(works, 'video')
	},
	{
		name: 'Graphic Design',
		active: false,
		index: 2,
		works: findWorks(works, 'graphic-design')
	},
	{
		name: 'Others',
		active: false,
		index: 3,
		works: findWorks(works, 'others')
	}
]

// console.log('--------ALL--------')
// console.log(findWorks(works, 'all'))
// console.log('--------Videos--------')
// console.log(findWorks(works, 'video'))
// console.log('---------Graphic Design---------')
// console.log(findWorks(works, 'graphic-design'))
// console.log('---------Others---------')
// console.log(findWorks(works, 'others'))

console.log('--------ALL--------')
console.log(menus[3].works)
