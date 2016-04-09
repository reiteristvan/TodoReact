
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')  
};

const common = {
  entry: {
      app: PATHS.app
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]  
  },
  output: {
      path: PATHS.build,
      filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.css$/,
              loaders: [ 'style', 'css' ],
              include: PATHS.app
          },
          {
              test: /\.jsx?$/,
              loaders: [ 'babel?cacheDictionary' ],
              include: PATHS.app
          }
      ]
  }  
};

if(TARGET === 'start' || !TARGET){
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT,
            devtool: 'eval-source-map'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true
            })
        ]
    });
}

/*if(TARGET === 'build'){
    module.exports = merge(common, {});
}*/