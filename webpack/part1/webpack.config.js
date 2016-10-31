module.exports = {
  devtool: 'cheap-module-source-map',

  entry: './src/index.js',
  output: {
    filename: './local/scripts/index.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
    ]
  }
};
