// const exec = require('child_process').exec;
const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })

// exec('node modules/console.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })

let process = spawn('ls', ['-la']);

console.log('pid:', process.pid);
console.log('process connected:', process.connected);

process.stdout.on('data', (data) => {
    console.log('process killed:', process.killed);
    console.log(data.toString())
})

process.on('exit', () => {
    console.log('The process has finished')
    console.log('process killed:', process.killed);
})