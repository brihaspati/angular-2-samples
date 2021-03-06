const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: './built-es6/app/main.js',
  output: {
    filename: 'dist/bundle-webpack-babili.js'
  },
  plugins: [
    new BabiliPlugin({}, {comments: false})
  ]
}