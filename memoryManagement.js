function run(){
	cleanOutDeadCreeps()
}

function cleanOutDeadCreeps(){
	for(let name in Memory.creeps){
		if (!Game.creeps[name]){
			//Memory.roles[Memory.creeps[name].role] -= 1
			delete Memory.creeps[name]
			console.log(`Removed ${name} from memory since it died`)
		}
	}
}
function addCreep(role){
	//Memory.roles[role] += 1
}

module.exports = {
	run
};