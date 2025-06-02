let prompt = require('prompt-sync')();
let fs = require('fs');

let str = prompt('Enter a random string!: ');

fs.writeFile('demo', str, (err) => {
    if (err) throw err;
    console.log('Something is written in the file');
})

let secondText = prompt('Enter second string: ');

fs.appendFile('demo', secondText, (err) => {
    if (err) throw err;
    console.log('Somthing was appended to the given file');
})

let del = prompt('Do you wanna delete the file? ( yes | no): ');
if (del == 'yes') {
    fs.unlink('demo', (err) => {
        if (err) throw err;
        console.log('The file deleted successfully');
    })
} else if (del == 'no' ) {
    console.log('The file is unmodified.');
} else {
    console.log('Invalid Input!');
}