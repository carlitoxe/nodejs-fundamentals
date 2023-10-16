const { createReadStream } = require('fs');
const { Transform } = require('stream');
const util = require('util');

let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');
// readableStream.setEncoding('UTF8');

// readableStream.on('data', (chunk) => {
//     // console.log(chunk);
//     data += chunk;
// })

// readableStream.on('end', () => {
//     console.log(data);
// })

// process.stdout.write('Hello');
// process.stdout.write('how');
// process.stdout.write('are');
// process.stdout.write('you');
// process.stdout.write('doing?');

// function Mayus() {
//     Transform.call(this);
// }
// util.inherits(Mayus, Transform);

// Mayus.prototype._transform = function (chunk, codif, cb) {
//     chunkMayus = chunk.toString().toUpperCase();
//     this.push(chunkMayus);
//     cb();
// }

// let mayus = new Mayus();

// readableStream
//     .pipe(mayus)
//     .pipe(process.stdout);

// Easier way:

const mayus = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readableStream = createReadStream(__dirname + "/input.txt");

readableStream.pipe(mayus).pipe(process.stdout);
