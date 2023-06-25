#include <iostream>
#include <string>
#include <set>

using namespace std;

class Member {
public:
	string name;
	int plates_cleaned;

	Member(string name) {
		this->name = name;
		plates_cleaned = 0;
	}

	bool operator < (const Member &other) const {
		return name < other.name;
	}
};

class CleanPlateClub {
	set<Member> members;

public:
	void add_member(Member m) {
		members.insert(m);
	}

	void clean_plate(string name) {
		Member m(name);

		if (members.find(m) != members.end()) {
			members.find(m)->plates_cleaned += 1;
		}
	}

	void print_members() {
		for (auto m : members) {
			cout << m.name << " (plates cleaned: " << m.plates_cleaned << ")" << endl;
		}
	}

};

int main() {
	CleanPlateClub club;

	club.add_member(Member("Alice"));
	club.add_member(Member("Bob"));
	club.add_member(Member("Carol"));

	club.clean_plate("Alice");
	club.clean_plate("Bob");
	club.clean_plate("Alice");

	club.print_members();

	return 0;
}