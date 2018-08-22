const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  return {
      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          exclude: /node_modules/,
          loader: 'file-loader?name=assets/fonts/[name].[ext]'
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          exclude: /node_modules/,
          loader: 'file-loader?name=assets/images/[name].[ext]'
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
        filename: isDev ? "[name].css" : "[name].[chunkhash].css",
        chunkFilename: isDev ? "[id].css" : "[id].[chunkhash].css"
      })
    ]
  }
};