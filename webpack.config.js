module.exports = {
  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.js', '.json', '.babel.js'],
  },

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
