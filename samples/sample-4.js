class Student {
    constructor() {
        this.excitement = 1;
    }
    learn = () => {this.excitement += 100}

    writeCode = () => { this.learn(); }
}

let bob = new Student();
bob.writeCode();
console.log(bob.excitement);