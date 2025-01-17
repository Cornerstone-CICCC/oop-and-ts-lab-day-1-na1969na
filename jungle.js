// Base Class: Animal
class Animal {
  static remainingAnimals = 0;

  constructor(name, species, energy = 0) {
    this._name = name;
    this._species = species;
    this._energy = energy;
    Animal.remainingAnimals++;
  }

  // Getters and Setters
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get species() {
    return this._species;
  }

  set species(value) {
    this._species = value;
  }

  get energy() {
    return this._energy;
  }

  set energy(value) {
    if (value <= 0) {
      this._energy = 0;
      Animal.remainingAnimals--;
    } else {
      this._energy = value;
    }
  }

  // Methods
  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    this._energy -= 10;
    target.energy -= 10;

    if (target.energy === 0) {
      console.log(`${this._name} wins! ${target.name} is out of energy!`);
    }
  }

  eat() {
    this._energy += 10;
  }
}

// Subclass: Bird
class Bird extends Animal {
  constructor(name, species, canFly = true) {
    super(name, species, 100);
    this._canFly = canFly;
  }

  get canFly() {
    return this._canFly;
  }

  set canFly(value) {
    this._canFly = value;
  }

  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    this._energy -= 20;
    target.energy -= 20;

    if (target.energy === 0) {
      console.log(`${this._name} wins! ${target.name} is out of energy!`);
    }
  }

  eat() {
    this._energy += 10;
  }
}

// Subclass: Mammal
class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species, 200);
    this._furColor = furColor;
  }

  get furColor() {
    return this._furColor;
  }

  set furColor(value) {
    this._furColor = value;
  }

  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    this._energy -= 50;
    target.energy -= 50;

    if (target.energy === 0) {
      console.log(`${this._name} wins! ${target.name} is out of energy!`);
    }
  }

  eat() {
    this._energy += 20;
  }
}

// Subclass: Reptile
class Reptile extends Animal {
  constructor(name, species, coldBlooded = true) {
    super(name, species, 100);
    this._coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this._coldBlooded;
  }

  set coldBlooded(value) {
    this._coldBlooded = value;
  }

  attack(target) {
    if (this._energy <= 0) {
      console.log(`${this._name} has no energy to attack!`);
      return;
    }

    this._energy -= 30;
    target.energy -= 30;

    if (target.energy === 0) {
      console.log(`${this._name} wins! ${target.name} is out of energy!`);
    }
  }

  eat() {
    this._energy += 15;
  }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
