import { useEffect, useState } from "react"
import ImageCarousel, {
	ImageType,
} from "./components/ImageCarousel/ImageCarousel"
import "./App.css"
import Webcam from "react-webcam"
import { motion } from "framer-motion"

import Timeline from "./components/Timeline/Timeline"
import VideoCarousel, {
	MediaType,
} from "./components/VideoCarousel/VideoCarousel"
import NetworkDots from "./components/NetworkDots/NetworkDots"
import NetworkGraph from "./components/NetworkGraph/NetworkGraph"
import Butterfly from "./components/Butterfly/Butterfly"
import Saahaya from "./components/Saahaya/Saahaya"
import Toastmasters from "./components/Toastmasters/Toastmasters"
import Personalities from "./components/Personalities/Personalities"

export default function App() {
	const [images, setImages] = useState<ImageType[]>()
	const [media, setMedia] = useState<MediaType[]>([])
	const [initialMedia, setInitialMedia] = useState<MediaType[]>([])

	const [networkDots, setNetworkDots] = useState(false)
	const [butterfly, setButterfly] = useState(false)
	const [timeline, setTimeline] = useState(false)
	const [initialVideoCarousel, setInitialVideoCarousel] = useState(false)
	const [personalities, setPersonalities] = useState(false)
	const [imageCarousel, setImageCarousel] = useState(false)
	const [videoCarousel, setVideoCarousel] = useState(false)
	const [networkGraph, setNetworkGraph] = useState(false)
	const [saahaya, setSaahaya] = useState(false)
	const [toastmasters, setToastmasters] = useState(false)

	useEffect(() => {
		setImages(
			Array.from(Array(10).keys()).map((id) => ({
				id,
				url: `https://picsum.photos/1000?random=${id}`,
				type: "image",
			}))
		)
		setInitialMedia([
			{ id: 1, url: "/image1/1.jpg", type: "image", thumbnail: "" },
			{ id: 2, url: "/image1/2.jpg", type: "image", thumbnail: "" },
			{ id: 3, url: "/image1/3.jpg", type: "image", thumbnail: "" },
			{ id: 4, url: "/image1/4.jpg", type: "image", thumbnail: "" },
			{ id: 5, url: "/image1/5.jpg", type: "image", thumbnail: "" },
			// { id: 2, url: "/video/3.mp4", type: "video" },
		])
		setMedia([
			{ id: 0, url: "/video/1.jpg", type: "image", thumbnail: "" },
			{ id: 1, url: "/video/2.jpg", type: "image", thumbnail: "" },
			// { id: 2, url: "/video/3.mp4", type: "video" },
		])

		setTimeout(() => {
			setNetworkDots(true)
		}, 4000)

		setTimeout(() => {
			setNetworkDots(false)
			setButterfly(true)
		}, 53000)

		setTimeout(() => {
			setButterfly(false)
			setTimeline(true)
		}, 123000)
		setTimeout(() => {
			setTimeline(false)
		}, 130000)
		setTimeout(() => {
			setTimeline(false)
			setInitialVideoCarousel(true)
		}, 130000)
		setTimeout(() => {
			setInitialVideoCarousel(false)
		}, 145000)
		setTimeout(() => {
			setPersonalities(true)
		}, 203000)

		setTimeout(() => {
			setPersonalities(false)
			setImageCarousel(true)
		}, 230000)
		setTimeout(() => {
			setImageCarousel(false)
		}, 250000)
		setTimeout(() => {
			setImageCarousel(false)
			setVideoCarousel(true)
		}, 255000)

		setTimeout(() => {
			setVideoCarousel(false)
			setNetworkGraph(true)
		}, 400000)

		setTimeout(() => {
			setNetworkGraph(false)
			setSaahaya(true)
		}, 430000)

		setTimeout(() => {
			setSaahaya(false)
			setToastmasters(true)
		}, 530000)

		setTimeout(() => {
			setToastmasters(false)
		}, 545000)
	}, [])

	return (
		<div className="">
			<Webcam mirrored={true} width={1280} height={720} />
			{networkDots ? <NetworkDots /> : ""}

			{butterfly ? <Butterfly /> : ""}
			{timeline ? (
				<div className="timeline">
					<Timeline />
				</div>
			) : (
				""
			)}
			{initialVideoCarousel ? <VideoCarousel media={initialMedia} /> : ""}
			{personalities ? <Personalities /> : ""}
			{imageCarousel ? <ImageCarousel images={images} /> : ""}

			{videoCarousel ? <VideoCarousel media={media} /> : ""}

			{networkGraph ? <NetworkGraph /> : ""}
			{saahaya ? <Saahaya /> : ""}
			{toastmasters ? <Toastmasters /> : ""}
		</div>
	)
}
