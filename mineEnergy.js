function run(creep){
	const energySource = creep.pos.findClosestByPath(FIND_SOURCES)
	const result = creep.harvest(energySource)

	if(result === ERR_NOT_IN_RANGE) creep.moveTo(EnergySource)
}





module.exports = {
	run
};