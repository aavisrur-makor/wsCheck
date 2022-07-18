let wsArr = {}
const OpenWebSockets = (cb) => {
	try {
		for (let i = 0; i < 10; i++) {
			wsArr[i] = new WebSocket('ws://52.51.33.70:3010')
		}
		cb(true)
	} catch (err) {
		cb(false)
	}
}
console.log(wsArr)

module.exports = { wsArr, OpenWebSockets }
