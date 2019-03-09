//entry point ? app.js 
//a node thing
const path = require('path');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

//loader - customize behavior of webpack when you load a given file (.js, .jpeg, .scss)