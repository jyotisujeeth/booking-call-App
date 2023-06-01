function fibonacci(n) {
  if (n === 0 || n===1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let res= fibonacci(7);
console.log(res);		//output: 13