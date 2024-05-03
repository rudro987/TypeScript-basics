{

    //Generic types

    type GenericArray<T> = Array<T>

    const rollNumers : GenericArray<number> = [3, 6, 8];

    const students : GenericArray<string> = ['x', 'y', 'z'];

    const booleansArray : GenericArray<boolean> = [true, false];

    const user1 : GenericArray<{name: string, age: number}> = [
        {
            name: 'Tanvir',
            age: 38,
        },
        {
            name: 'Akib',
            age: 32
        }
    ];


    // generic tuple

    type GenericTuple<X,Y> = [X, Y]

    const user2 : GenericTuple<string, string> = ['x', 'y'];

    const userWithId : GenericTuple<number, {name:string, email:string}> = [1234, {name: 'Tanvir', email: 'a@gmail.com'}]




}