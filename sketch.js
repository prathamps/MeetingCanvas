let canvas
import {
	handleRightGesture,
	handleLeftGesture,
} from "./src/api/carouselFunctions"

let sketch = function (p) {
	p.setup = function () {
		canvas = p.createCanvas(640, 480)
		canvas.id("canvas")
		canvas.scale(-1, 1)
		p.colorMode(p.HSB)
	}

	let prevDistance = 0 // Variable to store the previous distance between thumb and index finger
	let prevThumbX = 0 // Variable to store the previous X position of the thumb
	let prevIndexX = 0 // Variable to store the previous X position of the index finger
	let isSwiping = false

	p.drawLandmarks = function (indexArray, hue) {
		p.noFill()
		p.strokeWeight(8)
		for (let i = 0; i < detections.multiHandLandmarks.length; i++) {
			for (let j = indexArray[0]; j < indexArray[1]; j++) {
				let x = detections.multiHandLandmarks[i][indexArray[1] - 1].x * p.width
				let y = detections.multiHandLandmarks[i][indexArray[1] - 1].y * p.height
				p.stroke(hue, 40, 255)
				p.point(x, y)
			}
		}
	}

	// Calculate distance between thumb and index finger
	if (detections.multiHandLandmarks.length > 0) {
		let thumbLastLandmark = detections.multiHandLandmarks[0][4] // Last landmark of thumb (landmark index 4)
		let indexLastLandmark = detections.multiHandLandmarks[0][8] // Last landmark of index finger (landmark index 8)
		let thumbX = thumbLastLandmark.x * p.width
		let indexX = indexLastLandmark.x * p.width
		let distance = Math.sqrt(Math.pow(indexX - thumbX, 2))

		if (distance > 10 && prevDistance > 10 && !isSwiping) {
			let thumbDelta = thumbX - prevThumbX
			let indexDelta = indexX - prevIndexX
			console.log("thumb", thumbDelta)
			console.log("Index", indexDelta)
			if (thumbDelta < -2.5 || indexDelta < -2.5) {
				console.log("Left")
				handleLeftGesture("Left")
			} else if (thumbDelta > 0.5 || indexDelta > 0.5) {
				console.log("Right")
				handleRightGesture("Right")
			}
			isSwiping = true
			setTimeout(() => {
				isSwiping = false
			}, 700) // Adjust debounceDelay to your desired duration in milliseconds
		}

		prevThumbX = thumbX
		prevIndexX = indexX
		prevDistance = distance
	}
}
