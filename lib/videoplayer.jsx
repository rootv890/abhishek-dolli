import Video from 'next-video'
import Image from 'next/image'

// const VideoPlayer = ({ VideoSrc, ImageSrc }) => {
// 	return (
// 		<div className="md:h-[312px] rounded-2xl aspect-video sm:w-6x">
// 			<Video
// 				style={{
// 					'--aspect-ratio': '4/3',
// 					'border-radius': '1rem'
// 				}}
// 				src={VideoSrc}
// 			></Video>
// 		</div>
// 	)
// }

import MuxPlayer from '@mux/mux-player-react'

const VideoPlayer = ({ playbackId }) => {
	return (
		<MuxPlayer
			streamType="on-demand"
			playbackId={playbackId}
			metadataVideoTitle="Cuper Caps"
			metadataViewerUserId="Cuper_Caps"
			primaryColor="#FFFFFF"
			secondaryColor="#000000"
			controls={true}
			autoplay={false}
			loop={true}
			accentColor="#9654f4"
		/>
	)
}

export default VideoPlayer
