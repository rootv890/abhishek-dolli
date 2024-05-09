import About from '@/components/ui_comps/About'
import Collab from '@/components/ui_comps/Collab'
import Connect from '@/components/ui_comps/Connect'
import Footer from '@/components/ui_comps/Footer'
import Hero from '@/components/ui_comps/Hero'
import Interests from '@/components/ui_comps/Interests'
import Projects from '@/components/ui_comps/Projects'
import Divider from '@/lib/Divider'
import React from 'react'

const Home = () => {
	return (
		<div className="flex flex-col justify-center gap-32 items-center">
			<Hero />
			<About />
			<Divider className={'my-12'} />
			<Interests />
			<Divider className={'my-12'} />
			<Projects />
			<Divider className={'my-12'} />
			<Connect />
			<Divider className={'my-12'} />
			<Collab />
			<Divider className={'my-12'} />
			<Footer />
		</div>
	)
}

export default Home
