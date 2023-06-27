let detections = {}

const videoElement = document.getElementById("video")

const hands = new Hands({
	locateFile: (file) => {
		return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
	},
})
hands.setOptions({
	maxNumHands: 1,
	modelComplexity: 1,
	minDetectionConfidence: 0.2,
	minTrackingConfidence: 0.2,
})

hands.onResults(gotHands)

function gotHands(results) {
	detections = results
	// console.log(detections)
}

const camera = new Camera(videoElement, {
	onFrame: async () => {
		// Create a canvas element to mirror/flip the video feed
		const canvas = document.createElement("canvas")
		canvas.width = videoElement.videoWidth
		canvas.height = videoElement.videoHeight
		const context = canvas.getContext("2d")
		context.translate(canvas.width, 0)
		context.scale(-1, 1)
		context.drawImage(videoElement, 0, 0, canvas.width, canvas.height)

		await hands.send({ image: canvas })
	},
	width: 1280,
	height: 720,
})

camera.start()
