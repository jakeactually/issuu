const fs = require('fs');
const reversed = require('./reversed.js');

fs.readFile('page_1.bin', (_, data) => {
    const page = reversed.Page.decode(data);
    console.log(page);
});
