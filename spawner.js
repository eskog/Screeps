	const creepCount = {
		harvester: {
			current: 0,
			target: 9
		},
		upgrader: {
			current: 0,
			target: 10
		},
		worker: {
			current: 0,
			target: 4
		},
		builder: {
			current: 0,
			target: 4
		},
	}

function run(){
	updateCreepCount(creepCount)
	//printCreepCount()
	const role = determineRole()
	if(role){
		const body = generateBody(role)
		const memory = generateMemory(role)
		spawnCreep(body, memory, role)
	}
}

function determineRole(){
	for(let role in creepCount){
		const obj = creepCount[role]


		if (obj.current < obj.target){
			return role
		}
	}
	return false
}

function updateCreepCount(creepCount){
	creepCount['harvester'].current = 0 
	creepCount['upgrader'].current = 0
	creepCount['worker'].current = 0
	creepCount['builder'].current = 0
	//console.log(creepCount['builder'].target)

	for(let name in Game.creeps){
		const creep = Game.creeps[name]
		const role = creep.memory.role
		//console.log(creepCount[role].current)
		creepCount[role].current += 1
		//console.log('after')
		//console.log(creepCount[role].current)
	}
}

function printCreepCount(){
	for(let role in creepCount){
		console.log(`${role}: ${creepCount[role].current}/(${creepCount[role].target})`)
	}
}

function generateBody(role){
	if(role === 'worker' || role === 'builder') return [WORK, WORK, CARRY, MOVE]
	else return [WORK, CARRY, MOVE, MOVE]
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
			creepCount[role].current += 1
			printCreepCount()
		}
	}
}

module.exports = {
	run
};