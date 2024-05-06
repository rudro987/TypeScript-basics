{

    // getter and setter

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        
        public get balance() : number {
            return this._balance;
        }

        
        public set deposit(amount : number) {
            this._balance = this._balance + amount;
        }
        
    }

    const newAccount1 = new BankAccount(111, 'Mr. X', 50);
    newAccount1.deposit = 30;

    const currentBalance = newAccount1.balance;

    console.log(currentBalance);
    





}