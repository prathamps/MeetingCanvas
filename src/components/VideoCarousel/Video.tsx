import React from "react"

interface VideoProps {
	url: string
}

const Video: React.FC<VideoProps> = ({ url }) => {
	return (
		<div className="video-card">
			<video className="selected-media" autoPlay>
				<source src={url} type="video/mp4" />
			</video>
		</div>
	)
}

export default Video
