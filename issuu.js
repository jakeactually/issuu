const fs = require('fs');
const reversed = require('./reversed.js');

fs.readFile('page_1.bin', (_, data) => {
    const page = reversed.Page.decode(data);
    
    for (const item of page.layer)
        if (item.text) console.log(item.text.text);
});
