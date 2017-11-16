var
  path = require('path')

  // webpack plugin
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  , CleanWebpackPlugin = require('clean-webpack-plugin')
  , CopyWebpackPlugin = require('copy-webpack-plugin')
;

var
  IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
  , IS_PRODUCTION = process.env.NODE_ENV === 'production'
  , cssIdentifier = IS_PRODUCTION ? '[hash:base64:10]' : '[path][name]__[local]'
;

let
  imageWebpackLoaderConfig = {
    loader: 'image-webpack-loader',
    options: {
      query: {
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        gifsicle: {
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 6,
        },
        pngquant: {
          quality: '65-90',
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              removeViewBox: false
            },
            {
              removeEmptyAttrs: false
            }
          ]
        },
      },
    }
  }
;


var config = {
  entry: [
    path.resolve('src', 'index.js')
  ],

  output: {
    path: IS_DEVELOPMENT
      ? path.resolve('dist')
      : path.resolve('build'),
    filename: IS_PRODUCTION
      ? 'simulateChatting.min.js'
      : 'simulateChatting.js',
    library: 'SimulateChat',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ],
    extensions: ['.js']
  },

  module: {
    rules: [
      // Scripts
      {
        test: /\.js$/,
        include: [
          path.resolve('src'),
        ],
        exclude: [
          path.resolve('node_modules'),
        ],
        loader: 'babel-loader'
      },

      // Pictures
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [
          path.resolve('node_modules'),
        ],
        include: [
          path.resolve('src'),
          path.resolve('static'),
        ],
        use: [
          {
            loader: 'url-loader',
          },
          imageWebpackLoaderConfig,
        ],
      },

      // Style
      {
        test: /\.scss$/,
        exclude: [
          path.resolve('node_modules'),
        ],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: cssIdentifier,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
            },
          },
        ]
      },

      // Pug template
      {
        test: /\.pug$/,
        include: [
          path.resolve('src'),
          path.resolve('static')
        ],
        exclude: [
          path.resolve('node_modules')
        ],
        loader: 'pug-loader'
      }
    ]
  },

  plugins: []
};

// dev mode
if (IS_DEVELOPMENT) {
  // devtool
  config.devtool = 'source-map';

  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve('./static', 'view', 'index.pug'),
    }),

    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false
    }),

    new CopyWebpackPlugin([{
      from: path.resolve('static', 'demoFiles', '*'),
      to: path.resolve('dist'),
      flatten: true
    }]),

    new BrowserSyncPlugin({
      server: {
        baseDir: 'dist',
      },
    }, {
      reload: true,
    })
  );
}

// production mode
if (IS_PRODUCTION) {
  config.plugins.push(
    new CleanWebpackPlugin(['build'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false
    }),

    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 5,
        output: {
          comments: false,
          beautify: false
        },
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true
        },
        warnings: false,
        sourceMap: true
      }
    })
  );
}

module.exports = config;
