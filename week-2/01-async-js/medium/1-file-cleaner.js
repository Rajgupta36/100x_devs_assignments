/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

````
hello world my name is raman
```*/
const fs = require('fs');
fs.readFile('1.txt', 'utf8', function (err, data) {
    console.log(data);
    console.log('after performing operation');
    const y = data.replace(/\s+/g, ' ');
    console.log(y);
})
