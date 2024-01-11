function serialize(nums) {
    const serialized = nums.join(",");
    const encoded = btoa(serialized);
    return encoded;
  }
  
  function deserialize(encoded) {
    const decoded = atob(encoded);
    const nums = decoded.split(',').map(Number);
    return nums;
  }

  // Тестовые примеры
  // Случайные 50 чисел
  const test1 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1);

  const serializedTest1 = serialize(test1);
  console.log("Исходная строка:", test1);
  console.log("Сжатая строка:", serializedTest1);
  console.log("Коэффициент сжатия:", serializedTest1.length / JSON.stringify(test1).length);

  // Случайные 100 чисел
  const test2 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1);
  const serializedTest2 = serialize(test2);
  console.log("Исходная строка:", test2);
  console.log("Сжатая строка:", serializedTest2);
  console.log("Коэффициент сжатия:", serializedTest2.length / JSON.stringify(test2).length);

  // Случайные 500 чисел
  const test3 = Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1);
  const serializedTest3 = serialize(test3);
  console.log("Исходная строка:", test3);
  console.log("Сжатая строка:", serializedTest3);
  console.log("Коэффициент сжатия:", serializedTest3.length / JSON.stringify(test3).length);

  // Случайные 1000 чисел
  const test4 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1);
  const serializedTest4 = serialize(test3);
  console.log("Исходная строка:", test3);
  console.log("Сжатая строка:", serializedTest3);
  console.log("Коэффициент сжатия:", serializedTest3.length / JSON.stringify(test4).length);

  // Все числа 1 знака
const test5 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 9) + 1);
const serializedTest5 = serialize(test5);
console.log("Исходная строка:", test5);
console.log("Сжатая строка:", serializedTest5);
console.log("Коэффициент сжатия:", serializedTest5.length / JSON.stringify(test5).length);

// Все числа из 2х знаков
const test6 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 90) + 10);
const serializedTest6 = serialize(test6);
console.log("Исходная строка:", test6);
console.log("Сжатая строка:", serializedTest6);
console.log("Коэффициент сжатия:", serializedTest6.length / JSON.stringify(test6).length);

// Все числа из 3х знаков
const test7 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 900) + 100);
const serializedTest7 = serialize(test7);
console.log("Исходная строка:", test7);
console.log("Сжатая строка:", serializedTest7);
console.log("Коэффициент сжатия:", serializedTest7.length / JSON.stringify(test5).length);

// Каждого числа по 3 - всего чисел 900
const test8 = Array.from({ length: 900 }, (_, index) => (index % 300) + 1);
const serializedTest8 = serialize(test8);
console.log("Исходная строка:", test8);
console.log("Сжатая строка:", serializedTest8);
console.log("Коэффициент сжатия:", serializedTest8.length / JSON.stringify(test6).length);


// Есть множество (массив, где порядок не важен) целых чисел в диапазоне от 1 до 300. 
// Количество чисел - до 1000. Напишите функцию сериализации / десериализации в строку, чтобы итоговая строка была компактной.
// Цель задачи - максимально сжать данные относительно простой сериализации без алгоритма сжатия (хотя бы 50% в среднем). 
// Сериализованная строка должна содержать только ASCII символы. Можно использовать любой язык программирования.
// Вместе с решением нужно прислать набор тестов  - исходная строка, сжатая строка, коэффициент сжатия.
// Примеры тестов: простейшие короткие, случайные - 50 чисел, 100 чисел, 500 чисел, 1000 чисел, граничные - все числа 1 знака, все числа из 2х знаков, все числа из 3х знаков, каждого числа по 3 - всего чисел 900.
