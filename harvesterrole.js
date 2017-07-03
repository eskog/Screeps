function run(creep){
	dropoff = chooseDropOff()
    //const dropoff = Game.spawns.Spawn1
	const result = creep.transfer(dropoff, RESOURCE_ENERGY)

	if(result === ERR_NOT_IN_RANGE) creep.moveTo(dropoff)
	if((result === ERR_NOT_IN_RANGE) && creep.carry.energy === 0) creep.memory.working = false


}

function chooseDropOff(){
    for(let spawn in Game.spawns){
    	if(spawn.energy < spawn.energyCapacity) return spawn
    	}
    for (let structure in Game.structures){
    	if(structure.structureType == STRUCTURE_EXTENSION){
    		if(structure.energy < structure.energyCapacity) return structure
    	}
    }
    return Game.spawns.Spawn1
}






module.exports = {
	run
};