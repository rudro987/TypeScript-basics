{

    // mapped arrays

    const arrOfNumbers: number[] = [1, 2, 3];
    
    const arrOfStrings : string[] = arrOfNumbers.map(number => number.toString())

    console.log(arrOfStrings)


    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height']; //lookup type

    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height: string; width: number}> = {
        height: '300',
        width: 50
    }


}