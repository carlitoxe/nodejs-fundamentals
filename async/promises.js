function hello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello ' + name);
            resolve(name);
        }, 1500)
    })
}

function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            // resolve(name);
            reject('There is an error')
        }, 1000)
    })
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bye ' + name);
            resolve();
        }, 1000)
    })
}

// ---

console.log('Starting process...');
hello('Carlos')
    .then(talk)
    .then(talk)
    .then(talk)
    .then(talk)
    .then(bye)
    .then((name) => console.log('Process finished'))
    .catch((err) => console.log('Error: ' + err))
