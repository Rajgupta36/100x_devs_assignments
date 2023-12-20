/*## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

*/

const fs = require('fs');
console.log('before reading');
fs.readFile('1-counter.js', 'utf8', function (err, data) {
    console.log(data);
})
fs.writeFile('12-counter.js', 'hii this is wiritng file ', function (err, data) {
    console.log("writing done");
})
fs.appendFile('12-counter.js', 'this is new appended text ', function (err, data) {
    console.log("appending done");
});
console.log('after reading');