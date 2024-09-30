function f1() {
  const div = document.getElementById("div-1");  // Отримуємо блок
  div.style.width = "200px";                     // Встановлюємо ширину
  div.style.height = "90px";                     // Встановлюємо висоту
  div.textContent = `Ширина: ${div.style.width}, Висота: ${div.style.height}`;  // Виводимо значення
}

// Додаємо обробник події на кнопку
document.getElementById("b-1").addEventListener("click", f1);

function toggleBackground() {
  const div = document.getElementById("div-2");  // Отримуємо блок

  // Перемикаємо клас 'bg-orange'
  div.classList.toggle("bg-orange");
}

// Додаємо обробник події на кнопку
document.getElementById("b-2").addEventListener("click", toggleBackground);

function checkClass() {
  const div = document.getElementById("div-2");  // Отримуємо блок div-2
  const output = document.getElementById("out-3"); // Отримуємо елемент для виведення результату

  // Перевіряємо наявність класу bg-orange
  const hasClass = div.classList.contains("bg-orange");

  // Виводимо результат (true або false)
  output.textContent = hasClass; 
}

// Додаємо обробник події на кнопку
document.getElementById("b-3").addEventListener("click", checkClass);

function addClassToBlocks() {
  const blocks = document.querySelectorAll(".out-4");  // Отримуємо всі блоки з класом .out-4

  // Цикл для додавання класу .bg-red до кожного блоку
  blocks.forEach(block => {
    block.classList.add("bg-red");
  });
}

// Додаємо обробник події на кнопку
document.getElementById("b-4").addEventListener("click", addClassToBlocks);

function toggleClassOnClick() {
  const blocks = document.querySelectorAll(".out-5");  // Отримуємо всі блоки з класом .out-5

  // Додаємо обробник події на клік для кожного блоку
  blocks.forEach(block => {
    block.addEventListener("click", function() {
      this.classList.toggle("bg-blue");  // Перемикаємо клас .bg-blue для натиснутого блоку
    });
  });
}

// Викликаємо функцію для прив'язки подій
toggleClassOnClick();

function setupCounter() {
  const inputNumber = document.getElementById("number"); // Отримуємо input для числа
  const btnIncrement = document.getElementById("btn-increment"); // Кнопка +
  const btnDecrement = document.getElementById("btn-decrement"); // Кнопка -

  let count = 0; // Ініціалізуємо лічильник

  // Додаємо обробник події на кнопку +
  btnIncrement.addEventListener("click", () => {
    count++; // Збільшуємо лічильник
    inputNumber.value = count; // Виводимо нове значення в input
  });

  // Додаємо обробник події на кнопку -
  btnDecrement.addEventListener("click", () => {
    count--; // Зменшуємо лічильник
    inputNumber.value = count; // Виводимо нове значення в input
  });
}

// Викликаємо функцію для налаштування лічильника
setupCounter();

function addColorBlock() {
  const colorContainer = document.getElementById("block-color");  // Отримуємо контейнер для кольорових блоків

  // Генеруємо випадковий колір
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  // Створюємо новий блок
  const newBlock = document.createElement("div");
  newBlock.classList.add("block-color__item");  // Додаємо клас для стилізації
  newBlock.style.backgroundColor = randomColor;  // Встановлюємо випадковий колір
  newBlock.style.width = "50px";  // Ширина блоку
  newBlock.style.height = "50px";  // Висота блоку
  newBlock.style.cursor = "pointer";  // Змінюємо курсор при наведенні

  // Додаємо обробник події на клік для видалення блоку
  newBlock.addEventListener("click", () => {
    colorContainer.removeChild(newBlock);  // Видаляємо блок при натисканні
  });

  // Додаємо новий блок до контейнера
  colorContainer.appendChild(newBlock);
}

// Додаємо обробник події на кнопку
document.getElementById("btn-color").addEventListener("click", addColorBlock);

function changeTextColor(event) {
  const selectedColor = event.target.dataset.color;  // Отримуємо колір з data-color
  const textElement = document.querySelector(".text-color"); // Отримуємо елемент з текстом

  if (selectedColor) {
    textElement.style.color = selectedColor;  // Змінюємо колір тексту
  }
}

// Додаємо обробники подій на кольорові елементи палітри
const colorPaletteItems = document.querySelectorAll(".color-palette__item");
colorPaletteItems.forEach(item => {
  item.addEventListener("click", changeTextColor);
});
