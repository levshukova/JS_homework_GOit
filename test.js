function includes(array, value) {
  // Пиши код ниже этой строки
  for (let el of array) {
    if (el === value) {
      return true;
    }
  }
  return false;

  // Пиши код выше этой строки
}
console.log(includes(["яблоко", "слива", "груша", "апельсин"], "киви"));
console.log(
  includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Юпитер")
);
console.log(includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Уран"));
