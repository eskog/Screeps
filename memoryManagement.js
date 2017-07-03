function run(){
	cleanOutDeadCreeps()
}


function cleanOutDeadCreeps(){
	for(let name in Memory.Creeps){
		if (!Game.creeps[name]){
			delete Memory.creeps[name]
			console.log('Removed ${name} from memory since it died')
		}
	}
}



module.exports = {
	run
};