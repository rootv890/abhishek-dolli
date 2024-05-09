const findWorks = (works, tag) => {
	if (tag === 'all') return works
	return works.filter(work => work.tag === tag)
}

const works = [
	{
		name: 'China Population',
		tag: 'video',
		width: 540,
		height: 675,
		video: 'videos/1_china.mp4',
		image: '/videos/china_population.jpg',
		url: 'https://www.youtube.com/watch?v=IzQOoTh7CI8'
	},
	{
		name: 'China President',
		tag: 'video',
		width: 540,
		height: 675,
		video: 'KbI1ri6laejA9901UgY5QuDhpRZglnBp2ePV02Yg3GD02I',
		image: '/videos/china_president.jpg',
		url: 'https://www.youtube.com/watch?v=epthrkWtbsM'
	},

	{
		name: 'Rise of XI',
		tag: 'video',
		width: 540,
		height: 675,
		video: 'KbI1ri6laejA9901UgY5QuDhpRZglnBp2ePV02Yg3GD02I',
		image: '/videos/xi.png',
		url: ' https://youtu.be/dfZByLh-jDM'
	},
	{
		name: 'Complan Ad 2021',
		tag: 'video',
		width: 540,
		height: 675,
		image: '/videos/drinks.jpg',
		video: 'dTN3kGHmdFtfya7wSEvgMLaxYBDjAHMqntpIvhvR81c',
		url: 'https://www.youtube.com/shorts/RdjZ-_f4dZw'
	},
	{
		name: 'Encuperate',
		tag: 'video',
		width: 540,
		height: 675,
		image: '/videos/encuperate.jpg',
		video: '1IWkn53mFeBCwGuDMEDyXtVQn74m3eMVUEYaa5ZlViE',
		url: 'https://youtube.com/shorts/3UkEx-fK_RE?feature=share'
	},

	{
		name: 'Silicon Valley',
		tag: 'video',
		width: 540,
		height: 675,

		video: 'KbI1ri6laejA9901UgY5QuDhpRZglnBp2ePV02Yg3GD02I',
		image: '/videos/silicon_valley.jpg',
		url: 'https://www.youtube.com/watch?v=dxgtc7K_3fA&ab_channel=RoyalChallengersBengaluru'
	},
	{
		name: 'Top Model',
		tag: 'poster',
		width: 540,
		height: 675,
		video: false,
		image: '/posters/top-model.png'
	},
	{
		name: 'Virat Kohli',
		tag: 'poster',
		width: 540,
		height: 675,
		video: false,
		image: '/posters/virat.png'
	},
	{
		name: 'Boxing',
		tag: 'poster',
		width: 540,
		height: 675,
		video: false,
		image: '/posters/boxing.png'
	},
	{
		name: 'The Book',
		tag: 'poster',
		width: 540,
		height: 675,
		video: false,
		image: '/posters/book.png'
	},
	{
		name: 'Ram Mandir',
		tag: 'poster',
		width: 540,
		height: 675,
		video: false,
		image: '/posters/ram-mandir.png'
	},
	{
		name: 'Hacking',
		tag: 'thumbnail',
		video: false,
		width: 540,
		height: 320,
		image: '/thumbnails/crime.webp'
	},
	{
		name: 'Commitment',
		tag: 'thumbnail',
		video: false,
		width: 540,
		height: 320,
		image: '/thumbnails/commitment.png'
	},
	{
		name: `Don't Detox`,
		tag: 'thumbnail',
		video: false,
		width: 540,
		height: 320,
		image: '/thumbnails/detox.png'
	},
	{
		name: `Cricket Now and Then`,
		tag: 'thumbnail',
		video: false,
		width: 540,
		height: 320,
		image: '/thumbnails/cricket.png'
	},
	{
		name: `Sleep Theory`,
		tag: 'thumbnail',
		video: false,
		width: 540,
		height: 320,
		image: '/thumbnails/sleep.png'
	},

	{
		name: 'Staggered',
		video: false,
		tag: 'others',
		width: 540,
		height: 675,
		image: '/others/staggerd.png'
	},
	{
		name: 'CA Recreation',
		video: false,
		tag: 'others',
		width: 540,
		height: 675,
		image: '/others/ca_recreation.png'
	},
	{
		name: 'Nike Flash Cards',
		video: false,
		tag: 'others',
		width: 540,
		height: 675,
		image: '/others/nike-cards.png'
	}
]
const menus = [
	// {
	// 	name: 'All',
	// 	index: 0,
	// 	active: true,
	// 	works: findWorks(works, 'all')
	// },
	{
		name: 'Video Editing',
		active: false,
		index: 0,
		works: findWorks(works, 'video')
	},
	{
		name: 'Posters',
		active: false,
		index: 1,
		works: findWorks(works, 'poster')
	},
	{
		name: 'Thumbnails',
		active: false,
		index: 2,
		works: findWorks(works, 'thumbnail')
	},
	{
		name: 'Others',
		active: false,
		index: 3,
		works: findWorks(works, 'others')
	}
]

export { works, menus, findWorks }
