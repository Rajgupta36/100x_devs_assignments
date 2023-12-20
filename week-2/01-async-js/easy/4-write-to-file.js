/*_## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
_*/
const fs = require('fs');
fs.writeFile('newfile.txt', 'content := hiii this is a file that created by using filesystem writefile function', function (err, data) {
    console.log('done');
})
fs.unlink('12-counter.js', function () {
    console.log("done");
});