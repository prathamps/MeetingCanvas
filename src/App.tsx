import { useEffect, useState } from "react"
import ImageCarousel, {
	ImageType,
} from "./components/ImageCarousel/ImageCarousel"
import "./App.css"
import Webcam from "react-webcam"
import { motion } from "framer-motion"

import backgroundchecked from "/backgroundchecked.svg"
import timelinebar from "/timelinebar.svg"

export default function App() {
	const [images, setImages] = useState<ImageType[]>()
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		setImages(
			Array.from(Array(10).keys()).map((id) => ({
				id,
				url: `https://picsum.photos/1000?random=${id}`,
			}))
		)
		setTimeout(() => {
			setVisible(true)
		}, 10000)
	}, [])

	return (
		<div className="App">
			{/* <div className="video-display">
				<Webcam mirrored={true} />
				<div className="ar-carousal">
					{visible ? <ImageCarousel images={images} /> : ""}
				</div>
			</div> */}
			{/* <div className="timeline-container">
				<div className="timeline-background-container">
					<img src={backgroundchecked} />
				</div>

				<motion.div
					className="timeline-bar-container"
					animate={{
						x: 100,
						y: 0,
						scale: 1,
						rotate: 0,
					}}
				>
					<img src={timelinebar} />
				</motion.div>
			</div> */}
			<div
				className="timeline-container"
				style={{
					backgroundImage: `url(${backgroundchecked})`,
					overflow: "hidden",
				}}
			>
				<motion.div
					className="timeline-bar-container "
					animate={{
						x: ["-1230%", "0%"],
						top: ["28%", "42%"],
					}}
					transition={{ duration: 10, ease: [0.65, 0.05, 0.36, 1] }}
				>
					<motion.img
						src={timelinebar}
						animate={{
							width: ["1300%", "500%"], // Increase width gradually and then return to initial size
							height: ["1300%", "500%"], // Increase height gradually and then return to initial size
						}}
						transition={{ duration: 9, ease: [0.65, 0.05, 0.36, 1] }}
					/>
				</motion.div>
			</div>
		</div>
	)
}
