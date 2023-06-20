//The Clean Plate Club

//TypeScript File

//1. Imports
import { App, Event, Log, LogLevel } from './utils/logging';
import { AdoptableAnimals, Animal, AnimalAdoptionService } from './services/adoptionService';

//2. Constants
const ADOPTED_ANIMALS: AdoptableAnimals[] = [
  { type: 'cat', name: 'Fluffy' },
  { type: 'cat', name: 'Fifi' },
  { type: 'dog', name: 'Max' },
  { type: 'hamster', name: 'Teddy' }
];

//3. Instances
const log = new Log();
const adoptionService = new AnimalAdoptionService(log);

//4. Functions
//Register each animal for adoption
const registerAnimals = (animals: AdoptableAnimals[]) => {
  for (const animal of animals) {
    adoptionService.registerAnimal(animal);
  }
};

//Log all adopted animals
const logAdoptedAnimals = () => {
  for (const animal of adoptionService.getAdoptedAnimals()) {
    const adoptedAnimal = animal as Animal;
    log.log(LogLevel.INFO,`${adoptedAnimal.name} is an adopted ${adoptedAnimal.type}.`);
  }
};

//5. Entry Point
const cleanPlateClub = (app: App) => {
  //register our adopted animals
  registerAnimals(ADOPTED_ANIMALS);
  //log each adopted animal
  logAdoptedAnimals();
  //return the adoption service
  return adoptionService;
};

//6. Event Listener
window.addEventListener('load', () => {
  const app = new App();
  cleanPlateClub(app);
});