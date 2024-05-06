{
    // Abstraction

    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void
    } 

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('I am starting the car engine');
        }
        stopEngine(): void {
            console.log('I am stopping the car engine'); 
        }
        move(): void {
            console.log('I am moving the car');
        }
        test(){
            console.log('I am testing a method');
            
        }
    }

    const toyotaCar = new Car1();

    toyotaCar.startEngine();
    toyotaCar.stopEngine();
    toyotaCar.move();
    toyotaCar.test();


    // abstract class

    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;

        test(){
            console.log('I am testing a method'); 
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('I am starting the car engine');
        }
        stopEngine(): void {
            console.log('I am stopping the car engine'); 
        }
        move(): void {
            console.log('I am moving the car');
        }
    }

    const hondaCar = new ToyotaCar();
    






}