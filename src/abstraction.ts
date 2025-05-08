{
    // OOP --> Abstraction
    // 1. interface
    // 2. abstract

    interface IVehicle1 {
        name: string;
        model: string;
    }

    const vehicle1: IVehicle1 = { // ✅ This is valid for object
        name: "Toyoda",
        model: "Toyoda 20200"
    }

    // class Car : IVehicle1 { // ❌ Invalid for class
    //     // name: "Toyoda",
    //     // model: "Toyoda 20200"
    // }

    // class Car implements IVehicle1 { // ✅ Now it's valid using implements keyword
    //     // functionality
    // }


    // 1. Using Interface
    // Idea about procedure
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
        // extra (own) method
        test(): void {
            console.log(`I am testing`);
        }
    }

    const toyodaCar = new Car();
    toyodaCar.startEngine();

    // 2. Using Abstract
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
}