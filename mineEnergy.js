function run(creep){
	const energySource = creep.pos.findClosestByPath(FIND_SOURCES)
	if(creep.harvest(energySource) === ERR_NOT_IN_RANGE) creep.moveTo(energySource)
		else creep.memory.working = false
}

module.exports = {
	run
};