const {
	FaBehance,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaGithub,
	FaWhatsapp
} = require('react-icons/fa')

const iconCn = 'w-6 h-6'

const socials = [
	{
		name: 'Instagram',
		imageUrl: '/socials/instagram.png',
		icon: <FaInstagram className={iconCn} />,
		url: 'https://www.instagram.com/abhishekdolli_'
	},
	{
		name: 'YouTube',
		imageUrl: '/socials/youtube.png',
		icon: <FaYoutube className={iconCn} />,
		url: 'https://youtube.com/@abhishekdolli'
	},
	{
		name: 'Twitter/X',
		imageUrl: '/socials/twitter.webp',
		icon: <FaTwitter className={iconCn} />,
		url: 'https://twitter.com/abhishek_d16348'
	},
	{
		name: 'Whatsapp',
		imageUrl: '/socials/whatsapp.png',
		icon: <FaWhatsapp className={iconCn} />,
		url: 'https://wa.me/917619640930'
	}
]

export { socials }
