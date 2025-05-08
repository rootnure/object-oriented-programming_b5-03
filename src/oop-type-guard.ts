{
  // instanceof guard

  class Animal {
    constructor(public name: string, public species: string) { }
    makeSound() {
      console.log("I am making sound.");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am meawing");
    }
  }

  // handle instanceof in a smart way
  const isDog = (animal: Animal): animal is Dog => { // animal is Dog --> special type boolean
    return animal instanceof Dog;
  }
  const isCat = (animal: Animal): animal is Cat => { // animal is Cat --> special type boolean
    return animal instanceof Cat;
  }

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark(); // ✅ After confirmation
    } else if (isCat(animal)) {
      animal.makeMeaw(); // ✅ After confirmation
    } else {
      animal.makeSound(); // ✅ Common method
      // animal.makeBark(); // ❌ Instance method
      // animal.makeMeaw(); // ❌ Instance method
    }
  }

  const dog = new Dog("DOG Sir", "Dog");
  const cat = new Cat("Tom", "Cat");

  getAnimal(dog);
  getAnimal(cat);

}