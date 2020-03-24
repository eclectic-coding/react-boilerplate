const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line global-require
              implementation: require('node-sass'),
              sassOptions: {
                fiber: false
              },
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // eslint-disable-next-line global-require,import/no-extraneous-dependencies
      template: require('html-webpack-template'),
      title: 'React Boilerplate',
      inject: false,
      appMountId: 'app',
      mobile: true,
      lang: 'en_US'
    })
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
}
