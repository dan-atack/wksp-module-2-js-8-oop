// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

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

    exist = (minutes) => {
        let existing = setInterval(() => {
            this.tiredness += 1;
            this.hunger += 1;
            this.loneliness += (this.isDepressive) ? 3 : 2;
            this.happiness -= (this.isDepressive) ? 1 : 0.5;
        }, 1000);
        setTimeout(() => {
            clearInterval(existing);
        }, (minutes + 1)*1000);               // We'll 'accelerate time' so each minute takes one second. I haven't got all day!
    };

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

// B) Make Boots wait 20 minutes and call then console.log(boots);

let boots = new Cat("Boots", "Siamese", false);

boots.exist(20);

console.log(boots);

