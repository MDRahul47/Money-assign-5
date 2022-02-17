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
let allInput = parseInt(document.querySelectorAll('input'));


// --------------food rent clothes and balance here---------------
BTNcalculate.addEventListener('click', calculateHandler);
function calculateHandler() {
    let mainIncome = parseInt(income.value);
    let costFood = parseInt(Food.value);
    let constRent = parseInt(Rent.value);
    let constColthes = parseInt(Clothes.value);
    let TotalConst = costFood + constRent + constColthes;
    TotalExpense.innerText = TotalConst;

    let newBalance = mainIncome - TotalConst;
    Balance.innerText = newBalance;
    return newBalance;
};

// ---------------------save and % here -----------------------
BTNsave.addEventListener("click", saveMoney);
function saveMoney() {
    let mainIncome = parseInt(income.value);
    let numberPercent = parseInt(saveInput.value);
    let parcentance = mainIncome / 100;
    let finulSaveAmmount = parcentance * numberPercent;
    if (finulSaveAmmount <= calculateHandler()) {
        SavingAmount.innerText = finulSaveAmmount;
        RemainingBalance.innerText = calculateHandler() - finulSaveAmmount;
    }

    else {
        alert("sorry!! you don't have any sufficency blance")
    };
}






