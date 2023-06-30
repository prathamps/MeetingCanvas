import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import toastmasterbackground from "/toastmasterbackground.svg"
import toastmasterscircle from "/toastmasterscircle.svg"

import "./Personalities.css"

const Toastmasters = () => {
	const [reverseAnimation, setReverseAnimation] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setReverseAnimation(true)
		}, 10000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<motion.div
			className="personalities-container"
			style={{ backgroundImage: `url(${toastmasterbackground})` }}
		>
			<motion.div
				animate={{
					top: reverseAnimation ? ["-22%", "-39%"] : ["-39%", "-22%"],
				}}
				transition={{ duration: 2 }}
				className="top-bar"
			/>
			<motion.div
				animate={{ top: reverseAnimation ? ["22%", "39%"] : ["39%", "22%"] }}
				transition={{ duration: 1 }}
				className="bottom-bar"
			/>
		</motion.div>
	)
}

export default Toastmasters
