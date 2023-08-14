const form = document.querySelector("#personal");
const panel = document.querySelector("#panel");

const customerName = document.querySelector("#customerName");
const customerPassword = document.querySelector("#customerPassword");

const depositeModal = document.querySelector("#depositeModal");
const withdrawModal = document.querySelector("#withdrawModal");
const balanceModal = document.querySelector("#balanceModal");

const depositeInput = document.querySelector("#depositeInput");
const withdrawInput = document.querySelector("#withdrawInput");
const balanceInput = document.querySelector("#balanceInput");

let yourBalance = 0;
panel.style.display = "none";

function createWallet(customerName, customerPassword) {
  event.preventDefault();
  customerName = this.customerName.value;
  customerPassword = this.customerPassword.value;

  if ((this.customerName.value < 3) || (this.customerPassword.value < 3)) {
    alert("Something Wrong? Your Name or PIN less than 3 character.")
  } 
  else { 
  form.style.display = "none";
  panel.style.display = "flex";

  document.querySelector(
    "#panelUser"
  ).innerHTML = `Welcome, ${customerName} what do you want?`;
  }
}

function modalClose() {
  depositeModal.style.display = "none";
  withdrawModal.style.display = "none";
  balanceModal.style.display = "none";
  panel.style.display = "flex";
}

function depositBtn() {
  depositeModal.style.display = "block";
}

function depositeDone() {
  if (depositeInput.value == 0 || depositeInput.value === "") {
    depositeInput.value = "";
    alert("Please, enter some money.");
  } else {
    yourBalance = depositeInput.value;
    alert(
      `You add to your balance ${depositeInput.value} AZN. Your balance: ${yourBalance} AZN`
    );
    depositeInput.value = "";
    modalClose();
  }
}

function withdrawBtn() {
  withdrawModal.style.display = "block";
}

function withdrawDone() {
  if (yourBalance < withdrawInput.value) {
    alert(`You have not enough money, your balance: ${yourBalance} AZN`);
    withdrawInput.value = "";
  } else if (withdrawInput.value == 0 || withdrawInput.value === "") {
    withdrawInput.value = "";
    alert("Fill in the correctly!");
  } else {
    yourBalance = yourBalance - withdrawInput.value;
    alert(
      `Deducet ${withdrawInput.value} AZN from your balance. Your balance: ${yourBalance} AZN`
    );
    withdrawInput.value = "";
    modalClose();
  }
}

function showbalanceBtn() {
  balanceModal.style.display = "block";
  document.querySelector(
    "#balanceInfo"
  ).innerHTML = `Your balance is: ${yourBalance} AZN`;
}
