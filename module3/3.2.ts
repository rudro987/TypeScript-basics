{
  //

  class User {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends User {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const studen1 = new Student("Tanvir", 24, "Dhaka");

  studen1.getSleep(5);

  class Teacher extends User {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes`);
    }
  }

  const teacher1 = new Teacher("Mezba", 42, "Dhaka", "Assistant Professor");

  teacher1.takeClass(20);

  //
}
