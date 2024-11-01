const inputCardNumber = document.querySelector("input#card_number");
const inputDateNumber = document.querySelector("input#card_date");

const formatCardNumber = (value) => value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
const formatDateNumber = (value) => value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");

inputCardNumber.addEventListener("input", () => inputCardNumber.value = formatCardNumber(inputCardNumber.value));
inputDateNumber.addEventListener("input", () => inputDateNumber.value = formatDateNumber(inputDateNumber.value));
