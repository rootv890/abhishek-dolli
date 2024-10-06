'use client';
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import "plyr-react/plyr.css";

// Dynamically import Plyr with SSR disabled
const Plyr = dynamic( () => import( "plyr-react" ), { ssr: false } );
const VideoPlayer = ( { videoId, className } ) =>
{
    return (
        <div className={className ? className : ''}
        >
            <Plyr

                options={{
                    volume: 0.1,
                    autoplay: false,
                    controls: ["play-large", "current-time", "mute", "fullscreen",], // Customize controls
                }}
                source={{
                    type: "video",
                    sources: [
                        {
                            src: [videoId], // YT Video ID
                            provider: "youtube",
                        },
                    ],
                }}
                onReady={() =>
                {
                    console.log( 'Video Ready!' );
                }}
            />
        </div >
    );
};

export default VideoPlayer;
