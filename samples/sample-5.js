class Dog {
    constructor() {
        this.hunger = 0;
    }
    
    run = () => {
        this.eat();
    }
    
    eat = () => {
        this.hunger = this.hunger - 10;     // This function is hoisted...? Or maybe they're all created in the abstract before I create Fido...
    }
 }

 let fido = new Dog();
 fido.run();
 console.log(fido.hunger);
