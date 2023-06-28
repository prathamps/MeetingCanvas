import { useEffect, useState } from "react"
import ImageCarousel, {
	ImageType,
} from "./components/ImageCarousel/ImageCarousel"
import "./App.css"
import Webcam from "react-webcam"
import { motion } from "framer-motion"

import Timeline from "./components/Timeline/Timeline"

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
			<Webcam mirrored={true} width={1280} height={720} />
			<div className="video-display">
				{/* <div className="ar-carousal">
					{visible ? <ImageCarousel images={images} /> : ""}
				</div> */}
			</div>
			<div className="timeline">
				<Timeline />
			</div>
		</div>
	)
}
