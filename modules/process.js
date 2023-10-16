// const process = require('process');

process.on('beforeExit', () => {
    console.log('The process is going to finish');
})

process.on('exit', () => {
    console.log('The process has finished');
    setTimeout(() => {
        console.log('This is not displayed never');
    }, 0)
})


setTimeout(() => {
    console.log('This is displayed!');
}, 0)

process.on('uncaughtException', (err, origin) => {
    console.log('Oops, we forgot catch an error');
    setTimeout(() => {
        console.log('This comes from exceptions');
    }, 0)
})

functionThatDoesnExist();

console.log('If the error its not catched, this is not displayed');

// process.on('uncaughtRejection', () => {
//     console.log('The process has finished');
// })