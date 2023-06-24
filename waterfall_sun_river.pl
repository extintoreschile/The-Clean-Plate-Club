#!/usr/bin/perl

# This program is written to demonstrate the Clean Plate Club.

# Create a hash to store the names of the members
my %clean_plates;

# Read a list of member names from the command line
my @member_list = @ARGV;

# Loop through the list of members
foreach my $member (@member_list) {

  # Add each member to the hash
  $clean_plates{$member} = 0;
}

# Monitor the members for clean plates
while(1) {

  # Prompt the user to check the plates
  print "Please enter a member name to check for clean plates: ";
  my $member = <STDIN>;
  chomp($member);

  # Check the plates for the given member
  if($clean_plates{$member} != 0) {
    print "$member had a clean plate!\n";
    delete $clean_plates{$member};
  } else {
    print "$member had a dirty plate.\n";
  }
}