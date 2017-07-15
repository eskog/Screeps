const spawner = require('spawner')
const memoryManagement = require('memoryManagement')
const creep = require('creep')
const tower = require('tower')

function loop(){
	memoryManagement.run();
	spawner.run();
	creep.run()
	tower.run()
}
module.exports = {loop}