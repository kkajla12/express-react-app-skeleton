const path = require('path');
const APP_DIR = path.resolve(__dirname);

module.exports = {
   entry: path.join(APP_DIR, 'index.js'),
   output: {
      path: path.join(APP_DIR, '../public/js'),
      filename: 'main.js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         }
      ]
   }
}