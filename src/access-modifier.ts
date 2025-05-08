{
    // Access Modifier
    class BankAccount {
        private readonly id: number; // Private
        public readonly uId: number; // Readonly
        public name: string; // Public
        protected _balance: number; // Protected
        constructor(id: number, uId: number, name: string, _balance: number) {
            this.id = id;
            this.uId = uId;
            this.name = name;
            this._balance = _balance;
        }
        public getBalance() {
            return { balance: this._balance };
        }
        public addBalance(amount: number) {
            this._balance += amount;
            return "Successfuly Balance Added";
        }
        public withdrawBalance(amount: number) {
            if (this._balance >= amount) {
                this._balance -= amount;
                return "Withdraw Successful";
            } else {
                return "Eto taka nai";
            }
        }
    }

    class StudentAccount extends BankAccount {
        testMethod() {
            return this._balance;
        }
    }

    const account1 = new BankAccount(111, 2645654, "Mr. ABC", 20);
    console.log(account1.getBalance());
    console.log(account1.addBalance(50));
    console.log(account1.getBalance());
    console.log(account1.withdrawBalance(70));
    console.log(account1.getBalance());

    const acc2 = new StudentAccount(442, 23453, "Mr. XYZ", 10);
    console.log(acc2.testMethod());
}