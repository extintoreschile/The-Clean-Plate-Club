/* The Clean Plate Club
 * 
 * A Kotlin Program to Help Maintain Clean Eating Habits */

import java.util.Scanner

fun main(args: Array<String>) {

    // Create a reference to our Scanner object
    val scanner = Scanner(System.`in`)

    // Prompt the user for the maximum number of meals
    println("How many meals would you like to eat this week?")
    val maxMeals = scanner.nextInt()
    
    // Create a list to store data
    val cleanPlateClub: MutableList<Int> = mutableListOf()
    
    // Begin the clean plate club process
    println("Welcome to the Clean Plate Club! Let's get started.")
    
    for (i in 1..maxMeals) {
        // Prompt for the number of clean meals
        println("How many meals did you eat clean on day $i?")
        val meals = scanner.nextInt()
        
        // Store the count
        cleanPlateClub.add(meals)
    }

    // Output the results in a useful format
    println("Here's the breakdown of your clean eating:") 
    println("----------------------------------------")
    println("Day\tClean Meals")
    println("----------------------------------------")
    for (i in 0 until maxMeals) {
        println("${i + 1}\t\t${cleanPlateClub[i]}")
    }
    println("----------------------------------------")
    
    // Calculate the user's clean meal percentage
    val numMealsEaten = cleanPlateClub.sum()
    val percentCleanEating = (numMealsEaten.toFloat() / maxMeals.toFloat()) * 100
    
    // Output the user's clean meal percentage
    println("You ate clean for $percentCleanEating% of your meals!")
    
    // Output the results of the user's membership in the Clean Plate Club
    // Determine whether the user is a member
    val isMember = if (percentCleanEating == 100) "is a member" else "is not a member"
    println("You $isMember of the Clean Plate Club!")
}