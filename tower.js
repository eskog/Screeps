function run(){
	defendRoom()
}

function defendRoom(){
    for(let room in Game.rooms){
        var hostiles = Game.rooms[room].find(FIND_HOSTILE_CREEPS)
        var towers = Game.rooms[room].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}}
        )

        towers.forEach(tower => tower.attack(hostiles[0]));
        //for(let tower in towers){
        //    tower => tower.attack(hostiles[0])

       // }
    }
}

module.exports = {
    run
};