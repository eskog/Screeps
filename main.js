const spawner = require('spawner')
const memoryManagement = require('memoryManagement')
const creep = require('creep')

function loop(){
	memoryManagement.run();
	spawner.run();
	creep.run()
}
module.exports = {loop}