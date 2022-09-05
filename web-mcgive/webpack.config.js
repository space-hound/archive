
const path = require('path');

const resolve = relative => path.resolve(__dirname, relative);

/*===========================================================================*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*===========================================================================*/

module.exports = ( env, argv ) => {

    const MODE = argv.mode;

    return {

        mode: MODE,
        
        entry: './src/main.js',

        output: {
            path: resolve('./dist'),
            filename: 'js/script.js'
        },
    
        plugins: [
            new MiniCssExtractPlugin(
                {
                    filename: "styles/styles.css",
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
                            outputPath: "assets/images/"
                        }
                    }
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/fonts/"
                        }
                    }
                },
            ]
        },
    
        resolve: {
            alias: {
                
            }
        },

        node: {
            fs: 'empty' 
        }
    }
}