// Declare a generic class for humans
class Human {
    constructor() {
        this.species = "Homo Sapien";
    }
    dance = () => {
        console.log("disco time");
    }
};

// Declare a class that extends Human
class Male extends Human {
    constructor(name) {
        super(); // call parent constructor to set the species
        this.name = name;
    }
    greet = () => {
        console.log("I'm " + this.name);
    }
};

// Create a bob object that is a HUMAN MALE
let bobby = new Male('Bobby');   // I already used the bob variable before I read this :)

// Validation
console.log('1. Species: ', bobby.species);
console.log('2. name: ', bobby.name);
bobby.greet();
bobby.dance();