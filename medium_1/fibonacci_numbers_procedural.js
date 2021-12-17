/*
f(1) = 1
f(2) = 1

f(3) = f(2) + f(1)
f(4) = f(3) + f(2)
f(5) = f(4) + f(3)
f(6) = f(5) + f(4)
f(7) = f(6) + f(5)
*/

function fibonacci(nth) {
  if (nth <= 2) return 1;

  let fibMinus1 = 1;
  let fibMinus2 = 1;
  let fibn;

  for (let idx = 3; idx <= nth; idx += 1) {
    fibn = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibn;
  }
  return fibn;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050