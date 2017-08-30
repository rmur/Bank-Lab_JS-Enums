var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  }

}

Bank.prototype.totalValue = function(){
  return this.accounts.reduce( (sum, account) => sum + account.value, 0);
}

Bank.prototype.accountByName = function(name){
   return this.accounts.find(account => account.name === name)
}

Bank.prototype.largestAccount = function(){
  this.accounts.sort( (a, b) => a.value - b.value )
  var index = (this.accounts.length - 1);
  return this.accounts[index];
}

Bank.prototype.averageValue = function(){
  return (this.totalValue() / this.accounts.length);
}

Bank.prototype.addInterest = function(interestRate){
  this.accounts.map(account => account.value *= 1.1) 
}

module.exports = Bank;
