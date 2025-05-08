{
    // Polymorphism
    class Person {
        getSleep() {
            console.log("Sleeping for a long time...");
        }
    }

    class Student extends Person {
        getSleep() {
            console.log("Sleeping for 8 hours.");
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log("Sleeping for only 6 hours.");
        }
    }

    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1); // Speeping for a long time.
    getSleepingHours(person2); // Speeping for 8 hours.
    getSleepingHours(person3); // Speeping for only 6 hours.

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        constructor(public radius: number) {
            super();
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Triangle extends Shape {
        constructor(public base: number, public height: number) {
            super();
        }
        getArea(): number {
            return 0.5 * this.base * this.height;
        }
    }

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    }

    const shape1 = new Shape();
    const shape2 = new Circle(7);
    const shape3 = new Triangle(4, 5);

    getShapeArea(shape1); // 0
    getShapeArea(shape2); // 153.93804002589985
    getShapeArea(shape3); // 10
}