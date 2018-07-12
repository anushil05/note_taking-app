console.log('Starting the Note App...');

//node and 3rd party module
const fs = require('fs');
const _ = require('lodash');

//user/my-own module
const notes = require('./note.js');

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add'){
    console.log('adding');
} else if (command === 'list'){
    console.log('listing all notes');
}else {
    console.log('command not recogonized');
}


