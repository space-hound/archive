/*===========================================================================*/
    
const path = require('path');

/* just a shortcut to path.resolve(__dirname, "param") */
const resolve = (relPath) => {
    /* "__dirname" -> current absolute path */
    return path.resolve(__dirname, relPath);
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*===========================================================================*/

module.exports = {
    /* entry point where webpack will start looking for dependencies */
    entry: './src/js/main.js',
    /* output is where the webpack should create all the compiled assets */
    output: {
        /* output => ./dist/js/bundle.js */
        path: resolve('./dist'),
        filename: 'js/snake.js'
    },
    /* mode => production || development ('development' will not compress/minify the code to be faster) */
    mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    /* plugins is an array of all plugins you want to load */
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: "styles/snake.css",
            }
        ),
    
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            chunks: ['main'],
            filename: 'index.html'
        })
    ],
    /* module.rules is an array of all modules rules you want to use */
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },               
                    
                    'css-loader',
        
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets"
                    }
                }
            },
        ]
    },

    resolve: {
        alias: {
            styles: resolve("./src/scss/")
        }
    }
}