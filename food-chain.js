var eatsPlants = true;
var eatsAnimals = false;

/*
 * Logic:
 * If eatsPlants AND eatsAnimals are true -> "omnivore"
 * Else, if only eatsPlants is true -> "herbivore"
 * Else, if only eatsAnimals is true -> "carnivore"
 * Else -> "undefined"
 */

var category = eatsPlants && eatsAnimals 
    ? "omnivore" 
    : eatsPlants 
        ? "herbivore" 
        : eatsAnimals 
            ? "carnivore" 
            : "undefined";

console.log(category);