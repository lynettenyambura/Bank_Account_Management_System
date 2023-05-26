class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this._accountNumber = accountNumber;
      this._accountHolder = accountHolder;
      this._balance = balance;
    }
  
    get accountNumber() {
      return this._accountNumber;
    }
  
    get accountHolder() {
      return this._accountHolder;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(amount) {
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
      } else {
        console.log("Insufficient balance!");
      }
    }
  }

  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
      super(accountNumber, accountHolder, balance);
      this._interestRate = interestRate;
    }
  
    calculateInterest() {
      return (this._balance * this._interestRate) / 100;
    }
  }

  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this._overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount <= this._balance + this._overdraftLimit) {
        this._balance -= amount;
      } else {
        console.log("Withdrawal amount exceeds overdraft limit!");
      }
    }
  }

  
  // Create instances of accounts
const savingsAccount = new SavingsAccount("001", "Lynette Mwangi", 5000, 5);
const checkingAccount = new CheckingAccount("CHK-001", "Jane Wambui", 2000, 1000);

// Retrieve account information
console.log(savingsAccount.accountNumber); 
console.log(savingsAccount.accountHolder); 
console.log(savingsAccount.balance); 

// Deposit an amount
savingsAccount.deposit(1000);
console.log(savingsAccount.balance); 

// Withdraw an amount
savingsAccount.withdraw(2000);
console.log(savingsAccount.balance); 

// Calculate and display interest amount

console.log(savingsAccount.calculateInterest()); 

// Perform a withdrawal within the overdraft limit
checkingAccount.withdraw(3000);
console.log(checkingAccount.balance); 

// Perform a withdrawal exceeding the overdraft limit
checkingAccount.withdraw(3000); // Output: Withdrawal amount exceeds overdraft limit!



const savingsAccountNumberElement = document.getElementById("savingsAccountNumber");
const savingsAccountHolderElement = document.getElementById("savingsAccountHolder");
const savingsAccountBalanceElement = document.getElementById("savingsAccountBalance");
const savingsDepositAmountElement = document.getElementById("savingsDepositAmount");
const savingsDepositButton = document.getElementById("savingsDepositButton");
const savingsWithdrawAmountElement = document.getElementById("savingsWithdrawAmount");
const savingsWithdrawButton = document.getElementById("savingsWithdrawButton");
const savingsCalculateInterestButton = document.getElementById("savingsCalculateInterestButton");
const savingsInterestAmountElement = document.getElementById("savingsInterestAmount");


savingsAccountNumberElement.textContent = savingsAccount.accountNumber;
savingsAccountHolderElement.textContent = savingsAccount.accountHolder;
savingsAccountBalanceElement.textContent = savingsAccount.balance;

// Adding event listeners for Deposit, Withdraw, and Calculate Interest buttons
savingsDepositButton.addEventListener("click", function() {
  const amount = parseFloat(savingsDepositAmountElement.value);
  savingsAccount.deposit(amount);
  savingsAccountBalanceElement.textContent = savingsAccount.balance;
  savingsDepositAmountElement.value = "";
});

savingsWithdrawButton.addEventListener("click", function() {
  const amount = parseFloat(savingsWithdrawAmountElement.value);
  savingsAccount.withdraw(amount);
  savingsAccountBalanceElement.textContent = savingsAccount.balance;
  savingsWithdrawAmountElement.value = "";
});

savingsCalculateInterestButton.addEventListener("click", function() {
  const interestAmount = savingsAccount.calculateInterest();
  savingsInterestAmountElement.textContent = interestAmount;
});

