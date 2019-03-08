//entry point ? app.js 
//a node thing
const path = require('path');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};