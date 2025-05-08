{
  // OOP --> Inheritence

  class Person {
    constructor(public name: string, public age: number, public address: string) { }
    getSleep(numOfHr: number) {
      console.log(`${this.name} sleep for ${numOfHr}hr.`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. Ghumbabu", 19, "ctg");
  student1.getSleep(4);

  class Teacher extends Person {
    constructor(name: string, age: number, address: string, public designation: string) {
      super(name, age, address);
    }
    takeClass(numOfHr: number) {
      console.log(`${this.name} will take ${numOfHr}hr class.`);
    }
  }

  const teacher1 = new Teacher("Mr. Hob", 38, "dhk", "Lecturer");
  teacher1.getSleep(3);
  teacher1.takeClass(1.5);
}