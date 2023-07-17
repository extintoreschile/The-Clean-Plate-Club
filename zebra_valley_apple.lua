--[[
-- THE CLEAN PLATE CLUB
-- By Zach (zach@example.com)
--]]

--[[
-- Dependencies
--]]
local math = require("math")

--[[
-- Constants
--]]
local MAX_POINTS = 10
local FOOD_VALUE = {
    apple = 2,
    banana = 3,
    pizza = 10,
    burger = 5,
    iceCream = 7,
    cookie = 4
}

--[[
-- Global Variables
--]]
local points = 0
local itemsEaten = 0
local foodHistory = {}

--[[
-- Functions
--]]

-- Adds food to the foodHistory and updates points
-- @param foodName the name of the food
-- @param foodValue the nutritional value of food
local function updateHistory(foodName, foodValue)
    table.insert(foodHistory, foodName)
    points = points + foodValue
    itemsEaten = itemsEaten + 1
end

-- Updates the points if a food item is eaten
-- @param foodName the name of the food
local function eatFood(foodName)
    if (FOOD_VALUE[foodName] ~= nil) then
        updateHistory(foodName, FOOD_VALUE[foodName])
    else
        print("I'm sorry, that food doesn't exist!")
    end
end

-- Checks if the user has reached the max points
local function checkMaxPoints()
    if (points >= MAX_POINTS) then
        print("You have reached your maximum points. Congratulations!")
    end
end

-- Formats the foodHistory for display
-- @return the formatted string
local function formatHistory()
    local result = ""
    for i = 1, #foodHistory do
        result = result .. foodHistory[i] .. "\n"
    end
    return result
end

--[[
-- Main Program
--]]

print("Welcome to The Clean Plate Club!")

-- Main Program Loop
while (points < MAX_POINTS) do
    -- Ask the user which food to eat
    print("What would you like to eat?")
    local foodName = io.read()

    -- Eat the food
    eatFood(foodName)

    -- Check if the user has reached maximum points
    checkMaxPoints()
end

-- Display the user's foodHistory
print("You ate:")
print(formatHistory())

-- Display the user's points and itemsEaten
print("You ate " .. itemsEaten .. " items and gained " .. points .. " points")