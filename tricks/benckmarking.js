console.time('all')

let sum = 0;
console.time('loop');
for (let i = 0; i < 100000000; i++) {
    sum += 1;
}
console.timeEnd('loop');

console.time('loop 2');
for (let i = 0; i < 100000000; i++) {
    sum++;
}
console.timeEnd('loop 2');


let sum2 = 0;
console.time('loop 3');
for (let j = 0; j < 100000000; j++) {
    sum2 += 1;
}
console.timeEnd('loop 3');

console.time('async');
console.log('Start the async process');
async()
    .then(() => {
        console.timeEnd('async')
    })

console.timeEnd('all')

function async() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Async process finished');   
            resolve();
        })
    })
}