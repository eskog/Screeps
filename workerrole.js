const upgraderRole = require('upgraderrole')

function run(creep){
    const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
    const structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
			filter: s => s.hits && (s.hits < s.hitsMax-50)
    })
	const wall = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s => s.hits && (s.hits < 1000000) && s.structureType == STRUCTURE_WALL
    })
    if (structure){
        if(creep.repair(structure) === ERR_NOT_IN_RANGE) creep.moveTo(structure)
    }
	else if(constructionSite){
		if(creep.build(constructionSite) === ERR_NOT_IN_RANGE) creep.moveTo(constructionSite)
	}
	else if (wall){
		if(creep.repair(wall) === ERR_NOT_IN_RANGE) creep.moveTo(wall)
	}
	else upgraderRole.run(creep)
}

module.exports = {
	run
};