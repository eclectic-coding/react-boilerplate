const Dotenv = require('dotenv-webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ],
}