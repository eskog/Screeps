	const creepCount = {
		harvester: {
			current: 0,
			target: 7
		},
		upgrader: {
			current: 0,
			target: 4
		},
		worker: {
			current: 0,
			target: 5
		},
		builder: {
			current: 0,
			target: 2
		},
	}

function run(){
	const role = determineRole()
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
    if (_(Game.creeps).filter({memory: {role: 'WallRepairer'}}).size() < 1) return 'WallRepairer'
}

function printCreepCount(){
    console.log('Harvesters: ' + _(Game.creeps).filter({memory: {role: 'harvester'}}).size())
    console.log('Harvesters: ' + _(Game.creeps).filter({memory: {role: 'upgrader'}}).size())
    console.log('Harvesters: ' + _(Game.creeps).filter({memory: {role: 'worker'}}).size())
    console.log('Harvesters: ' + _(Game.creeps).filter({memory: {role: 'builder'}}).size())
    console.log('WallRepairer: ' + _(Game.creeps).filter({memory: {role: 'WallRepairer'}}).size())
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