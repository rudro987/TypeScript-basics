{

    // conditional type

    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }
    type CheckVehicle<T> = T extends Sheikh ? true : false;

    type HasTractor = CheckVehicle<'tractor'>




}