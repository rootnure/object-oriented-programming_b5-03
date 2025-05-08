{
  // OOP --> Class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound} is a ${this.species}.`);
    }
  }

  const dog = new Animal("Boss Dog", "dog", "Ghew Ghew");
  dog.name;
  dog.makeSound();

  const cat = new Animal("Mini", "cat", "Meaw Meaw");
  cat.sound;
  cat.makeSound();

  class Car {
    constructor(public brand: string, public model: string, public price: number) {
      // using parameter properties
    }

    startCar() {
      console.log(`The ${this.brand} car with model ${this.model} costs ${this.price} is starting`);
    }
  }

  const toyoda = new Car("Toyoda", "Toyoda 56A9", 50000);
  toyoda.startCar();
}