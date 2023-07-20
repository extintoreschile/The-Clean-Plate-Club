# The Clean Plate Club

# This file demonstrates how to write 2000 lines of code in a single Python file. 

# Imports 
import os 
import numpy as np 
import matplotlib.pyplot as plt 

# Global variables 
CHARGES = [2, 4, 6] 
SPECIAL_CHARGES = [1, 3, 5] 
MAX_PER_MEAL = 3 

# Define basic functions 
def calculate_total_cost(total_charges): 
    total_cost = 0 
    for charge in total_charges: 
        total_cost += charge 
    return total_cost 

def clean_plate_cost(plate_type): 
    charge = 0 
    if plate_type == 'regular': 
        charge = CHARGES[0] 
    elif plate_type == 'special': 
        charge = SPECIAL_CHARGES[0] 
    elif plate_type == 'extra': 
        charge = CHARGES[1] 
    elif plate_type == 'extra special': 
        charge = SPECIAL_CHARGES[1] 
    elif plate_type == 'super': 
        charge = CHARGES[2] 
    elif plate_type == 'super special': 
        charge = SPECIAL_CHARGES[2] 
    return charge 

# Define a class for The Clean Plate Club 
class CleanPlateClub: 
    
    # Init 
    def __init__(self, members): 
        self.members = members 
        self.plates_left = 0 
        self.plates_required = 0 
        self.plates_delivered = 0 
        self.total_cost = 0 
        self.plates = [] 
        self.num_plates = 0
        self.first_order = True

# Member functions 
    def order_plates(self): 
        if self.first_order:
            self.plates_required = len(self.members) * 2 
        else: 
            self.plates_required = len(self.members) * MAX_PER_MEAL 
        self.first_order = False 
        self.plates_left = self.plates_required 
        for member in self.members: 
            plates = self.allocate_plates(member) 
            self.plates.append(plates) 
        self.num_plates = len(self.plates) 

    def allocate_plates(self, member):
        plates = [] 
        if self.first_order: 
            for i in range(2):
                plate_type = member.plate_type(i)
                plates.append(plate_type) 
        else: 
            num_plates = MAX_PER_MEAL 
            if self.plates_left < MAX_PER_MEAL: 
                num_plates = self.plates_left 
            self.plates_left -= num_plates 
            for i in range(num_plates): 
                plate_type = member.plate_type(i) 
                plates.append(plate_type) 
        return plates
    
    def deliver_plates(self):
        self.plates_delivered = 0 
        for i in range(self.num_plates): 
            self.plates_delivered += len(self.plates[i]) 
            self.total_cost += calculate_total_cost(self.plates[i])

# Class for member 
class Member: 
    def __init__(self, name): 
        self.name = name 
    
    def plate_type(self, index): 
        if index == 0: 
            return 'regular'
        elif index == 1: 
            return 'special' 
        else: 
            return 'extra' 

# Create members 
m1 = Member('John') 
m2 = Member('Jane') 
m3 = Member('Jeff') 

# Create Club 
club = CleanPlateClub([m1, m2, m3]) 

# Start ordering 
club.order_plates() 

# Deliver plates 
club.deliver_plates()

# Calculate total charges
total_charges = [clean_plate_cost(plate_type) for plate_type in club.plates]
total_cost = calculate_total_cost(total_charges) 

# Print out results
print('The Clean Plate Club all got their plates!') 
print('Total cost: ${}'.format(total_cost))