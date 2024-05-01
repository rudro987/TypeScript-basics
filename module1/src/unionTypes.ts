{

  type FrontEndDeveloper = "Beginner" | "Junior";
  type FullStackDeveloper = 'FrontEndDeveloper' | 'FullStackDeveloper';

  type Developer = FrontEndDeveloper | FullStackDeveloper;

  const newDeveloper: FrontEndDeveloper = "Junior";

  type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bloodGroup: "O+" | "A+" | 'AB+';
  }

  const user1: User = {
    name: 'Tanvir Hossain',
    gender: 'male',
    bloodGroup: 'O+',
  }

  type FrontEndEngineer = {
    skills: string[];
    designation1: 'FrontEnd Developer'
  }

  type BackEndEngineer = {
    skills: string[];
    designation2: 'BackEnd Developer'
  }

  type FullStackEngineer = FrontEndEngineer & BackEndEngineer;

  const fullStackDeveloper : FullStackEngineer = {
    skills: ['HTML', 'CSS', 'React'],
    designation1: 'FrontEnd Developer',
    designation2: 'BackEnd Developer'
  }

}
