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
    if (_(Game.creeps).filter({memory: {role: 'harvester'}}).size() < 6) return 'harvester'
    if (_(Game.creeps).filter({memory: {role: 'upgrader'}}).size() < 3) return 'upgrader'
    if (_(Game.creeps).filter({memory: {role: 'worker'}}).size() < 2) return 'worker'
    if (_(Game.creeps).filter({memory: {role: 'builder'}}).size() < 1) return 'builder'
    if (_(Game.creeps).filter({memory: {role: 'wallRepairer'}}).size() < 1) return 'wallRepairer'
    if (_(Game.creeps).filter({memory: {role: 'defenceRole'}}).size() < 1) return 'defenceRole'
}

function printCreepCount(){
    console.log('Harvesters: ' + _(Game.creeps).filter({memory: {role: 'harvester'}}).size())
    console.log('upgrader: ' + _(Game.creeps).filter({memory: {role: 'upgrader'}}).size())
    console.log('worker: ' + _(Game.creeps).filter({memory: {role: 'worker'}}).size())
    console.log('builder: ' + _(Game.creeps).filter({memory: {role: 'builder'}}).size())
    console.log('WallRepairer: ' + _(Game.creeps).filter({memory: {role: 'wallRepairer'}}).size())
    console.log('DefenceRole: ' + _(Game.creeps).filter({memory: {role: 'defenceRole'}}).size())
}
//TODO: Skapa en boolean att använda som tar hänsyn till hela kolonins storlek om det ska byggas creeps med få eller många parts
function generateBody(role){
    if(role === 'harvester'  && _(Game.creeps).filter({memory: {role: 'harvester'}}).size() > 4) return   [WORK, CARRY, CARRY, CARRY, MOVE, MOVE]
    if(role === 'upgrader') return [WORK, WORK, CARRY, MOVE, MOVE]
    if(role === 'worker' || role === 'builder' || role === 'wallRepairer') return [WORK, WORK, CARRY, MOVE, MOVE]
    else return [WORK, CARRY, MOVE]
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
			console.log(`Created creep ${name} with role ${role} and ${body}`)
			printCreepCount()
		}
	}
}

module.exports = {
	run
};