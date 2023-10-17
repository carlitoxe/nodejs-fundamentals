// Traditional vs Functional programming

console.time('traditional')
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = 0;
for (let i = 0; i < numList.length; i++) {
  if (numList[i] % 2 === 0) {
    result1 += numList[i] * 10;
  }
}
console.log(result1);
console.timeEnd('traditional')

console.time('functional')
const result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
               .filter(n => n % 2 === 0)
               .map(a => a * 10)
               .reduce((a, b) => a + b, 0);

console.log(result2);
console.timeEnd('functional')