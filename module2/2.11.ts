{

    // utility types

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    // Pick

    type NameAge = Pick<Person, "name"|"age">

    //Omit

    type ContactInfo = Omit<Person, "name"|"age">

    // Required

    type PersonRequired = Required<Person>

    // Partial

    type PersonPartial = Partial<Person>

    //Readonly

    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly = {
        name: 'Tanvir',
        age: 38,
        contactNo: '017'
    }

    // Record

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const EmptyObj : Record<string, unknown> = {
                
    }

    const obj1 : MyObj = {
        a: "aa",
        b: "bb",
    }





}