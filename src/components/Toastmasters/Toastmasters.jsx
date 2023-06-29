import React from "react"
import { motion, useAnimation } from "framer-motion"

import toastmasterbackground from "/toastmasterbackground.svg"
import toastmasterscircle from "/toastmasterscircle.svg"

import "./Toastmasters.css"

const Toastmasters = () => {
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
			style={{ backgroundImage: `url(${toastmasterbackground})` }}
		>
			<motion.img src={toastmasterscircle} />
		</motion.div>
	)
}

export default Toastmasters
