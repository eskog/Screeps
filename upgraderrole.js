function run(creep){
	const controller = creep.room.controller
	if(creep.upgradeController(controller) === ERR_NOT_IN_RANGE) creep.moveTo(controller)
}

module.exports = {
	run
};