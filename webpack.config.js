const path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.handlebars/,
        loader: 'handlebars-loader',
        exclude: /(node_modules|bower_components)/
        }
    ]
  },
  plugins: [
    new ProvidePlugin({
     $: "jquery/dist/jquery.min.js",
     jQuery: "jquery/dist/jquery.min.js",
     "window.jQuery": "jquery/dist/jquery.min.js",
    })]
};

