const length = parseInt(prompt('Введіть довжину масиву:'));

const array = [];
for (let i = 0; i < length; i++) {
  array.push(parseInt(prompt(`Введіть елемент з індексом ${i}:`)));
}

array.sort((a, b) => a - b);

document.write(`Масив після сортування: ${array}<br>`);

array.splice(1, 4);

document.write(`Масив після видалення елементів з 2 по 4: ${array}`);

