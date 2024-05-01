{

    //nulalble type / unknown types

    const searchName = (value: string | null) => {
        if(value){
            console.log('Searching');
        }else{
            console.log('There is nothing to seach');
        }
    }

    searchName(null);

    const getSpeedInMeterPerSecond = (value:unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`);
        }

        if(typeof value === 'string'){
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}`);
            
        }else{
            console.log('Wrong input');
            
        }
    }
    getSpeedInMeterPerSecond(`1000 kmh^-1`)


    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    throwError('Error thrown')


}