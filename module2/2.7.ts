{

    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = keyof Vehicle;

    const person1 : Owner = "car";

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) =>{
        return obj[key];
    }

    const user = {
        name: 'Tanvir',
        age: 26,
        address: 'Dhaka'
    }

    const result1 = getPropertyValue(user, 'name')

    


}