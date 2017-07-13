const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'app': './/src/app.js'
  },
  output: {
    filename: './[name]-[hash].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: './index.html',
    template: './src/template.html'
  })]
}
