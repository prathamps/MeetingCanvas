let gestureDetails = null
let changed = false

export const handleRightGesture = (details) => {
	gestureDetails = details
	changed = true
}

export const handleLeftGesture = (details) => {
	gestureDetails = details
	changed = true
}
export const getGestureDetails = () => {
	let prevchange = changed
	changed = false
	return [gestureDetails, prevchange]
}
