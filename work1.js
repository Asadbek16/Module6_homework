function countEvenOddZeroElements(array) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        if (array[i] === 0) {
          zeroCount++;
        } else if (array[i] % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
    }
  
    console.log("Чётные элементы:", evenCount);
    console.log("Нечётные элементы:", oddCount);
    console.log("Нулевые элементы:", zeroCount);
  }
  
  const myArray = [1, true, 5, null, 0, "hello", 8, 0, 10];
  countEvenOddZeroElements(myArray);