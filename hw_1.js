const userPassword = null;

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

// Write code under this line
if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else {
  message = ACCESS_DENIED;
}

// console.log(message);

const orderPieces = null;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = pricePerDroid * orderPieces; // Write code in this line
let balanceСredit = credits - totalPrice; // Write code in this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (balanceСredit >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
} else {
  message = ACCESS_DENIED;
}

// console.log(message);

const countryName = "КитаЙ";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CNINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code in this line
  switch (country) {
    // Write code under this line
    case CNINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  // Write code in this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
