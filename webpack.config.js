const trasformSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
    context: __dirname + '/frontend',
    entry:   {
        index: ['./index']
    },
    devtool: 'inline-source-map',
    output:  {
        path:       __dirname + '/public/script',
        publicPath: '/script',
        filename:   '[name].js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        // hot:true,
        contentBase:__dirname + '/public',
        host: 'localhost', // default
        port: 3000 // default
    }
};