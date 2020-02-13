class Dog {
    constructor() {
        this.hunger = 0;
    }
    
    eat = (food) => {
        this.food = food;
    }

    remaining = () => {
        console.log(this.food.amount)
    }
 }

let food = {amount : 100};

let fido = new Dog();
fido.eat(food);
fido.remaining();