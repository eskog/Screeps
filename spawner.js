	const creepCount = {
		harvester: {
			current: 0,
			target: 4
		},
		upgrader: {
			current: 0,
			target: 2
		}
	}

function run(){
	updateCreepCount()
	const role = determineRole()
	if(role){
		const body = generatBody(role)
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

function updateCreepCount(){
	for(let namein Game.creeps){
		const creep = Game.creeps[name]
		const role = creep.memory.role
		
		creepCount[role].current += 1
	}
}

function printCreepCount(){
	for(let role in creepCount){
		console.log('${role}: ${creepCount[role].current}/$({creepCount[role].target)')
	}
}

function generateBody(role){
	return [WORK, CARRY, MOVE]
}

function generateMemory(role){
	return {
		role,
		working: false
	}
}

function spawnCreep(const body, const memory, const role){
	for(let spawn in Game.spawns){
		const name = spawn.createCreep(body, null, memory)
		if(typeof name === 'string'){
			console.log('Created creep ${name} with role ${role}')
			creepCount[role].current += 1
			printCreepCount()
		}
	}
}

module.export = {
	run
};