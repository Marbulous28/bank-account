//Buisness Logic

function Account(first, last, balance) {
  this.firstName = first;
  this.lastName = last;
  this.balance = balance;
}

Account.prototype.AccountInfo = function(){
  return this.firstName + " " + this.lastName + ": $" + this.balance;
}

Account.prototype.Withdraw = function(toWithdraw){
  this.balance = this.balance - toWithdraw;
}

Account.prototype.Deposit = function(toDeposit){
  this.balance = this.balance + toDeposit;
}


//UI logic

$(document).ready(function(){
  var newAccount = '';
  $("form#createAccount").submit(function(event) {
    event.preventDefault();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var initialDeposit = parseInt($("#deposit").val());
    newAccount = new Account(firstName, lastName, initialDeposit);
    var accountBalance = newAccount.AccountInfo();
    $("#balance").text(accountBalance);
  });

  $("form#depositWithdraw").submit(function(event) {
    event.preventDefault();

    var selection = $("#choice").val();
    var amount = parseInt($("#amount").val());

    if(selection === "withdraw") {
      newAccount.Withdraw(amount);
    } else if (selection === "deposit") {
      newAccount.Deposit(amount);
    } else {
      alert("you done fucked up to get here.");
    }
    accountBalance = newAccount.AccountInfo();
    $("#balance").text(accountBalance);
  });
});
