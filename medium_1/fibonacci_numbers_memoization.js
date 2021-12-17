const FIBONACCI_NUMBERS = {
  1: 1,
  2: 1,
};

function fibonacci(nth) {
  if (nth <= 2) return 1;

  FIBONACCI_NUMBERS[nth] = fibonacci(nth - 1) + FIBONACCI_NUMBERS[nth - 2];
  return FIBONACCI_NUMBERS[nth];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050