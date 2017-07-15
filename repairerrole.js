function run(creep){
	const controller = creep.room.controller
	//const result = creep.upgradeController(controller)
	if(creep.upgradeController(controller) === ERR_NOT_IN_RANGE) creep.moveTo(controller)
	//if((result === ERR_NOT_IN_RANGE) && creep.carry.energy === 0) creep.memory.working = false
}

module.exports = {
	run
};