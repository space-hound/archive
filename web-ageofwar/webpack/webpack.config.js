const path = require('path');
const HWP = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { PREFIXES, POINTS, SHORTCUTS } = require("./webpack.variables");

const resolve = ( name ) => {
    return path.resolve(__dirname, name);
}

const ENTRIES = {};

const PAGES = POINTS.filter( POINT => {
    
    ENTRIES[POINT.js.name] = resolve(PREFIXES.SCRIPT + POINT.js.path);

    return POINT.hasOwnProperty("html");

}).map( POINT => {

    const { html } = POINT;

    return new HWP({
        template: resolve(PREFIXES.TEMPLATE + html.template),
        inject: "body",
        chunks: [...PREFIXES.CHUNKS, ...html.chunks],
        filename: html.name
    });
});

const ALIASES = {};

Object.keys(SHORTCUTS).forEach( key => {
    ALIASES[key] = resolve(PREFIXES.ALIAS + SHORTCUTS[key]);
});

module.exports = (env, argv) => {

    const MODE = argv.mode;

    const PLUGINS = [
        new MiniCssExtractPlugin(
            {
                filename: "styles/[name].css",
            }
        ),

        ...PAGES
    ];

    if(MODE === "production") {
        PLUGINS.push(new CleanWebpackPlugin())
    }
    
    return {
        mode: MODE,
    
        entry: ENTRIES,
    
        output: {
            filename: "js/[name].js",
            path: resolve("./../dist")
        },
    
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
                    test: /.*@fortawesome.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/fonts/"
                        }
                    }
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    exclude: /node_modules|castles|dices/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets"
                        }
                    }
                },
                {
                    test: /.*castles.*\.(svg|png|jpg|gif)$/,
                    exclude: /node_modules|dices/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/castles/"
                        }
                    }
                },
                {
                    test: /.*dices.*\.(svg|png|jpg|gif)$/,
                    exclude: /node_modules|castles/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/dices/"
                        }
                    }
                },
            ]
        },
    
        plugins: PLUGINS,
    
        resolve: {
            alias: ALIASES
        }
    }
}