const fs = require("fs").promises;
// import fs from 'fs';

// With callbacks (traditional way):

// function readFile(path, cb) {
//     fs.readFile(path, (err, data) => {
//         // Readed
//         cb(data.toString());
//     });
// }

// function writeFile(path, data, cb) {
//     fs.writeFile(path, data, (err) => {
//         if (err) {
//             console.error('Error: write was not possible', err)
//         } else {
//             console.log('Writed successfully');
//         }
//     });
// }

// function deleteFile(path, cb) {
//     fs.unlink(path, cb)
// }

// With promises (new way):

const readFile = async () => {
  const file = await fs.readFile(__dirname + "/file2.txt", { encoding: "utf-8" });
  console.log(file);
};

const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
    // console.log(promise);
  } catch (error) {
    console.error(error);
  }
};

const deleteFile = async (path) => {
  try {
    await fs.unlink(path);
  } catch (error) {
    console.error(error);
  }
};

// readFile(__dirname + '/file1.txt', console.log)
// writeFile(__dirname + '/file1.txt', "I'm a new file", console.log)
// deleteFile(__dirname + '/file1.txt', console.log)

// -----

writeFile(__dirname + "/file2.txt", "Hello world!!!");
readFile();
setTimeout(() => deleteFile(__dirname + "/file2.txt"), 4000);
