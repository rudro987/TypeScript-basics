{
  //

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Bark");

  const cat = new Animal("Persian", "Cat", "Meow");

  cat.makeSound();

  //
}
