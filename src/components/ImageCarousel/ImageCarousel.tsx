import React, { useEffect, useRef, useState } from "react"
import "./ImageCarousel.css"
import { getGestureDetails } from "../../api/carouselFunctions"

export type ImageType = { id: number; url: string }

const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)
	const [selectedImage, setSelectedImage] = useState<ImageType | undefined>()
	const carouselItemsRef = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		if (images && images.length > 0) {
			carouselItemsRef.current = carouselItemsRef.current.slice(
				0,
				images.length
			)
			setSelectedImage(images[0])
		}
	}, [images])
	useEffect(() => {
		gestureHandler()
	}, [])
	useEffect(() => {
		console.log("gesture Handler 500ms")
		const interval = setInterval(gestureHandler, 500)

		return () => {
			clearInterval(interval)
		}
	}, [selectedImageIndex])

	const gestureHandler = () => {
		const gestureDetails = getGestureDetails()

		if (gestureDetails && gestureDetails[1] === true) {
			if (gestureDetails[0] === "Right") {
				handleRightClick()
			}
		}
	}

	const handleSelectedImageChange = (newIdx: number) => {
		if (images && images.length > 0) {
			setSelectedImage(images[newIdx])
			setSelectedImageIndex(newIdx)
			console.log(selectedImageIndex)
			console.log(newIdx)
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
		if (images && images.length > 0) {
			let newIdx = selectedImageIndex + 1
			console.log("rd", selectedImageIndex)
			if (newIdx >= images.length) {
				newIdx = 0
			}
			console.log("ra", newIdx)
			setSelectedImageIndex(newIdx)
			handleSelectedImageChange(newIdx)
		}
	}

	const handleLeftClick = () => {
		if (images && images.length > 0) {
			let newIdx = selectedImageIndex - 1
			console.log("ld", selectedImageIndex)
			if (newIdx < 0) {
				newIdx = images.length - 1
			}
			console.log("la", newIdx)
			handleSelectedImageChange(newIdx)
		}
	}

	return (
		<div className="carousel-container">
			<div className="selected-image-container">
				<div
					className="selected-image"
					style={{ backgroundImage: `url(${selectedImage?.url})` }}
				/>
			</div>
			<div className="carousel">
				<div className="carousel__images">
					{images &&
						images.map((image, idx) => (
							<div
								onClick={() => handleSelectedImageChange(idx)}
								style={{ backgroundImage: `url(${image.url})` }}
								key={image.id}
								className={`carousel__image ${
									selectedImageIndex === idx ? "carousel__image-selected" : ""
								}`}
								ref={(el) => (carouselItemsRef.current[idx] = el)}
							/>
						))}
				</div>
				{/* <button
					className="carousel__button carousel__button-left"
					onClick={handleLeftClick}
				>
					Prev
				</button>
				<button
					className="carousel__button carousel__button-right"
					onClick={handleRightClick}
				>
					Next
				</button> */}
			</div>
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
		</div>
	)
}

export default ImageCarousel
