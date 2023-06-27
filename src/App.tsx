import { useEffect, useState } from "react"
import ImageCarousel, {
	ImageType,
} from "./components/ImageCarousel/ImageCarousel"
import "./App.css"
import Webcam from "react-webcam"

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
			<div className="video-display">
				<Webcam mirrored={true} />
				<div className="ar-carousal">
					{visible ? <ImageCarousel images={images} /> : ""}
				</div>
			</div>
		</div>
	)
}
