const harvesterRole = require('harvesterrole')
const upgraderRole = require('upgraderrole')
const workerRole = require('workerrole')
const builderRole = require('builderrole')
const mineEnergy = require('mineEnergy')
function run(){
	creep()
}

function creep(){
	for(let name in Game.creeps){
		const creep = Game.creeps[name]
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

function assignTask(creep){
	const role = creep.memory.role
	if(!creep.memory.working) mineEnergy.run(creep)
	else if(role === 'harvester') harvesterRole.run(creep)
	else if(role === 'upgrader') upgraderRole.run(creep)
	else if(role === 'worker') workerRole.run(creep)
	else if(role === 'builder') builderRole.run(creep)
}

module.exports = {
	run
};