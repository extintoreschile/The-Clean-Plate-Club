-- The Clean Plate Club

-- File 1: main.lua

-- Require the modules we will need
local ui = require("ui")
local plate = require("plate")

-- Create an array to hold all of the plate
local plateArray = {}

-- Function to create a new plate and add it to the plate array
-- This function will be called when a new plate is added
local function addPlate(name)
	-- Create a new plate and add it to the array
	local newPlate = plate:new(name)
	table.insert(plateArray, newPlate)
	
	-- Update the UI
	ui.refreshPlateList(plateArray)
end

-- Function to delete a plate and remove it from the array
-- This function will be called when a plate is deleted
local function deletePlate(index)
	-- Delete the plate from the array
	table.remove(plateArray, index)
	
	-- Update the UI
	ui.refreshPlateList(plateArray)
end

-- Function to mark a plate as clean
-- This function will be called when a plate is marked as clean
local function markClean(index)
	-- Mark the plate as clean
	plateArray[index]:markClean()
	
	-- Update the UI
	ui.refreshPlateList(plateArray)
end

-- Create the UI
ui.createUI(addPlate, deletePlate, markClean)