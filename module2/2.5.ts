{
  // Function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = {
    id: number;
    name: string;
  };

  const resGenericWithObject = createArrayWithGeneric<User>({
    id: 111,
    name: "X",
  });



  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const response1 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resTuple = createArrayWithTuple<string, {name: string}>("Bangladesh", {name: 'Asia'});

 
  const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
    const course = 'Next Level Web Development';
    return {
        ...student,
        course
    }
  }

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({id: 1,name: 'Tanvir', email: 'x@gmail.com', devType: 'NLWD'})

  const student2 = addCourseToStudent({id: 2, name: 'Akib', email: 'y@gmail.com', hasWatch: 'Apple Watch'})









}
