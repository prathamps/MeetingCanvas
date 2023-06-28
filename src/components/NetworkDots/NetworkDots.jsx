import React from "react"
import { motion, useAnimation } from "framer-motion"

import background from "/background.svg"
import timelinebar from "/timelinebar.svg"

import "./NetworkDots.css"

const NetworkDots = () => {
	const controls = useAnimation()
	const circlePositions = React.useMemo(
		() =>
			Array.from({ length: 10 }).map(() => ({
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`,
			})),
		[]
	)

	React.useEffect(() => {
		const animateCircles = async () => {
			await Promise.all([
				controls.start({ scale: [1, 1.2, 1] }),
				controls.start(
					{ opacity: 1, scale: 1, transition: { delay: 10 } },
					{ stagger: 0.8 }
				),
			])
		}

		animateCircles()
	}, [])

	const circles = circlePositions.map((position, index) => {
		const isCenterCircle = index === 5
		const circleText = isCenterCircle ? "Present" : ""
		const circleStyle = isCenterCircle ? "center-circle" : "random-circle"
		return (
			<motion.div
				key={index}
				className={`circle ${circleStyle}`}
				initial={{ opacity: 0, scale: 0 }}
				animate={controls}
				style={{
					top: position.top,
					left: position.left,
				}}
			>
				<motion.div
					animate={{
						scale: ["0%", "100%"],
					}}
					transition={{ duration: 1, ease: "easeIn", delay: 5 }}
					className="center-text"
				>
					{circleText}
				</motion.div>
			</motion.div>
		)
	})

	return (
		<motion.div
			className="timeline-container"
			style={{
				backgroundImage: `url(${background})`,
				overflow: "hidden",
			}}
		>
			<motion.div
				animate={{
					scale: ["200%", "100%"],
				}}
				transition={{ duration: 10, ease: [0.65, 0.05, 0.36, 1] }}
				className="network-circle-container"
			>
				<motion.div
					className="circle center-circle"
					initial={{ scale: 1.2 }}
					animate={controls}
				>
					{/* <motion.div className="center-text">Present</motion.div> */}
				</motion.div>
				{circles}
			</motion.div>
		</motion.div>
	)
}

export default NetworkDots
