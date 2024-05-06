{

    // access modifiers

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addBalance(amount: number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }

    }

    const newAccount1 = new BankAccount(111, 'Mr. X', 200);
    newAccount1.addBalance(30);
    const currentBalance = newAccount1.getBalance();

    console.log(currentBalance);
    





}