function hello(name, callback) {
    // console.log('Hello, I am a async function');
    setTimeout(() => {
        console.log('Hello ' + name);
        callback(name);
    }, 1500)
}

function talk(callback) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callback();
    }, 1000)
}

function bye(name, callback) {
    setTimeout(() => {
        console.log('Bye ' + name);
        callback();
    }, 1000)
}

function conversation(name, times, callback) {
    if (times > 0) {
        talk(() => {
            conversation(name, --times, callback);
        })  
    } else {
        bye(name, callback)
    }
}

// --

console.log('Starting process...');
hello('toxe', (name) => {
    conversation(name, 3, () => {
        console.log('Process finished');
    })
})


// hello('toxe', (name) => {
//     talk(() => {
//         talk(() => {
//             talk(() => {
//                 bye(name, () => {
//                     console.log('Ending process...');
//                 })
//             })
//         })
//     })
// })
