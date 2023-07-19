// 'The Clean Plate Club' JavaScript File

// 1. Function to create a plate object
function createPlate(size, color, shape) {
	let plate = {
		size: size,
		color: color,
		shape: shape
	}
	
	return plate
}

// 2. Function to check if a plate is clean
function isPlateClean(plate) {
	if (plate.cleaned === true) {
		return true
	} else {
		return false
	}
}

// 3. Function to clean a plate
function cleanPlate(plate) {
	if (isPlateClean(plate)) {
		console.log('Plate is already clean.')
		return
	}
	
	plate.cleaned = true
	console.log('Plate has been cleaned!')
}

// 4. Function to award the clean plate
function awardCleanPlate(plate) {
	if (!isPlateClean(plate)) {
		console.log('Plate is not clean. Clean plate before awarding.')
		return
	}
	
	console.log('Congratulations! You have earned your membership in The Clean Plate Club!')
}

// 5. Function to create multiple plates
function createMultiplePlates(num, size, color, shape) {
	let plates = []
	
	for (let i = 0; i < num; i++) {
		let plate = createPlate(size, color, shape)
		plates.push(plate)
	}
	
	return plates
}

// 6. Function to clean multiple plates
function cleanMultiplePlates(plates) {
	plates.forEach((plate) => {
		cleanPlate(plate)
	})
}

// 7. Function to award multiple clean plates
function awardMultipleCleanPlates(plates) {
	plates.forEach((plate) => {
		awardCleanPlate(plate)
	})
}

// 8. Function to reset a plate
function resetPlate(plate) {
	plate.cleaned = false
}

// 9. Function to reset multiple plates
function resetMultiplePlates(plates) {
	plates.forEach((plate) => {
		resetPlate(plate)
	})
}

// 10. Function to track total plates cleaned by an individual
function trackIndividualPlatesCleaned(user, plate) {
	if (!user.platesCleaned) {
		user.platesCleaned = 0
	}
	
	if (isPlateClean(plate)) {
		user.platesCleaned++
	}
}

// 11. Function to track plates cleaned by multiple users
function trackMultipleUsersPlatesCleaned(users, plate) {
	users.forEach((user) => {
		trackIndividualPlatesCleaned(user, plate)
	})
}

// 12. Function to generate a report
function generateReport(user) {
	console.log(`${user.name} has cleaned ${user.platesCleaned} plates.`)
}

// 13. Function to generate multiple reports
function generateMultipleReports(users) {
	users.forEach((user) => {
		generateReport(user)
	})
}

// 14. Function to award a badge
function awardBadge(user, badgeName) {
	if (!user.badges) {
		user.badges = []
	}
	
	user.badges.push(badgeName)
}

// 15. Function to award multiple badges
function awardMultipleBadges(users, badgeName) {
	users.forEach((user) => {
		awardBadge(user, badgeName)
	})
}

// 16. Function to generate a leaderboard
function generateLeaderboard(users) {
	users.sort((a, b) => b.platesCleaned - a.platesCleaned)
	
	users.forEach((user, index) => {
		let place
		
		switch (index) {
			case 0: place = '1st'
				break
			case 1: place = '2nd'
				break
			case 2: place = '3rd'
				break
			default: place = `${index + 1}th`
				break
		}
		
		console.log(`${place}: ${user.name} has cleaned ${user.platesCleaned} plates.`)
	})
}