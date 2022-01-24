// webpack.config.js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.tsx', // our entry point, as mentioned earlier
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
                loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
                use: ['style-loader', 'css-loader'],
            },
            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },
            {
              test: /\.s[ac]ss$/,
              exclude: /node_modules/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js', // our output bundle
    },

    /* devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,

    },*/
    devServer: {
      // contentBase
      static : {
        directory : path.join(__dirname, "public/")
      },
      port: 3030,
      // publicPath
      devMiddleware:{
         publicPath: "https://localhost:3030/dist/",
      },
      // hotOnly
      hot: "only",
    },
    devtool: 'eval-source-map', // builds high quality source maps
}
