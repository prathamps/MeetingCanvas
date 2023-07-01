import React from "react"
import { motion, useAnimation } from "framer-motion"

import saahayabackground from "/saahayabackground.svg"
import background from "/background.svg"

import "./Saahaya.css"

const Saahaya = () => {
	const icon = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
		},
	}

	return (
		<motion.div
			className="saahaya-container"
			style={{ backgroundImage: `url(${saahayabackground})` }}
		></motion.div>
	)
}

export default Saahaya
