// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Create an object that represents a cat.
// It should have properties for tiredness, hunger, loneliness and happiness.
// You can set all of these properties to 0 by default.

class Cat {
    constructor(name) {
        this.name = name;
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
};

// B) Instantiate a cat called 'boots' with the Cat class.

let boots = new Cat("Boots");

// C) What do you see when you console.log(boots)?

console.log(boots);

// D) What if I want to output just boots' species?

// You'd have to add that as a property first:

boots.species = "Feline";  // Or mammal or whatever - I'm a programmer not a biologist dammit!
console.log(boots.species);

// E) Boots' name is not part of its object.
//    Update the class above to accept have a name parameter
//    and pass Boots' name as an argument.

// 'Retrofitted' above:

console.log(boots.name);