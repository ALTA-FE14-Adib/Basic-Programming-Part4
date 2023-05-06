//Problem 2 - Fibonacci (Recursive)
// Dalam matematika, bilangan Fibonacci adalah barisan yang didefinisakan secara rekursif sebagai berikut:
// Penjelasan : barisan ini berawal dari 0 dan 1, kemudian angka berikutnya didapat dengan cara
// menambahkan kedua bilangan yang berurutan sebelumnya. Dengan aturan ini, maka barisan bilangan Fibonanci
// yang pertama adalah :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946 ...
// Diberi nomor n, cetak Nomor Fibonacci ke-n.

function fibonacci(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(20));
