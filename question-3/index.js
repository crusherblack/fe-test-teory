function createBankAccount() {
  let accountNumber = 0;
  let balance = 0;

  return {
    getAccountNumber: function () {
      return accountNumber;
    },
    setAccountNumber: function (number) {
      accountNumber = number;
    },
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient funds";
      }
    },
  };
}

const account = createBankAccount();
account.setAccountNumber(123456789);
console.log(account.getAccountNumber()); // Output: 123456789

console.log(account.getBalance()); // Output: 0
console.log(account.deposit(100)); // Output: 100
console.log(account.getBalance()); // Output: 100
console.log(account.withdraw(50)); // Output: 50
console.log(account.getBalance()); // Output: 50
console.log(account.withdraw(100)); // Output: Insufficient funds
