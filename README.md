# Object Oriented Programming

## OOP --> class
- A blueprint or template for creating object
- Includes property and method
- A ```constructor()``` method is used to initialize property
- To create an instance of a class, ```new``` keyword is used
```ts
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
```
- Same work using parameter property
    - ```public``` keyword is used in ```constructor()``` that handle both declaration and initialization in TS
```ts
class Animal {
    constructor(public name: string, public species: string, public sound: string) {}

    makeSound() {
        console.log(`The ${this.name} says ${this.sound} is a ${this.species}.`);
    }
}
```
- Creating and using instance from class
```ts
// creating instance
const dog = new Animal("Boss Dog", "dog", "Ghew Ghew");
// using it
dog.name;
dog.makeSound();
```

## OOP --> Inheritance
- Inherit both property and method from parent
- ```super()``` method is used to pass data to parent class inside from ```constructor()```
```ts
// Parent class with property and method
class Person {
    constructor(public name: string, public age: number, public address: string) { }
    getSleep(numOfHr: number) {
        console.log(`${this.name} sleep for ${numOfHr}.`);
    }
}

// Inherit from parent
class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

// Inherit and add own property and method
class Teacher extends Person {
    constructor(name: string, age: number, address: string, public designation: string) {
        super(name, age, address);
    }
    takeClass(numOfHr: number) {
        console.log(`${this.name} will take ${numOfHr}hr class.`);
    }
}
```

## Type Guard Using ```typeof```, ```in``` & ```instanceof```
- Type Guard ```typeof```
```ts
type AlphaNumeric = number | string;
const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === 'number' && typeof param2 === 'number') return param1 + param2;
    return (param1 as string) + (param2 as string);
}
```
- Type Guard ```in```
```ts
interface INormalUser { name: string; }
interface IAdminUser { name: string; role: "admin"; }
const getUser = (user: INormalUser | IAdminUser) => {
    if ('role' in user) {
      console.log(`Name: ${user.name} and Role: ${user.role}`);
    } else { console.log(`Name: ${user.name}`); }
}
```
- Type Guard ```instanceof```
```ts
// Class
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
// Instance
const isDog = (animal: Animal): animal is Dog => { // animal is Dog --> special type boolean
    return animal instanceof Dog; // checking if animal is an instance of Dog class
}
const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
        animal.makeBark(); // ✅ After confirmation
    } else {
        animal.makeSound(); // ✅ Common method
        // animal.makeBark(); // ❌ Instance method
    }
}
const dog = new Dog("DOG Sir", "Dog");
getAnimal(dog);
```

## Access Modifier ```public```, ```private```, ```protected```, ```readonly```
- ```public``` --> Default Access
```ts
class BankAccount {
    public age: number; // Same as --> age: number;
    constructor( age: number) {
        this.age = age;
    }
}
```
- ```private``` --> Only accessible inside the class where it’s declared / initialized
    - Naming convention --> property / method name starts with ```_``` (userscore)
```ts
class BankAccount {
    private _balance: number;
    constructor( _balance: number) {
        this._balance = _balance;
    }
    getBalance() {
        return this._balance; // only accessible inside the class
    }
}
```
- ```protected``` --> Accessible inside initialized class and inherited class
    - Naming convention --> property / method name starts with ```_``` (userscore)
```ts
class BankAccount {
    protected _balance: number;
    constructor( _balance: number) {
        this._balance = _balance;
    }
    getBalance() {
        return this._balance; // only accessible inside the class
    }
}
class StudentAccount extends BankAccount {
    testMethod() {
        // accessible inside child class as _balance is protected in parent class
        this._balance;
    }
}
```
- ```readonly``` --> Property cannot be modified after initialization
    - ```readonly``` can be used with ```public``` or ```private``` access modifier
```ts
class BankAccount {
    public readonly id: number; // Same as --> age: number;
    constructor( id: number) {
        this.id = id;
    }
}
```

## Getter and Setter
- Getter --> Using ```get``` keyword
    - Special type method that is accessible as method
    - Only get a value as return
```ts
class BankAccount {
    constructor(private readonly id: number, public name: string, protected _balance: number) { }
get balance() { // getter --> Special type method
    return this._balance;
}
```
- Setter --> Using ```set``` keyword
    - Special type method that is accessible as method
    - Modify class property
```ts
class BankAccount {
    constructor(private readonly id: number, public name: string, protected _balance: number) { }
    set deposit(amount: number) { // setter --> Special type method
        this._balance += amount;
    }
}
```
- Use getter and setter
```ts
const user = new BankAccount(51, "Mr. AMZ", 500);
const balanceUsingGetter = user.balance; // using getter method as property
user.deposit = 50; // using setter method as property
```

## Static in class
- Directly use class method or property without creating an instance
    - ```static``` keyword is used to make a method or property static (globally shared)
    - Need to call / use by the class name
```ts
class Counter {
    static count: number = 0;
    static increment() {
        return (Counter.count = Counter.count + 1);
    }
    static decrement() {
        return (Counter.count = Counter.count - 1);
    }
}
console.log(Counter.increment()); // Using class method directly
```

## Polymorphism in OOP
```ts
// Parent Class
class Shape {
    getArea(): number {
        return 0;
    }
}
// Child Class #1
class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
// Child Class #2
class Triangle extends Shape {
    constructor(public base: number, public height: number) {
        super();
    }
    getArea(): number {
        return 0.5 * this.base * this.height;
    }
}
// Function to print output
const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
}
// creating instance
const shape1 = new Shape();
const shape2 = new Circle(7);
const shape3 = new Triangle(4, 5);
// pass the instance to print function
getShapeArea(shape1); // Different Results // 0
getShapeArea(shape2); // Different Results // 153.93804002589985
getShapeArea(shape3); // Different Results // 10
```

## Abstraction in OOP
- Get an idea about procedure first
- Then real implementation in implemented class
### Using Interface
- An Idea inside the interface
- Real implementation in the implemented class
- To create an implemented class from interface, use ```implements``` keyword
```ts
// idea about procedure
interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}
// real implementation here
class Car implements IVehicle {
    startEngine(): void {
        console.log(`I am starting the engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
}
// create and use instance of abstract class
const toyodaCar = new Car();
toyodaCar.startEngine();
```
### Using Abstract
- No implementation in parent class just an idea
- ```abstract``` keyword is used both for Parent class and method in parent class
- Real implementation in the inherited class
```ts
// idea here
abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
}

// real implementation here
class ToyodaCar extends Car2 {
    startEngine(): void {
        console.log(`I am starting the engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
}

const toyodaCar2 = new ToyodaCar();
toyodaCar2.startEngine();
```

## Encapsulation
- Hide property or method to access from outside
- Access Modifier --> ```private``` & ```protected``` --> Encapsulation
```ts
class BankAccount {
    // assessible inside this class and classes that extends this class
    private readonly id: number;
    // assessible from everywhere
    public name: string;
    // assessible inside this class and classes that extends this class
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    public getBalance() {
        return { balance: this._balance };
    }
    // assessible form only this class
    private addBalance(amount: number) {
        this._balance += amount;
        return "Successfully Balance Added";
    }
    // method to access private method
    public getHiddenMethod(amount: number): string {
        return this.addBalance(amount);
    }
}

const account1 = new BankAccount(111, "Mr. ABC", 200);
console.log(account1.getHiddenMethod(300), account1);
```
