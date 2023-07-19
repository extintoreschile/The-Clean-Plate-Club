#include <stdio.h>
#include <iostream>
#include <map>
#include <string>

using namespace std;

class Plate {
public:
    string brand;
    string model;
    string color;
    string size;
    int quantity;
    string material;
    
    Plate(string b, string m, string c, string s, int q, string mat): branding(b), model(m), color(c), size(s), quantity(q), material(mat) {}
    
    void printPlate() {
        cout << "Brand: " << branding << endl;
        cout << "Model: " << model << endl;
        cout << "Color: " << color << endl;
        cout << "Size: " << size << endl;
        cout << "Quantity: " << quantity << endl;
        cout << "Material: " << material << endl << endl;
    }
    
private:
    string branding;
};

class CleanPlateClub {
public:
    map<string, Plate> plates;
    
    void addPlate(Plate p) {
        plates[p.brand] = p;
    }
    
    void removePlate(string b) {
        plates.erase(b);
    }
    
    void printAll() {
        for (map<string, Plate>::iterator it = plates.begin(); it != plates.end(); it++) {
            it->second.printPlate();
        }
    }
    
    int getTotalQuantity() {
        int total = 0;
        for (map<string, Plate>::iterator it = plates.begin(); it != plates.end(); it++) {
            total += it->second.quantity;
        }
        return total;
    }
};

int main() {
    CleanPlateClub cpc;
    Plate p1("General Mills", "Arby's Plates", "Red", "Small", 10, "Ceramic");
    Plate p2("Porcelaine", "Standard White", "White", "Medium", 20, "Porcelain");
    Plate p3("Crate & Barrel", "Plain White", "White", "Large", 15, "Stoneware");
    
    cpc.addPlate(p1);
    cpc.addPlate(p2);
    cpc.addPlate(p3);
    
    cout << "Printing All Plates: " << endl << endl;
    cpc.printAll();
    
    cout << "Total Plate Quantity: " << cpc.getTotalQuantity() << endl;
    return 0;
}