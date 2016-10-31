module.exports = {
  devtool: 'cheap-module-source-map',

  resolve: {
    // Default: ["", ".webpack.js", ".web.js", ".js"]
    // ここで指定した拡張子は、`import from`時に省略できる
    extensions: [
      '.js',
      '.babel.js',
      '.json'
    ]
  },

  entry: './src/index.babel.js',
  output: {
    filename: './local/scripts/index.js'
  },

  module: {
    loaders: [
      {
        test: /\.babel\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react'
          ],
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy'
          ]
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
    ]
  }
};
