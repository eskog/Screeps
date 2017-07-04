function run(creep){
	var dropoff = chooseDropOff(creep)
	//TODO: Consolidate the IF statements below
	if(creep.transfer(dropoff, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(dropoff)
	if((creep.transfer(dropoff, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) && creep.carry.energy === 0) creep.memory.working = false
}

function chooseDropOff(creep){
	for(let spawn in Game.spawns){
    	if(spawn.energy < spawn.energyCapacity) return spawn
	}
	var dropoff = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
    	filter: (s) => s.energy < s.energyCapacity
	})
	if(!dropoff) return Game.spawns.Spawn1
	return dropoff
}

module.exports = {
	run
};


