import React, { useEffect, useRef, useState } from "react"

import Video from "./Video"
import { motion } from "framer-motion"

import "./VideoCarousel.css"

export type MediaType = { id: number; url: string; type: string }

const VideoCarousel: React.FC<{ media?: MediaType[] }> = ({ media }) => {
	const [selectedMediaIndex, setSelectedMediaIndex] = useState(0)
	const [selectedMedia, setSelectedMedia] = useState<MediaType | undefined>()
	const carouselItemsRef = useRef<HTMLDivElement[]>([])
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		// Update the selected media when the media prop changes
		if (media && media.length > 0) {
			carouselItemsRef.current = carouselItemsRef.current.slice(0, media.length)
			setSelectedMedia(media[0])
		}
	}, [media])

	useEffect(() => {
		gestureHandler()

		console.log(visible)
	}, [])

	useEffect(() => {
		console.log("gesture Handler 500ms")
		setVisible(false)
		// Update the selected media and visible state on an interval
		const interval = setInterval(gestureHandler, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [selectedMediaIndex])

	useEffect(() => {
		setVisible(false)
		const interval = setInterval(() => {
			setVisible(true)
		}, 200)

		return () => {
			clearInterval(interval)
		}
	}, [selectedMediaIndex])

	const gestureHandler = () => {
		handleRightClick()
	}

	const handleSelectedMediaChange = (newIdx: number) => {
		console.log(visible)
		setVisible(true)
		if (media && media.length > 0) {
			setSelectedMedia(media[newIdx])
			if (carouselItemsRef.current[newIdx]) {
				carouselItemsRef.current[newIdx].scrollIntoView({
					inline: "center",
					behavior: "smooth",
					block: "nearest",
				})
			}
		}
	}

	const handleRightClick = () => {
		setVisible(false)

		if (media && media.length > 0) {
			let newIdx = selectedMediaIndex + 1
			console.log("current index", selectedMediaIndex)
			if (newIdx >= media.length) {
				newIdx = 0
			}
			console.log("new index", newIdx)
			setSelectedMediaIndex(newIdx)
			handleSelectedMediaChange(newIdx)
		}
	}

	return (
		<motion.div className="carousel-container">
			<motion.div className="selected-media-container">
				{visible && selectedMedia && selectedMedia.type === "video" && (
					<Video url={selectedMedia.url} />
				)}
				{!visible && (
					<div className="video-card-placeholder">
						<div className="placeholder"></div>
					</div>
				)}
			</motion.div>
			<motion.div className="carousel">
				<div className="carousel__media">
					{media &&
						media.map((item, idx) => (
							<div
								onClick={() => handleSelectedMediaChange(idx)}
								key={item.id}
								className={`carousel__media-item ${
									selectedMediaIndex === idx
										? "carousel__media-item-selected"
										: ""
								}`}
								ref={(el) => (carouselItemsRef.current[idx] = el)}
							>
								{item.url}
							</div>
						))}
				</div>
			</motion.div>
			<div className="photo_bar">
				<svg
					width="170"
					height="13"
					viewBox="0 0 170 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="170" height="7" rx="6.5" fill="#CCC8C5" />
				</svg>
			</div>
		</motion.div>
	)
}

export default VideoCarousel