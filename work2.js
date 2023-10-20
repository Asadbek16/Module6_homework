function isPrimeNumber(num) {
    if (num <= 1) { 
      console.log("Данные неверны. Введите число больше 1.");
      return;
    }
  
    if (num > 1000) {
      console.log("Данные неверны. Введите число не больше 1000.");
      return;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log("Число", num, "не является простым.");
        return;
      }
    }
  
    console.log("Число", num, "является простым.");
  }
  
  isPrimeNumber(7);