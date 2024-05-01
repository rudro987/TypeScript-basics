{
    // spread operator
    // rest operator
    //destructuring

    const bros1: string[] = ['Sabbir', 'Tanvir', 'Tanjir'];

    const bros2: string[] = ['Tasnim', 'Tanjim'];

    bros1.push(...bros2);

    const mentors1 = {
        typeScript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    const greetFriends = ( ...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi, ${friend}`));
    }

}