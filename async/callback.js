function hello(name, callback) {
    // console.log('Hello, I am a async function');
    setTimeout(() => {
        console.log('Hello ' + name);
        callback(name);
    }, 1500)
}

function bye(name, callback) {
    setTimeout(() => {
        console.log('Bye ' + name);
        callback();
    }, 1000)
}

console.log('Starting process...');
hello('toxe', (name) => {
    bye(name, () => {
        console.log('Ending process...');
    })
})

// hello('toxe', () => {})
// bye('toxe', () => {})