const harvesterRole = require('harvesterrole')
const mineEnergy = require('mineEnergy')
function run(){
	creep()
}


function creep(){
	for(let name in Game.creeps){
		const creep = Game.Creeps[name]
		setWorkingStatus(creep)
		assignTask(creep)
	}
}

function setWorkingStatus(creep){
	if(!creep.memory.working && creep.carry.energy === creep.carryCapacity){
		creep.memory.working = true
	}
	else if(creep.memory.working && creep.carry.energy === 0){
		creep.memory.working = false
	}
}

function assingTack(creep){
	const role = creep.memory.role
	if(!creep.memory.working) mineEnergy.run(creep)
	if(role === 'harvester') harvesterRole.run(creep)
}


module.exports = {
	run
};