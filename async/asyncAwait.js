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
            resolve(name);
            // reject('There is an error')
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

async function main() {
    let name = await hello('Carlos');
    await talk();
    await talk();
    await talk();
    await bye(name);
    console.log('Ending process');
}
console.log('Starting process');
main();
console.log('Second instruction');

