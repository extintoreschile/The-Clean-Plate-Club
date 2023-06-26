// The Clean Plate Club

// File: clean-plate-club.js

// Set up global variables
let mealReady = false;
let sittingAtTable = false;
let hungry = true;
let cleanPlate = false;

// Declare the Clean Plate Club function
function cleanPlateClub() {
	// Check if meal is ready
	if (mealReady === false) { 
		console.log("Sorry, the meal isn't ready yet. Maybe try again later?");
		return;
	}

	// Check if sitting at the table
	if (sittingAtTable === false) {
		console.log("Sorry, you have to sit at the table to join the clean plate club!");
		return;
	}

	// Check if hungry
	if (hungry === false) {
		console.log("Sorry, you can't join the clean plate club if you're not hungry!");
		return;
	}

	// Now we must fill the plate
	fillPlate();

	// Now we have to eat the food!
	eatFood();

	// Finally, check if the plate is clean
	if (cleanPlate === true) {
		console.log("Congratulations! You've just joined the Clean Plate Club!");
	} else {
		console.log("Sorry, you didn't finish your food. Try again next time!");
	}
}

// Declare the fillPlate function
function fillPlate() {
	console.log("Filling your plate with delicious food...");
	// Fill plate with food here
	// ...
	console.log("Plate is now full!");
}

// Declare the eatFood function
function eatFood() {
	console.log("Digging in...");
	// Eat the food here
	// ...
	console.log("All done! Plate is now clean.");
	cleanPlate = true;
}

// Call the Clean Plate Club function!
cleanPlateClub();