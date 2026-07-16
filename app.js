const expenseForm = document.querySelector(".expense-form");

const totalBalance = document.querySelector(".balance-amt");
const income = document.querySelector(".income-amt");
const expenses = document.querySelector(".expenses-amt");

const transList = document.querySelector("#transactionList");

const expenseCategory = document.querySelector(".expense-category");
const titleInput = document.querySelector(".new-title");
const amountInput = document.querySelector(".new-amt");
const selectDate = document.querySelector(".date");
const transType = document.querySelectorAll(".transaction-type");


let totalIncome = 0;
let totalExpense = 0;

let transactions = []


expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleValue = titleInput.value.trim();
  const amountValue = Number(amountInput.value);
  const expenseCategoryValue = expenseCategory.value;
  const dateValue = selectDate.value;

  let transTypeInput;

  if (transType[0].checked) {
    transTypeInput = transType[0].value;
  } else if (transType[1].checked) {
    transTypeInput = transType[1].value;
  }

  if (
    !titleValue ||
    !amountValue ||
    !expenseCategoryValue ||
    !dateValue ||
    !transTypeInput
  ) {
    alert("please fill all fields");
    return;
  }

  if (amountValue <= 0 ){
    alert("maount should be greater than 0");
    return;
  }

  const amountClass = transTypeInput === "income" ? "plus" : "minus";
  const sign = transTypeInput === "income" ? "+" : "-";

  const historyBox = document.createElement("div");
  historyBox.classList.add("transaction");

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

  if (transTypeInput === "income") {
    totalIncome += amountValue;
  } else {
    totalExpense += amountValue;
  }


let balance = totalIncome-totalExpense

  income.textContent = `PKR ${totalIncome}`;
  expenses.textContent = `PKR ${totalExpense}`;
  totalBalance.textContent = `PKR ${balance}`


  let storeValue = {
    title: titleValue,
    amount: amountValue,
    category: expenseCategoryValue,
    date: dateValue,
    transtype: transTypeInput,
  }

  transactions.push(storeValue);

  localStorage.setItem("transactions", JSON.stringify(transactions));



  expenseForm.reset();
});

  const savedTransactions = JSON.parse(localStorage.getItem("transactions"))