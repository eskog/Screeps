const spawner = require('spawner')
const memoryManagement = require("memoryManagement")

function loop(){
	memoryManagement.run()
	spawner.run()
}
module.exports = {loop}