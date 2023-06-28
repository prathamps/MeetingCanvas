import React from "react"
import { motion } from "framer-motion"

import backgroundchecked from "/backgroundchecked.svg"
import timelinebar from "/timelinebar.svg"

import "./Timeline.css"

const Timeline = () => {
	return (
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
					top: ["35%", "48%"],
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
	)
}

export default Timeline
