{

    // generic with interfaced

    interface Developer<T, X = null>{
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?:X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper : Developer<EmilabWatch> = {
        name: 'Tanvir',
        computer: {
            brand: 'Asus',
            model: 'x-255ur',
            releaseYear: 2013,
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'Oled'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike{
        model: string;
        cc: string;
    }

    const richDeveloper : Developer<AppleWatch, YamahaBike> = {
        name: 'Akib',
        computer: {
            brand: 'HP',
            model: 'z-255',
            releaseYear: 2018,
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'pro',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: 'Yamaha',
            cc: '100cc',
        }
    }



}