// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.

class Cat {
    constructor(name, breed, historyOfDepression) {
        this.name = name;
        this.breed = breed;
        this.isDepressive = historyOfDepression;        // a boolean to make life harder!
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;                        // this never increases... I guess cats are solitary little critters.
        this.happiness = 0;
    }

    sleep = (hours) => {
        this.hunger += (hours/2);
        this.tiredness -= (this.isDepressive) ? (hours*4) : (hours*5);
        this.happiness += (this.isDepressive) ? 1 : 3;
    };

    eat = (grams) => {
        this.hunger -= (grams/5);
        this.happiness += (this.isDepressive) ? (grams/5) : (grams/4);  // eating's happiness effect increases with depression.
    };

    play = (minutes) => {
        this.tiredness += minutes;
        this.hunger += (minutes/3);
        this.loneliness -= (minutes*3);
        this.happiness += (this.isDepressive) ? (minutes/2) : minutes; // I actually genuinely feel badly for introducing this variable now.
    };
};


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

let felix = new Cat("Felix", "Tabby", false);  // Felix is our happy cat.
let nelly = new Cat("Nelly", "Negative", true);

felix.play(45);
felix.sleep(16);  // realistic cat sleeping time shown
felix.eat(125);     // shoulda called him felix the pig
console.log(felix);

nelly.play(45);
nelly.sleep(16);
nelly.eat(125);
console.log(nelly);