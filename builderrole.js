const upgraderRole = require('upgraderrole')

function run(creep){
const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)
	if(constructionSite){
		if(creep.build(constructionSite) === ERR_NOT_IN_RANGE) creep.moveTo(constructionSite)
	}
else upgraderRole.run(creep)
}

module.exports = {
	run
};
