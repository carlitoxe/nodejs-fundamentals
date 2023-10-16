const os = require('os');

// console.log('OS architecture:', os.arch());
// platform = os.platform()
// console.log('Platform:', platform[0].toUpperCase() + platform.slice(1));

console.log('CPUs:', os.cpus().length);

console.log(os.constants);

const SIZE = 1024; 
function kb(bytes) {
    return bytes / SIZE
}

function mb(bytes) {
    return kb(bytes) / SIZE
}

function gb(bytes) {
    return mb(bytes) / SIZE
}

// console.log(os.freemem() + ' bytes');
// console.log(kb(os.freemem()) + ' kB');
// console.log(mb(os.freemem()).toFixed(3) + ' MB');
// console.log(gb(os.freemem()).toFixed(3) + ' GB');

// console.log(gb(os.totalmem()).toFixed(3) + ' GB');

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());
console.log(os.networkInterfaces());


let arch = os.arch();
let platform = os.platform()
let cpus = os.cpus().length;
let freeMem = (os.freemem() / 1024)
let user = (os.hostname())

console.table([{
    'Arquitectura': arch,
    'Plataforma': platform,
    'CPU': cpus,
    'Free memory (kb)': freeMem,
    'User': user
} 
]);


