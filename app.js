const expenseForm = document.querySelector('.expense-form');

const totalBalance = document.querySelector('.balance-amt');
const income = document.querySelector('.income-amt');
const expenses = document.querySelector('.expenses-amt');

const transList = document.querySelector('#transactionList');

const expenseCategory = document.querySelector('.expense-category')
const titleInput = document.querySelector('.new-title');
const amountInput = document.querySelector('.new-amt');
const selectDate = document.querySelector('.date');
const transType = document.querySelectorAll('.transaction-type');




expenseForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    console.log("working")
const titleValue = titleInput.value.trim() ;
const amountValue = Number(amountInput.value) ;
const expenseCategoryValue = expenseCategory.value ;
const dateValue = selectDate.value;

let transTypeInput;

if(transType[0].checked){
    transTypeInput = transType[0].value;
}else if(transType[1].checked){
    transTypeInput = transType[1].value;
}


if(
    !titleValue ||
    !amountValue ||
    !expenseCategoryValue ||
    !dateValue ||
    !transTypeInput
){
    alert("please fill all fields");
    return;
}

const amountClass = transTypeInput === "income" ? "plus" : "minus";
const sign = transTypeInput === "income" ? "+" : "-"

const historyBox = document.createElement('div');
    historyBox.classList.add('transaction');

    historyBox.innerHTML = `
    <div>
    <h4>${titleValue}</h4>
    <p>${expenseCategoryValue} • ${dateValue}</p>
    </div>

    <span class = "${amountClass}">
    ${sign} PKR ${amountValue}
    </span>
    `;

    transList.appendChild(historyBox);

    expenseForm.reset();
});