// The goal: Build out the whole thing - fully functional / with NO UI (first)

// 1. Many of these things - need to get handled automatically: the "ID" should be generated somehow... (you'll need it - to remove habits etc)

// 2. there are a few ways to "construct" an object.... a "constructor" function / is common - and also the new "Class" in JS is good too... --- so, decide how to do that - and then the 'date' should get added... and the ID

// 3. how do you remove a habit from the habits array? based on the ID? because - you aren't clicking anything.....

/*

// find(habit).splice from array
(maybe)  BUT - do the things - in order of importance. (that's the most importnat thing to know about --- managing the time / and the level of importance)



OTHER WAYS THAN CLASS!

// way 1
function createHabit(name) { // what is needed? explicitly?
	// What would you say to Alexa?
	// he would input the name of the habit,
	return {
		id: state.lastId++, // for now?
		name: name,
		checked: false,
		date: new Date(),
	}; // this would return an object... / that's ONE way... 
} // "Function that returns an object"

// way 2
function ConstructThing(name) {
	this.id = state.lastId++;
	this.name = name;
	this.checked = false;
	this.date = new Date();
}
let exampleThing = new ConstructThing("Use a constructor function");
console.log(exampleThing);
// -------- "Constuctor function"


*/
