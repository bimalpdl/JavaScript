const prompt = require('prompt-sync')();
const fs = require('fs');

let fileName = prompt('Enter file name: ');
let fileContent = prompt('Enter file content: ');

fs.writeFile(fileName, fileContent, (err) => {
    if (err) throw err;
    console.log(`${fileName} was written with some content`);
})

let updatedFileName = prompt('Enter a new file name: ');

fs.rename(fileName, updatedFileName, (err) => {
    if (err) throw err;
    console.log(`${fileName} was renamed as ${updatedFileName}, while maintaining the file content.`);
})