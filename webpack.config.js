module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
}