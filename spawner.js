function run(){
	const role = determineRole()
    //printCreepCount()
	if(role){
		const body = generateBody(role)
		const memory = generateMemory(role)
		spawnCreep(body, memory, role)
	}
}

function determineRole() {
    if (_(Game.creeps).filter({memory: {role: 'harvester'}}).size() < 5) return 'harvester'
    if (_(Game.creeps).filter({memory: {role: 'upgrader'}}).size() < 7) return 'upgrader'
    if (_(Game.creeps).filter({memory: {role: 'worker'}}).size() < 5) return 'worker'
    if (_(Game.creeps).filter({memory: {role: 'builder'}}).size() < 2) return 'builder'
    if (_(Game.creeps).filter({memory: {role: 'wallRepairer'}}).size() < 1) return 'wallRepairer'
}

function printCreepCount(){
    console.log('Harvesters: ' + _(Game.creeps).filter({memory: {role: 'harvester'}}).size())
    console.log('upgrader: ' + _(Game.creeps).filter({memory: {role: 'upgrader'}}).size())
    console.log('worker: ' + _(Game.creeps).filter({memory: {role: 'worker'}}).size())
    console.log('builder: ' + _(Game.creeps).filter({memory: {role: 'builder'}}).size())
    console.log('WallRepairer: ' + _(Game.creeps).filter({memory: {role: 'wallRepairer'}}).size())
}

function generateBody(role){
    if(role === 'worker' || role === 'builder') return [WORK, WORK, CARRY, MOVE]
    if(role === 'upgrader') return [WORK, WORK, CARRY, MOVE]
	else return [WORK, CARRY, CARRY, MOVE]
}

function generateMemory(role){
	return {
		role,
		working: false
	}
}

function spawnCreep(body, memory, role){
	for(let spawnpoint in Game.spawns){
		spawn = Game.spawns[spawnpoint]
		const name = spawn.createCreep(body, null, memory)
		if(typeof name === 'string'){
			console.log(`Created creep ${name} with role ${role}`)
			printCreepCount()
		}
	}
}

module.exports = {
	run
};