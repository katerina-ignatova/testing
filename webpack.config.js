const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  return {
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 2,
                      sourceMap: true
                  }
              },
              {
                  loader: 'postcss-loader',
                  options: {
                      ident: 'postcss',
                      plugins: () => [
                          autoprefixer({
                              browsers: ['> 0.1%']
                          })
                      ]
                  }
              },
              {
                  loader: 'sass-loader'
              }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }
}