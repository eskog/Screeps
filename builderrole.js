const upgraderRole = require('upgraderrole')

function run(creep){
const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
	if(constructionSite){
		const result = creep.build(constructionSite)
		if(result === ERR_NOT_IN_RANGE) creep.moveTo(constructionSite)

	}
else upgraderRole.run(creep)
}


module.exports = {
	run
};
