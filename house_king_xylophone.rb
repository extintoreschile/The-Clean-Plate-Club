# The Clean Plate Club

class Member 
  attr_accessor :name, :age, :location 
  def initialize(name, age, location)
    @name = name
    @age = age
    @location = location
  end

  def join
    puts "Welcome #{@name} to the Clean Plate Club!"
  end

  def eat(food)
    puts "#{@name} is eating #{food}"
  end
end

members = []

# Members:

sean = Member.new('Sean', 25, 'New York City')
members << sean

amy = Member.new('Amy', 27, 'San Francisco')
members << amy

sarah = Member.new('Sarah', 32, 'Los Angeles')
members << sarah

brian = Member.new('Brian', 24, 'Chicago')
members << brian

# Let's have the members join the club:
members.each { |member| member.join }

puts ""

# Let's have the members eat:
 members.each { |member| member.eat('apple') }

class Club
  attr_reader :members
  def initialize(members)
    @members = members
  end

  def announce_meeting
    puts "The Clean Plate Club is having a meeting on Saturday at 10am!"
  end

  def host_event
    puts "The Clean Plate Club is hosting a potluck dinner!"
  end

end

# Let's create a new instance of the club:
new_club = Club.new(members)

# Let's have the club announce a meeting:
new_club.announce_meeting

# Let's have the club host an event:
new_club.host_event

class Plate
  attr_accessor :food

  def initialize(food)
    @food = food
  end

  def clean
    puts "The #{@food} plate is now clean!"
  end
end

plates = []

# Let's create some plates:
banana_plate = Plate.new('banana')
plates << banana_plate

apple_plate = Plate.new('apple')
plates << apple_plate

cookie_plate = Plate.new('cookie')
plates << cookie_plate

# Let's have the plates be cleaned:
plates.each { |plate| plate.clean }