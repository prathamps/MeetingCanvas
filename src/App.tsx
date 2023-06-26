import { useEffect, useState } from "react"
import ImageCarousel, {
	ImageType,
} from "./components/ImageCarousel/ImageCarousel"
import "./App.css"

export default function App() {
	const [images, setImages] = useState<ImageType[]>()

	useEffect(() => {
		setImages(
			Array.from(Array(10).keys()).map((id) => ({
				id,
				url: `https://picsum.photos/1000?random=${id}`,
			}))
		)
	}, [])

	return (
		<div className="App">
			<div className="ar-carousal">
				<ImageCarousel images={images} />
			</div>
		</div>
	)
}
