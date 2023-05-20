const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './index2.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        //publicPath: path.join(__dirname, 'dist'),
        publicPath: '/',
        compress: true,
        port: 3000
    },
    experiments: {
        topLevelAwait: true
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
        'process.browser': 'true'
        })
    ]
};
