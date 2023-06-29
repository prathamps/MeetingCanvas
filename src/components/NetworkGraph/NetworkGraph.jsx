import React from "react"
import { motion, useAnimation } from "framer-motion"

import networkgraph from "/networkgraph.svg"
import background from "/background.svg"

import "./NetworkGraph.css"

const NetworkGraph = () => {
	const icon = {
		hidden: {
			pathLength: 0,
			fill: "rgba(248, 248, 248, 0)",
		},
		visible: {
			pathLength: 1,
			fill: "rgba(248, 248, 248, 0.8)",
		},
	}

	return (
		<motion.div
			className="network-graph-container"
			style={{ backgroundImage: `url(${background})` }}
		>
			<motion.img
				animate={{
					scale: ["120%", "100%"],
				}}
				transition={{ duration: 10, ease: "easeIn" }}
				className="network-graph-image"
				src={networkgraph}
			></motion.img>
		</motion.div>
	)
}

export default NetworkGraph
