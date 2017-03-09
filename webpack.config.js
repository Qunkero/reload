let webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',
    entry:   {
        library: ['./library']
    },
    output:  {
        path:       __dirname + '/public',
        publicPath: '/',
        filename:   '[name].js'
    },

    module: {

        loaders: [{
            test:   /\.js$/,
            include: __dirname + '/frontend',
            loader: "babel",
            query: {
                presets: ['es2015']
            }
        }, {
            test:   /\.jade$/,
            loader: "jade"
        }, {
            test:   /\.styl$/,
            loader: 'style!css!stylus?resolve url'
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[name].[ext]?[hash]'
        }]

    },
    devServer: {
        // hot:true,
        contentBase:__dirname + '/public',
        host: 'localhost', // default
        port: 3000 // default
    }
};