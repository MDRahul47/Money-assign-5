// -------------all id call here ----------------

let income = document.getElementById("Income");
let Food = document.getElementById("Food");
let Rent = document.getElementById("Rent");
let Clothes = document.getElementById("Clothes");
let BTNcalculate = document.getElementById("Calculate-btn");
let TotalExpense = document.getElementById("Total-Expense");
let Balance = document.getElementById("Balance");
let saveInput = document.getElementById("save-input");
let BTNsave = document.getElementById("save-btn");
let SavingAmount = document.getElementById("Saving-Amount");
let RemainingBalance = document.getElementById("Remaining-Balance");

// --------------food rent clothes sum here---------------
BTNcalculate.addEventListener('click', calculateHandler)
function calculateHandler() {
    let costFood = parseInt(Food.value);
    let constRent = parseInt(Rent.value);
    let constColthes = parseInt(Clothes.value);
    let totalCost = costFood + constRent + constColthes;
    TotalExpense.innerText = totalCost;

}

