{
    // OOP --> Encapsulation
    class BankAccount {
        private readonly id: number; // assessable inside this class and classes that extends this class
        public name: string; // assessable from everywhere
        protected _balance: number; // assessable inside this class and classes that extends this class
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        public getBalance() {
            return { balance: this._balance };
        }
        private addBalance(amount: number) { // assessable form only this class
            this._balance += amount;
            return "Successfuly Balance Added";
        }
        public getHiddenMethod(amount: number): string { // method to access private method
            return this.addBalance(amount);
        }
    }

    const account1 = new BankAccount(111, "Mr. ABC", 200);
    console.log(account1.getHiddenMethod(300), account1);
}