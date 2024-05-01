{


  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const std1: Student = {
    name: "Tanvir",
    age: 38,
    gender: "Male",
    contactNo: "01700000000",
    address: "Dhaka",
  };

  const std2: Student = {
    name: "Akib",
    age: 31,
    gender: "Male",
    address: "Dhaka",
  };

  type Add = (num1: number, num2: number) => number


  const add: Add = (num1, num2) => num1 + num2;




}
