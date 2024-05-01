{
    
    
    const user = {
        id:345,
        name: {
            firstName: 'Tanvir',
            middleName: 'Hossain',
            lastName: 'Talukder'
        },
        contactNo: '01750112223',
        address: 'Bangladesh'
    }

    const { contactNo, name: { middleName: midName}} = user;

    //array destructuring

    const myFriends = ['Ross', 'Joey', 'Monica', 'Phoebe', 'Rachel', 'Chandler'];

    const [,, c, ...rest ] = myFriends;

}