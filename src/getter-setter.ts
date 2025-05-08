{
    // Getter and Setter --> Special type method that can be used as property
    class BankAccount {
        constructor(private readonly id: number, public name: string, protected _balance: number) { }

        // getBalance() {
        //     return this._balance;
        // }
        // Using Getter
        get balance() { // Special type method
            return this._balance;
        }

        // depositBalance(amount: number) {
        //     this._balance += amount;
        // }
        // Using Setter
        set deposit(amount: number) {
            this._balance += amount;
        }
    }

    const user = new BankAccount(51, "Mr. AMZ", 500);
    // const balanceNormalMethod = user.getBalance();
    const balanceUsingGetter = user.balance; // using as property
    console.log(balanceUsingGetter);
    user.deposit = 50;
    console.log(user);
}