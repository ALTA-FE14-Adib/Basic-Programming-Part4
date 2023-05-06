//Problem 1 - Prima ke X (Tanpa Recursive)
//Dalam matematika, bilangan prima adalah bilangan asli yang lebih besar dari angka 1, yang faktor
//pembaginya adalah 1 dan bilangan itu sendiri. Angka 2 dan 3 adalah bilangan prima. Angka 4 bukan
//bilangan prima karena 4 bisa dibagi 2. Sepuluh deret bilangan prima yang pertama adalah [2,3,5,7,11,13
//17,19,23 dan 29]

//Buatlah sebuah fungsi bernama primeX yang menampilkan bilangan prima sesuai dengan deret urutnya.

// function getNthPrime(n) {
//   let count = 0;
//   let current = 2;

//   while (count < n) {
//     let isPrime = true;

//     // Check if current is prime
//     for (let i = 2; i <= Math.sqrt(current); i++) {
//       if (current % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       count++;
//     }

//     if (count === n) {
//       return current;
//     }

//     current++;
//   }
// }
// console.log(getNthPrime(4));

function checkPrime(n) {
  let count = 0;
  let number = 2;

  while (count < n) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
    number++;
  }
  return number - 1;
}
console.log(checkPrime(4));
