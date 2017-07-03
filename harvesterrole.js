function run(creep){
	const spawn = Game.spawns.Spawn1
	const result = creep.transfer(spawn, RESOURCE_ENERGY)

	if(result === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
	if((result === ERR_NOT_IN_RANGE) && creep.carry.energy === 0) creep.memory.working = false


}


module.exports = {
	run
};