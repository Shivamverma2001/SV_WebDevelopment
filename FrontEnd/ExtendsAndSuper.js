class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    meow() {
        return "MEOWW";
    }
}
class Cat extends Pet {
    constructor(name, age, livesleft = 9) {
        super(name, age);
        this.livesleft = livesleft;
    }
    meow() {
        return "MEOWW";
    }
}
class Dog extends Pet {

    bark() {
        return "WOOF!!!";
    }
}