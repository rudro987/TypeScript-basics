{

    // Ternary operator || optional chaining || nullish coalescing operator

    const age: number = 15;

    if( age >= 18 ){
        console.log('Adult');
    }else{
        console.log('Not Adult');
        
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);

    //nullish coalescing operator
    //null /undefined --> decision making

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? 'Guest';
    console.log({ result1 });


    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user: User = {
        name: 'Tanvir Hossain',
        address: {
            city: 'Dhaka',
            road: "road 31",
            presentAddress: 'Pallabi',
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent Address';

    console.log( { permanentAddress });
    
    
    


}