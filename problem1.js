// Your site is live at https://sakilriaz.github.io/prob.js/
// repo link:https://github.com/sakilriaz/prob.js
// Problem-01 : Tax Calculator
function calculateTax(income,expense){
    if(income!=='number'||income<=0 || expense!=='number'|| expense<=0){
        return 'Invalid Input'
    }
    let taxableAmount = income - expense;
    // console.log(taxableAmount)
    let tax = taxableAmount * 0.2
    // console.log(tax)
    return tax;

}

const pay = calculateTax(10000,4000);
console.log(pay)
