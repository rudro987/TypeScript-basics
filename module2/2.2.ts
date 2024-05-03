{

    // interface

    type User1 = {
        name: string;
        age: number
    }

    interface User2 {
        name: string;
        age: number
    }


    type UserWithRole1 = User1 & { role: string };

    interface UserWithRole2 extends User2{
        role: string;
    }

    interface UserWithRole2 extends User1{
        role: string;
    }

    const user1: UserWithRole2 = {
        name: 'Tanvir',
        age: 38,
        role: 'manager'
    }


    type Roll1 = number[];

    interface Roll2{
        [index : number] : number
    }

    const rollNumber1: Roll1 = [1, 2, 3];

    type Add1 = (param1: number, param2: number)=> number;

    interface Add2{
        (param1: number, num2:number) : number
    }

    const add: Add2 = (num1, num2) => num1 + num2;
    




}