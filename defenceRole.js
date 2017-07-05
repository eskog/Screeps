const upgraderRole = require('upgraderrole')

function run(creep){
	supplyTower(creep)
	//TODO: Consolidate the IF statements below
	//if(creep.transfer(dropoff, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(dropoff)
	//if((creep.transfer(dropoff, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) && creep.carry.energy === 0) creep.memory.working = false
}

function supplyTower(creep){
    const tower = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: s => s.hits && (s.energy < s.energyCapacity &&  s.structureType == STRUCTURE_TOWER)
    })
    if(!tower) upgraderRole.run(creep)
    if(creep.transfer(tower, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(tower)
}

module.exports = {
	run
};