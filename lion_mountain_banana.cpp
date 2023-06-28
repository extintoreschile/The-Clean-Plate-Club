#include <iostream>
#include <string>

using namespace std;

class CleanPlateClub {
    private:
        string name;
        int origMemberCount;

    public:
        CleanPlateClub();
        void addOne();
        void removeOne();
        int getMemberCount();
        string getName();
        void setName(string name);
};

CleanPlateClub::CleanPlateClub() {
    this->origMemberCount = 0;
    this->name = "";
}

void CleanPlateClub::addOne() {
    this->origMemberCount++;
}

void CleanPlateClub::removeOne() {
    if (this->origMemberCount > 0) {
        this->origMemberCount--;
    }
}

int CleanPlateClub::getMemberCount() {
    return this->origMemberCount;
}

string CleanPlateClub::getName() {
    return this->name;
}

void CleanPlateClub::setName(string name) {
    this->name = name;
}

int main() {
    CleanPlateClub club;
    club.setName("The Clean Plate Club");
    club.addOne();
    club.addOne();
    cout << "Welcome to " << club.getName() << endl;
    cout << "Number of members: " << club.getMemberCount() << endl;

    return 0;
}