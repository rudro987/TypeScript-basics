{
    // statics in oop

    class Counter {
        static count: number = 0;
        
        static incremenet(){
            return (Counter.count = Counter.count + 1);
        }
        
        static decrement(){
            return (Counter.count = Counter.count - 1);
        }
    }

    // const instance1 = new Counter();
    console.log(Counter.incremenet());

    // const instance2 = new Counter();
    console.log(Counter.incremenet());
    

    // const instance3 = new Counter();
    console.log(Counter.decrement());





}