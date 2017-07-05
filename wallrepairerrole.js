const upgraderRole = require('upgraderrole')

function run(creep){
    const wall = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s => s.hits && (s.hits < 1000000) && s.structureType == STRUCTURE_WALL
})
    const weakwall = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s => s.hits && (s.hits < 3500 &&  s.structureType == STRUCTURE_WALL)
})

    if (weakwall){
        if(creep.repair(weakwall) === ERR_NOT_IN_RANGE) creep.moveTo(weakwall)
    }
    else if (wall){
        if(creep.repair(wall) === ERR_NOT_IN_RANGE) creep.moveTo(wall)
    }
    else upgraderRole.run(creep)
}


module.exports = {
    run
};