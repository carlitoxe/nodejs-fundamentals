function anotherFunction() {
    itsBroken();
}

function itsBroken() {
    return 3 + z;
}

function itsBrokenAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error in the async function: ' + error);
            cb(error)
        }
    })
}

try {
    // anotherFunction()
    itsBrokenAsync((error) => console.log(error.message));
} catch (error) {
    console.error('Error: ' + error);
    console.log('Dont worry, we catched the error');
}

console.log('This is the end');