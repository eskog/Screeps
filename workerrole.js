const upgraderRole = require('upgraderrole')

function run(creep){
const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
const structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
			filter: s => s.hits && (s.hits < s.hitsMax-50) && s.structureType != STRUCTURE_WALL
		})
	if (structure){
		const result = creep.repair(structure)
		if(result === ERR_NOT_IN_RANGE) creep.moveTo(structure)
	}

	else if(constructionSite){
		const result = creep.build(constructionSite)
		if(result === ERR_NOT_IN_RANGE) creep.moveTo(constructionSite)

	}
	else upgraderRole.run(creep)
}


module.exports = {
	run
};
